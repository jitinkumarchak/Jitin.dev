import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MESSAGES = [
  "> booting jitin.dev...",
  "> brewing coffee ☕",
  "> loading creativity...",
  "> polishing pixels ✨",
  "> ready to ship 🚀",
];

export default function Loader({ onComplete }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);

  /* Keep ref in sync with the latest prop without triggering render */
  useLayoutEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    /* Skip animation entirely for users who prefer reduced motion */
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      onCompleteRef.current();
      return;
    }

    /* Rotate through witty messages */
    const msgTimer = setInterval(() => {
      setMsgIndex((i) => Math.min(i + 1, MESSAGES.length - 1));
    }, 450);

    /* Smooth progress bar */
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return p + 4;
      });
    }, 90);

    /* Graceful exit after ~2.4 s */
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
    /* aria-hidden so screen-readers skip the loader and move straight to content */
    <div
      aria-hidden="true"
      className={[
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b]",
        "transition-opacity duration-500",
        exiting ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      {/* Ambient blobs */}
      <div
        className="blob w-72 h-72 bg-purple-500 -top-16 -left-16 absolute"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="blob w-64 h-64 bg-cyan-500 bottom-0 right-0 absolute"
        style={{ animationDelay: "3s" }}
      />

      {/* Terminal card */}
      <div className="relative z-10 w-full max-w-sm mx-6 rounded-2xl border border-[#3f3f46] bg-[#18181b] shadow-2xl overflow-hidden">
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#3f3f46] bg-[#27272a]">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs text-[#a1a1aa] font-mono">jitin.dev — zsh</span>
        </div>

        {/* Terminal body */}
        <div className="p-6 font-mono text-sm space-y-2 min-h-[120px]">
          {MESSAGES.slice(0, msgIndex + 1).map((m, i) => (
            <p
              key={i}
              className={i === msgIndex ? "text-white" : "text-[#a1a1aa]"}
            >
              {m}
              {i === msgIndex && (
                <span className="ml-0.5 inline-block w-2 h-4 bg-[#a855f7] align-text-bottom animate-pulse" />
              )}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className="px-6 pb-6">
          <div className="w-full h-1.5 rounded-full bg-[#3f3f46] overflow-hidden">
            <div
              className="loader-bar h-full rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-right text-xs text-[#a1a1aa]">{progress}%</p>
        </div>
      </div>

      {/* Signature */}
      <p className="relative z-10 mt-8 text-xs text-[#52525b] tracking-widest uppercase font-mono">
        Made with ❤️ + ☕ by Jitin
      </p>
    </div>
  );
}
