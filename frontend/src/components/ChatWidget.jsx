import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

const WELCOME = {
  role: "assistant",
  content:
    "Hi — I can help you figure out which of our services fits your problem. What's slowing your business down?",
};

const SUGGESTIONS = [
  "We do too much manual data entry",
  "We need an app built",
  "Our servers keep going down",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, sending, open]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || sending) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setError("");
    setSending(true);
    try {
      // The API requires the conversation to start with a user message,
      // so drop the local welcome (and anything before the first user turn).
      const firstUser = next.findIndex((m) => m.role === "user");
      const res = await fetch(`${API}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(firstUser).slice(-20) }),
      });
      if (res.status === 429) {
        setError("You've sent a lot of messages — give it a little while, or just use the contact form.");
        return;
      }
      if (!res.ok) throw new Error("chat failed");
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setError("The assistant isn't available right now. The contact form below always works.");
    } finally {
      setSending(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="card-static rounded-lg shadow-xl flex flex-col overflow-hidden"
          style={{ width: "min(92vw, 380px)", height: "min(70vh, 520px)", boxShadow: "0 20px 50px -20px rgba(12,27,42,0.45)" }}
          role="dialog"
          aria-label="Chat with Pivot Bridge assistant"
        >
          <div className="bg-ink px-4 py-3 flex items-center justify-between">
            <div>
              <p className="f-display font-bold text-sm text-white">Pivot Bridge assistant</p>
              <p className="f-mono text-xs" style={{ color: "#8FA0B5" }}>Asks about your business, not your stack</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" style={{ background: "none", border: "none", cursor: "pointer", color: "#B8C4D6" }}>
              <X size={18} />
            </button>
          </div>

          <div ref={logRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" role="log" aria-live="polite">
            {messages.map((m, i) => (
              <div
                key={i}
                className="rounded-lg px-3.5 py-2.5 text-sm max-w-[85%]"
                style={
                  m.role === "user"
                    ? { background: "var(--blue)", color: "#fff", alignSelf: "flex-end" }
                    : { background: "#EEF2F8", color: "var(--ink)", alignSelf: "flex-start", lineHeight: 1.55 }
                }
              >
                {m.content}
              </div>
            ))}
            {sending && (
              <div className="rounded-lg px-3.5 py-2.5 text-sm self-start" style={{ background: "#EEF2F8", color: "var(--steel)" }}>
                Thinking…
              </div>
            )}
            {messages.length === 1 && !sending && (
              <div className="flex flex-col gap-2 mt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-left text-sm rounded-md border bd-line px-3 py-2"
                    style={{ background: "#fff", cursor: "pointer", color: "var(--steel)", fontFamily: "inherit" }}
                  >
                    "{s}"
                  </button>
                ))}
              </div>
            )}
            {error && <p className="text-sm" role="alert" style={{ color: "#B4322A" }}>{error}</p>}
          </div>

          <form onSubmit={onSubmit} className="border-t bd-line p-3 flex gap-2">
            <input
              className="field rounded-md px-3 py-2 text-sm flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your bottleneck…"
              maxLength={2000}
              aria-label="Your message"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="btn-primary rounded-md px-3.5 inline-flex items-center justify-center"
              aria-label="Send message"
              style={{ opacity: sending || !input.trim() ? 0.6 : 1 }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="btn-primary rounded-full inline-flex items-center justify-center"
        style={{ width: 52, height: 52, boxShadow: "0 10px 28px -10px rgba(34,81,204,0.6)" }}
        aria-label={open ? "Close chat" : "Chat with us"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
