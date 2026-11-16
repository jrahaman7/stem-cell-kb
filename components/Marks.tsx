// Brand marks modelled on drjavid.bio: a geometric star-in-circle monogram and line-art compass ornaments.

export function Monogram({ size = 44 }: { size?: number }) {
  return (
    <svg className="monogram" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="var(--violet)" strokeWidth="1.2">
        <circle cx="32" cy="32" r="30" />
        <circle cx="32" cy="32" r="21" stroke="var(--accent)" />
        <rect x="14" y="14" width="36" height="36" />
        <rect x="14" y="14" width="36" height="36" transform="rotate(45 32 32)" />
      </g>
      <text x="32" y="36.5" textAnchor="middle" fontSize="12" fill="var(--accent-d)" style={{ fontFamily: "var(--serif)" }}>JR</text>
    </svg>
  );
}

export function Compass({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="120" cy="120" r="116" />
        <circle cx="120" cy="120" r="78" />
        <circle cx="120" cy="120" r="38" />
        <ellipse cx="120" cy="120" rx="116" ry="44" />
        <ellipse cx="120" cy="120" rx="44" ry="116" />
        <path d="M120 4 L178 120 L120 236 L62 120 Z" />
        <path d="M4 120 L120 62 L236 120 L120 178 Z" />
        <line x1="4" y1="120" x2="236" y2="120" />
        <line x1="120" y1="4" x2="120" y2="236" />
      </g>
    </svg>
  );
}
