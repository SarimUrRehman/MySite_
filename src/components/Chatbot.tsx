import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const KB: { match: RegExp; reply: string }[] = [
  {
    match: /(skill|tech|stack)/i,
    reply:
      "Sarim works with PHP, MySQL, React, MERN stack, ASP.NET, Firebase, and SQL.",
  },
  {
    match: /(project|work|portfolio)/i,
    reply:
      "Projects include Lab Automation, E-Commerce App, Event System, and Billing System.",
  },
  {
    match: /(education|study|cgpa)/i,
    reply:
      "BS Computer Science at Iqra University currently in 3 semester (CGPA 3.54/4.00).",
  },
  {
    match: /(contact|email|phone|hire)/i,
    reply:
      "Email: sarim.ur.rehman2006@gmail.com | Phone: 03166077749",
  },
  {
    match: /(hello|hi|hey)/i,
    reply:
      "Hi! Ask me about Sarim's projects, skills, or contact info.",
  },
];

function answer(q: string) {
  for (const { match, reply } of KB) {
    if (match.test(q)) return reply;
  }
  return "Ask me about skills, projects, education, or contact.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hey! I'm Sarim's portfolio assistant. Ask me anything.",
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  // ✅ With THIS new one:
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
    return () => clearTimeout(timer);
  }, [open]);

  const send = () => {
    const q = input.trim();
    if (!q) return;

    setMsgs((prev) => [
      ...prev,
      { role: "user", text: q },
      { role: "bot", text: answer(q) },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[999999] size-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[999999] w-[340px] h-[460px] bg-card border border-foreground/20 shadow-2xl flex flex-col"
          style={{
            pointerEvents: "auto",
            isolation: "isolate",
            transform: "translateZ(0)",
          }}
        >
          {/* Header */}
          <div className="bg-sage px-4 py-3 border-b border-foreground/20">
            <div className="text-[10px] text-foreground/70">
              Portfolio Assistant
            </div>
            <div className="font-bold text-lg">Ask about Sarim</div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-2 rounded-md max-w-[85%] ${
                  m.role === "user"
                    ? "ml-auto bg-foreground text-background"
                    : "bg-muted text-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input — replaced <form> with <div> to avoid nested form conflicts */}
          <div className="border-t border-foreground/20 p-2 flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a question..."
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-foreground caret-foreground"
            />
            <button
              onClick={send}
              className="bg-foreground text-background px-3 flex items-center"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}