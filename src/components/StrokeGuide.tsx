import type { CharacterDefinition } from '../data/types';
import { glyphPaths } from '../data/glyphPaths';
import { getStartPoints } from '../data/strokeStartPoints';

interface StrokeGuideProps {
  character: CharacterDefinition;
  currentStrokeIndex: number;
  completedStrokes: number;
  showStartHint: boolean;
  size: number;
}

export default function StrokeGuide({
  character,
  currentStrokeIndex,
  completedStrokes,
  size,
}: StrokeGuideProps) {
  const isComplete = completedStrokes >= character.strokeCount;
  const glyphPath = glyphPaths[character.char];
  const startPoints = getStartPoints(character.char);

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

      {/* Start point indicators with stroke numbers */}
      {!isComplete && startPoints && startPoints.map((pt, i) => {
        if (i >= character.strokeCount) return null;
        const isDone = i < completedStrokes;
        if (isDone) return null;

        const isCurrent = i === currentStrokeIndex;
        const r = isCurrent ? 6 : 4.5;

        return (
          <g key={`sp-${i}`}>
            {/* Pulsing ring for current stroke */}
            {isCurrent && (
              <circle
                cx={pt.x}
                cy={pt.y}
                r={9}
                fill="none"
                stroke="#FF6B6B"
                strokeWidth={1}
                opacity={0.4}
              >
                <animate
                  attributeName="r"
                  values="6;10;6"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0.1;0.5"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            {/* Circle background */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={r}
              fill={isCurrent ? '#FF6B6B' : '#BDBDBD'}
              opacity={isCurrent ? 0.9 : 0.5}
            />
            {/* Stroke number */}
            <text
              x={pt.x}
              y={pt.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={isCurrent ? 7 : 6}
              fontWeight={700}
              fill="white"
              style={{ fontFamily: 'sans-serif' }}
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
