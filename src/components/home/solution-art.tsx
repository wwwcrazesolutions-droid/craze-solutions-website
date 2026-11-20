type SolutionType = "operations" | "knowledge" | "saas";

export function SolutionArt({ type }: { type: SolutionType }) {
  return (
    <div className={`solution-art solution-art--${type}`} aria-hidden="true">
      <svg viewBox="0 0 320 180" width="100%" height="100%">
        {type === "operations" ? (
          <>
            <rect x="24" y="30" width="90" height="60" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(135,190,246,0.35)" />
            <rect x="130" y="50" width="90" height="60" rx="8" fill="rgba(47,113,243,0.25)" stroke="rgba(135,190,246,0.5)" />
            <rect x="210" y="25" width="90" height="70" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(135,190,246,0.35)" />
          </>
        ) : null}
        {type === "knowledge" ? (
          <>
            <circle cx="80" cy="95" r="42" fill="rgba(47,113,243,0.12)" stroke="#5b8cff" />
            <rect x="130" y="55" width="150" height="12" rx="4" fill="#cfe2ff" />
            <rect x="130" y="78" width="120" height="10" rx="4" fill="#dbe8fb" />
            <rect x="130" y="98" width="160" height="10" rx="4" fill="#dbe8fb" />
          </>
        ) : null}
        {type === "saas" ? (
          <>
            <rect x="35" y="35" width="250" height="110" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(135,190,246,0.35)" />
            <rect x="55" y="58" width="70" height="8" rx="3" fill="#89bafa" />
            <rect x="55" y="78" width="180" height="8" rx="3" fill="rgba(255,255,255,0.35)" />
            <rect x="55" y="98" width="140" height="8" rx="3" fill="rgba(255,255,255,0.25)" />
          </>
        ) : null}
      </svg>
    </div>
  );
}