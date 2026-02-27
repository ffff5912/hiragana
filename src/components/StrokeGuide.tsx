import type { CharacterDefinition } from '../data/types';
import { glyphPaths } from '../data/glyphPaths';

interface StrokeGuideProps {
  character: CharacterDefinition;
  currentStrokeIndex: number;
  completedStrokes: number;
  showStartHint: boolean;
  size: number;
}

export default function StrokeGuide({
  character,
  completedStrokes,
  size,
}: StrokeGuideProps) {
  const isComplete = completedStrokes >= character.strokeCount;
  const glyphPath = glyphPaths[character.char];

  return (
    <svg
      viewBox="0 0 109 109"
      width={size}
      height={size}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Grid lines (manuscript paper style) */}
      <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="#F0E0D0" strokeWidth={0.5} strokeDasharray="3,3" />
      <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="#F0E0D0" strokeWidth={0.5} strokeDasharray="3,3" />

      {/* Character guide from actual font glyph outline */}
      {glyphPath ? (
        <path
          d={glyphPath}
          fill={isComplete ? '#C8E6C9' : '#D8D8D8'}
          opacity={isComplete ? 0.4 : 0.3}
          stroke="none"
        />
      ) : (
        <text
          x="54.5"
          y="54.5"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={78}
          fontFamily="'Zen Maru Gothic', 'Hiragino Maru Gothic ProN', sans-serif"
          fontWeight={400}
          fill={isComplete ? '#C8E6C9' : '#D8D8D8'}
          opacity={isComplete ? 0.5 : 0.35}
        >
          {character.char}
        </text>
      )}
    </svg>
  );
}
