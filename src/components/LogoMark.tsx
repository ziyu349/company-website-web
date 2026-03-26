type Props = {
  size?: number;
  className?: string;
};

export default function LogoMark({ size = 28, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-foreground"
      />
      <path
        d="M32 12c3.6 5.7 7.8 8.4 7.8 14.2 0 4.4-3.5 7.9-7.8 7.9s-7.8-3.5-7.8-7.9C24.2 20.4 28.4 17.7 32 12z"
        fill="currentColor"
        className="text-orange-500"
      />
      <path
        d="M32 34.5v13.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
      />
      <path
        d="M26.5 40.5 32 35l5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />
      <path
        d="M22 50h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
      />
    </svg>
  );
}

