"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-32">
      {/* Outer spinning ring */}
      <div className="relative w-16 h-16">
        {/* Main spinner ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-purple animate-spin"
          style={{ animationDuration: "0.8s" }}
        />
        {/* Inner spinner ring (counter-rotating) */}
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-neon-magenta border-l-neon-cyan animate-spin"
          style={{
            animationDuration: "1.2s",
            animationDirection: "reverse",
          }}
        />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"
          />
        </div>
      </div>

      {/* Loading text */}
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-mono text-text-muted tracking-widest">
          LOADING
        </span>
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-neon-purple animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
