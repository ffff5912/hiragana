interface MascotAccessoryProps {
  itemId: string;
}

export default function MascotAccessory({ itemId }: MascotAccessoryProps) {
  switch (itemId) {
    case 'ribbon':
      return (
        <g transform="translate(100, 30)">
          <path d="M-12 0 L0 -10 L12 0 L0 5Z" fill="#FF6B9D" />
          <path d="M-12 0 L0 10 L12 0 L0 -5Z" fill="#FF8DB5" />
          <circle cx="0" cy="0" r="3" fill="#FFD700" />
        </g>
      );
    case 'hat':
      return (
        <g transform="translate(100, 25)">
          <ellipse cx="0" cy="8" rx="28" ry="6" fill="#5D4037" />
          <rect x="-18" y="-15" width="36" height="23" rx="4" fill="#795548" />
          <rect x="-18" y="-2" width="36" height="5" fill="#FF9800" />
        </g>
      );
    case 'glasses':
      return (
        <g transform="translate(100, 88)">
          <circle cx="-14" cy="0" r="10" fill="none" stroke="#333" strokeWidth="2.5" />
          <circle cx="14" cy="0" r="10" fill="none" stroke="#333" strokeWidth="2.5" />
          <line x1="-4" y1="0" x2="4" y2="0" stroke="#333" strokeWidth="2.5" />
          <line x1="-24" y1="-2" x2="-30" y2="-5" stroke="#333" strokeWidth="2" />
          <line x1="24" y1="-2" x2="30" y2="-5" stroke="#333" strokeWidth="2" />
        </g>
      );
    case 'scarf':
      return (
        <g transform="translate(100, 130)">
          <path d="M-25 -5 Q0 5 25 -5 Q20 5 15 15 L-15 15 Q-20 5 -25 -5Z" fill="#E53935" />
          <path d="M5 10 L10 30 L0 28 L-5 10Z" fill="#C62828" />
        </g>
      );
    case 'cape':
      return (
        <g transform="translate(100, 125)">
          <path d="M-30 0 Q-40 30 -25 65 L25 65 Q40 30 30 0Z" fill="#7B1FA2" opacity="0.85" />
          <path d="M-30 0 Q-35 15 -28 30" fill="none" stroke="#9C27B0" strokeWidth="2" />
          <path d="M30 0 Q35 15 28 30" fill="none" stroke="#9C27B0" strokeWidth="2" />
        </g>
      );
    case 'crown':
      return (
        <g transform="translate(100, 28)">
          <polygon points="-20,8 -15,-8 -8,2 0,-15 8,2 15,-8 20,8" fill="#FFD700" />
          <rect x="-20" y="8" width="40" height="8" rx="2" fill="#FFC107" />
          <circle cx="-8" cy="12" r="2" fill="#E53935" />
          <circle cx="0" cy="10" r="2.5" fill="#2196F3" />
          <circle cx="8" cy="12" r="2" fill="#4CAF50" />
        </g>
      );
    case 'wand':
      return (
        <g transform="translate(155, 100)">
          <line x1="0" y1="0" x2="25" y2="40" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
          <polygon points="0,-8 -6,4 6,4" fill="#FFD700" transform="translate(0, -4)" />
          <circle cx="0" cy="-4" r="2" fill="#FFF9C4" />
        </g>
      );
    case 'wings':
      return (
        <g transform="translate(100, 100)">
          <path d="M35 0 Q55 -20 50 -40 Q45 -15 35 -10Z" fill="#B3E5FC" opacity="0.8" />
          <path d="M35 0 Q60 -10 65 -30 Q50 -5 35 -5Z" fill="#81D4FA" opacity="0.7" />
          <path d="M-35 0 Q-55 -20 -50 -40 Q-45 -15 -35 -10Z" fill="#B3E5FC" opacity="0.8" />
          <path d="M-35 0 Q-60 -10 -65 -30 Q-50 -5 -35 -5Z" fill="#81D4FA" opacity="0.7" />
        </g>
      );
    default:
      return null;
  }
}
