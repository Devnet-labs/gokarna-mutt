import { SVGProps } from "react";

export function Lotus({ size = 24, className = "", ...rest }: { size?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" {...rest}>
      <path d="M12 2c-1.5 3-3 5-5 7 0 0-2 2-2 4 0 1 1 2 2 2 1.5 0 3-1 5-3-2 4-4 6-7 7 1 1 4 2 7 2s6-1 7-2c-3-1-5-3-7-7 2 2 3.5 3 5 3 1 0 2-1 2-2 0-2-2-4-2-4-2-2-3.5-4-5-7z" />
      <path d="M12 11c-2 2-3 4-3 7 1 1 3 2 3 2s2-1 3-2c0-3-1-5-3-7z" opacity="0.7" />
    </svg>
  );
}

export function Om({ size = 24, className = "", ...rest }: { size?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...rest}>
      <text x="12" y="20" textAnchor="middle" fontSize="22" fill="currentColor" fontFamily="serif">ॐ</text>
    </svg>
  );
}

export function Conch({ size = 24, className = "", ...rest }: { size?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M8 21c0-3 1-5 3-7s4-4 4-7c0-2-1-4-3-4-1 0-2 1-3 3-2 4-5 8-5 12 0 2 1 3 4 3z" />
      <path d="M11 11c1-1 2-2 3-2" />
    </svg>
  );
}

export function Crown({ size = 24, className = "", ...rest }: { size?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" {...rest}>
      <path d="M3 9l3 5 3-7 3 6 3-6 3 7 3-5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    </svg>
  );
}

export function Trishul({ size = 24, className = "", ...rest }: { size?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M12 22V8" />
      <path d="M6 4v6c0 2 1 3 3 3" />
      <path d="M18 4v6c0 2-1 3-3 3" />
      <path d="M12 2v11" />
      <path d="M6 4h12" />
    </svg>
  );
}
