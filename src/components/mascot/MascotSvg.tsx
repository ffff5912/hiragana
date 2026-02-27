import type { MascotStage } from '../../data/types';
import MascotAccessory from './MascotAccessory';

interface MascotSvgProps {
  stage: MascotStage;
  mood?: 'idle' | 'happy' | 'encouraging';
  equippedItems?: string[];
  size?: number;
}

function EggStage() {
  return (
    <g>
      <ellipse cx="100" cy="110" rx="35" ry="45" fill="#FFF8E1" stroke="#FFE0B2" strokeWidth="2" />
      <path d="M75 90 Q85 80 100 85 Q115 80 125 90" fill="none" stroke="#FFD54F" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="90" cy="100" r="3" fill="#795548" />
      <circle cx="110" cy="100" r="3" fill="#795548" />
    </g>
  );
}

function BabyStage({ mood }: { mood: string }) {
  const eyeR = mood === 'happy' ? 0 : 3.5;
  return (
    <g>
      <circle cx="100" cy="105" r="38" fill="#FFCC80" />
      <circle cx="100" cy="105" r="34" fill="#FFE0B2" />
      {/* eyes */}
      {mood === 'happy' ? (
        <>
          <path d="M86 95 Q90 90 94 95" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
          <path d="M106 95 Q110 90 114 95" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="90" cy="95" r={eyeR} fill="#5D4037" />
          <circle cx="110" cy="95" r={eyeR} fill="#5D4037" />
          <circle cx="91.5" cy="93.5" r="1" fill="#fff" />
          <circle cx="111.5" cy="93.5" r="1" fill="#fff" />
        </>
      )}
      {/* beak */}
      <ellipse cx="100" cy="108" rx="6" ry="4" fill="#FF8A65" />
      {/* blush */}
      <ellipse cx="80" cy="105" rx="6" ry="4" fill="#FFAB91" opacity="0.5" />
      <ellipse cx="120" cy="105" rx="6" ry="4" fill="#FFAB91" opacity="0.5" />
    </g>
  );
}

function ChildStage({ mood }: { mood: string }) {
  return (
    <g>
      <circle cx="100" cy="100" r="42" fill="#FFB74D" />
      <circle cx="100" cy="100" r="37" fill="#FFE0B2" />
      {/* small wing stubs */}
      <ellipse cx="60" cy="110" rx="12" ry="8" fill="#FFCC80" />
      <ellipse cx="140" cy="110" rx="12" ry="8" fill="#FFCC80" />
      {/* eyes */}
      {mood === 'happy' ? (
        <>
          <path d="M85 90 Q90 84 95 90" fill="none" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M105 90 Q110 84 115 90" fill="none" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : mood === 'encouraging' ? (
        <>
          <circle cx="90" cy="90" r="4" fill="#4E342E" />
          <circle cx="110" cy="90" r="4" fill="#4E342E" />
          <circle cx="91.5" cy="88.5" r="1.2" fill="#fff" />
          <circle cx="111.5" cy="88.5" r="1.2" fill="#fff" />
        </>
      ) : (
        <>
          <circle cx="90" cy="90" r="4" fill="#4E342E" />
          <circle cx="110" cy="90" r="4" fill="#4E342E" />
          <circle cx="91.5" cy="88.5" r="1.2" fill="#fff" />
          <circle cx="111.5" cy="88.5" r="1.2" fill="#fff" />
        </>
      )}
      {/* beak */}
      <path d="M94 102 L100 110 L106 102Z" fill="#FF7043" />
      {/* blush */}
      <ellipse cx="78" cy="100" rx="7" ry="4" fill="#FFAB91" opacity="0.4" />
      <ellipse cx="122" cy="100" rx="7" ry="4" fill="#FFAB91" opacity="0.4" />
      {/* feet */}
      <ellipse cx="88" cy="142" rx="10" ry="5" fill="#FF8A65" />
      <ellipse cx="112" cy="142" rx="10" ry="5" fill="#FF8A65" />
    </g>
  );
}

function TeenStage({ mood }: { mood: string }) {
  return (
    <g>
      <circle cx="100" cy="95" r="45" fill="#FFA726" />
      <circle cx="100" cy="95" r="40" fill="#FFE0B2" />
      {/* wings */}
      <path d="M55 105 Q35 85 45 70 Q50 90 60 100Z" fill="#FFCC80" />
      <path d="M145 105 Q165 85 155 70 Q150 90 140 100Z" fill="#FFCC80" />
      {/* tuft */}
      <path d="M95 52 Q100 40 105 52" fill="#FFA726" />
      <path d="M88 55 Q92 45 97 55" fill="#FFB74D" />
      {/* eyes */}
      {mood === 'happy' ? (
        <>
          <path d="M83 87 Q88 80 93 87" fill="none" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M107 87 Q112 80 117 87" fill="none" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="88" cy="87" r="5" fill="#3E2723" />
          <circle cx="112" cy="87" r="5" fill="#3E2723" />
          <circle cx="89.5" cy="85.5" r="1.5" fill="#fff" />
          <circle cx="113.5" cy="85.5" r="1.5" fill="#fff" />
        </>
      )}
      {/* beak */}
      <path d="M93 100 L100 109 L107 100Z" fill="#E64A19" />
      {/* belly */}
      <ellipse cx="100" cy="115" rx="22" ry="18" fill="#FFF8E1" />
      {/* feet */}
      <ellipse cx="86" cy="140" rx="12" ry="6" fill="#E64A19" />
      <ellipse cx="114" cy="140" rx="12" ry="6" fill="#E64A19" />
    </g>
  );
}

function AdultStage({ mood }: { mood: string }) {
  return (
    <g>
      <circle cx="100" cy="90" r="48" fill="#FF9800" />
      <circle cx="100" cy="90" r="42" fill="#FFE0B2" />
      {/* wings */}
      <path d="M52 100 Q25 75 35 55 Q42 80 58 95Z" fill="#FFB74D" />
      <path d="M148 100 Q175 75 165 55 Q158 80 142 95Z" fill="#FFB74D" />
      {/* tuft */}
      <path d="M93 45 Q98 28 103 45" fill="#FF9800" />
      <path d="M85 50 Q90 35 96 48" fill="#FFA726" />
      <path d="M104 48 Q110 35 115 50" fill="#FFA726" />
      {/* eyes */}
      {mood === 'happy' ? (
        <>
          <path d="M80 82 Q86 74 92 82" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
          <path d="M108 82 Q114 74 120 82" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="86" cy="82" r="6" fill="#3E2723" />
          <circle cx="114" cy="82" r="6" fill="#3E2723" />
          <circle cx="88" cy="80" r="2" fill="#fff" />
          <circle cx="116" cy="80" r="2" fill="#fff" />
        </>
      )}
      {/* beak */}
      <path d="M93 97 L100 107 L107 97Z" fill="#BF360C" />
      {/* belly */}
      <ellipse cx="100" cy="115" rx="26" ry="20" fill="#FFF8E1" />
      {/* tail */}
      <path d="M100 138 Q95 155 85 160 Q100 150 100 138Z" fill="#FFB74D" />
      <path d="M100 138 Q105 155 115 160 Q100 150 100 138Z" fill="#FFCC80" />
      {/* feet */}
      <ellipse cx="84" cy="142" rx="13" ry="6" fill="#BF360C" />
      <ellipse cx="116" cy="142" rx="13" ry="6" fill="#BF360C" />
    </g>
  );
}

function MasterStage({ mood }: { mood: string }) {
  return (
    <g>
      {/* glow */}
      <circle cx="100" cy="90" r="55" fill="#FFD700" opacity="0.15" style={{ animation: 'glow 2s ease-in-out infinite' }} />
      <circle cx="100" cy="90" r="50" fill="#FF9800" />
      <circle cx="100" cy="90" r="44" fill="#FFF3E0" />
      {/* wings */}
      <path d="M50 95 Q15 65 25 40 Q38 70 55 88Z" fill="#FFB74D" />
      <path d="M150 95 Q185 65 175 40 Q162 70 145 88Z" fill="#FFB74D" />
      <path d="M50 95 Q20 80 30 55 Q40 78 55 88Z" fill="#FFCC80" opacity="0.6" />
      <path d="M150 95 Q180 80 170 55 Q160 78 145 88Z" fill="#FFCC80" opacity="0.6" />
      {/* tuft - larger */}
      <path d="M90 42 Q95 22 100 42" fill="#FF9800" />
      <path d="M100 42 Q105 22 110 42" fill="#FF9800" />
      <path d="M82 48 Q88 32 94 46" fill="#FFA726" />
      <path d="M106 46 Q112 32 118 48" fill="#FFA726" />
      {/* eyes */}
      {mood === 'happy' ? (
        <>
          <path d="M78 80 Q85 71 92 80" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
          <path d="M108 80 Q115 71 122 80" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="85" cy="80" r="6" fill="#3E2723" />
          <circle cx="115" cy="80" r="6" fill="#3E2723" />
          <circle cx="87" cy="78" r="2" fill="#fff" />
          <circle cx="117" cy="78" r="2" fill="#fff" />
          {/* sparkle in eyes */}
          <circle cx="83" cy="77" r="1" fill="#FFD700" />
          <circle cx="113" cy="77" r="1" fill="#FFD700" />
        </>
      )}
      {/* beak */}
      <path d="M93 95 L100 106 L107 95Z" fill="#BF360C" />
      {/* belly */}
      <ellipse cx="100" cy="115" rx="28" ry="22" fill="#FFF8E1" />
      {/* star on belly */}
      <polygon points="100,105 102,111 108,111 103,115 105,121 100,117 95,121 97,115 92,111 98,111" fill="#FFD700" />
      {/* tail */}
      <path d="M100 140 Q92 162 78 168 Q95 155 100 140Z" fill="#FFB74D" />
      <path d="M100 140 Q108 162 122 168 Q105 155 100 140Z" fill="#FFCC80" />
      {/* feet */}
      <ellipse cx="84" cy="144" rx="14" ry="7" fill="#BF360C" />
      <ellipse cx="116" cy="144" rx="14" ry="7" fill="#BF360C" />
    </g>
  );
}

export default function MascotSvg({ stage, mood = 'idle', equippedItems = [], size = 120 }: MascotSvgProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      style={{ animation: 'float 3s ease-in-out infinite' }}
    >
      {/* Body behind accessories */}
      {equippedItems.includes('cape') && <MascotAccessory itemId="cape" />}
      {equippedItems.includes('wings') && <MascotAccessory itemId="wings" />}

      {/* Bird body by stage */}
      {stage === 'egg' && <EggStage />}
      {stage === 'baby' && <BabyStage mood={mood} />}
      {stage === 'child' && <ChildStage mood={mood} />}
      {stage === 'teen' && <TeenStage mood={mood} />}
      {stage === 'adult' && <AdultStage mood={mood} />}
      {stage === 'master' && <MasterStage mood={mood} />}

      {/* Front accessories */}
      {equippedItems.includes('ribbon') && <MascotAccessory itemId="ribbon" />}
      {equippedItems.includes('hat') && <MascotAccessory itemId="hat" />}
      {equippedItems.includes('crown') && <MascotAccessory itemId="crown" />}
      {equippedItems.includes('glasses') && <MascotAccessory itemId="glasses" />}
      {equippedItems.includes('scarf') && <MascotAccessory itemId="scarf" />}
      {equippedItems.includes('wand') && <MascotAccessory itemId="wand" />}
    </svg>
  );
}
