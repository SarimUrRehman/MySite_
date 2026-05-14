import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const KB: { match: RegExp; reply: string }[] = [
  { match: /(skill|tech|stack)/i, reply: "Sarim works with PHP, MySQL, React, the MERN stack, ASP.NET, Firebase, and SQL — plus solid problem-solving and teamwork." },
  { match: /(project|work|portfolio)/i, reply: "Highlights: Lab Automation (PHP), an Online Bookstore with admin panel (React + Firebase), a MERN Event Management System, and an ASP.NET Online Billing System." },
  { match: /(education|study|university|college|cgpa)/i, reply: "Currently pursuing a BS in Computer Science at Iqra University (CGPA 3.54/4.00), with prior studies at Aptech Learning and Formens College Nazimabad." },
  { match: /(contact|email|phone|reach|hire)/i, reply: "Reach Sarim at sarim.ur.rehman2006@gmail.com or call 03166077749. GitHub: SarimUrRehman." },
  { match: /(who|about|introduce|name)/i, reply: "Sarim Ur Rehman — Computer Science student building toward a career in software development, sharpening skills through real projects." },
  { match: /(hello|hi|hey|salam)/i, reply: "Hi! I'm Sarim's portfolio assistant. Ask me about his projects, skills, education, or contact info." },
];

function answer(q: string): string {
  for (const { match, reply } of KB) if (match.test(q)) return reply;
  return "Good question! Try asking about Sarim's projects, skills, education, or how to get in touch.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hey — I'm Sarim's portfolio bot. Ask about projects, skills, or contact." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: answer(q) }]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] h-[460px] bg-card border border-foreground/20 shadow-2xl flex flex-col">
          <div className="bg-sage px-4 py-3 border-b border-foreground/20">
            <div className="font-mono-label text-[10px] text-foreground/70">Portfolio Assistant</div>
            <div className="font-display text-lg text-foreground">Ask about Sarim</div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`text-sm leading-relaxed max-w-[85%] px-3 py-2 ${
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-foreground/20 p-2 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-3 flex items-center"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}