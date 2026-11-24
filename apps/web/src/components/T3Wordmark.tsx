import type { SVGProps } from "react";

// Fork branding: the Norn three-strand mark, drawn in currentColor like the original wordmark.
export function T3Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 100 56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
        <path d="M6 28H94" opacity="0.55" />
        <path d="M6 28C22 54 38 54 50 28S78 2 94 28" opacity="0.75" />
        <path d="M6 28C22 2 38 2 50 28S78 54 94 28" />
      </g>
    </svg>
  );
}
