import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MESSAGES = [
  "> booting jitin.dev...",
  "> brewing coffee ☕",
  "> loading creativity...",
  "> polishing pixels ✨",
  "> ready to ship 🚀",
];

export default function Loader({ onComplete, dark }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useLayoutEffect(() => { onCompleteRef.current = onComplete; });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { onCompleteRef.current(); return; }

    const msgTimer = setInterval(() => {
      setMsgIndex((i) => Math.min(i + 1, MESSAGES.length - 1));
    }, 450);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(progressTimer); return 100; }
        return p + 4;
      });
    }, 90);

    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onCompleteRef.current(), 500);
    }, 2400);

    return () => {
      clearInterval(msgTimer);
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={[
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "transition-opacity duration-500",
        exiting ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      style={{ background: dark ? "#08070f" : "#ffffff" }}
    >
      {/* Blobs */}
      <div
        className="blob w-72 h-72 absolute -top-16 -left-16"
        style={{ background: "var(--accent)", opacity: 0.15 }}
      />
      <div
        className="blob w-64 h-64 absolute bottom-0 right-0"
        style={{ background: "#06b6d4", opacity: 0.12, animationDelay: "3s" }}
      />

      {/* Terminal card */}
      <div
        className="relative z-10 w-full max-w-sm mx-6 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          boxShadow: "0 32px 80px var(--accent-glow)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            borderBottom: "1px solid var(--border)",
            background: "var(--bg-alt)",
          }}
        >
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span
            className="ml-2 text-xs font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            jitin.dev — zsh
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-6 font-mono text-sm space-y-2 min-h-[120px]">
          {MESSAGES.slice(0, msgIndex + 1).map((m, i) => (
            <p
              key={i}
              style={{ color: i === msgIndex ? "var(--text)" : "var(--text-muted)" }}
            >
              {m}
              {i === msgIndex && (
                <span
                  className="ml-0.5 inline-block w-2 h-4 align-text-bottom animate-pulse"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className="px-6 pb-6">
          <div
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ background: "var(--surface)" }}
          >
            <div
              className="loader-bar h-full rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-right text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            {progress}%
          </p>
        </div>
      </div>

      {/* Signature */}
      <p
        className="relative z-10 mt-8 text-xs tracking-widest uppercase font-mono"
        style={{ color: "var(--text-faint)" }}
      >
        Made with ❤️ + ☕ by Jitin
      </p>
    </div>
  );
}
