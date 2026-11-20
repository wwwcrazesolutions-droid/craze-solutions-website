export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 4 34 20 20 36 6 20 20 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M20 11 27 20 20 29 13 20 20 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M20 17 23 20 20 23 17 20 20 17Z" fill="currentColor" />
    </svg>
  );
}