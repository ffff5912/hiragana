import React, { useRef, useEffect, useCallback } from 'react';
import type { CharacterDefinition, Point, UserStroke } from '../data/types';
import StrokeGuide from './StrokeGuide';

interface TracingCanvasProps {
  character: CharacterDefinition;
  currentStrokeIndex: number;
  completedStrokes: number;
  userStrokes: UserStroke[];
  currentPoints: Point[];
  currentColors: string[];
  isDrawing: boolean;
  showStartHint: boolean;
  onPointerDown: (point: Point) => void;
  onPointerMove: (point: Point) => void;
  onPointerUp: () => void;
}

export default function TracingCanvas({
  character,
  currentStrokeIndex,
  completedStrokes,
  userStrokes,
  currentPoints,
  currentColors,
  isDrawing,
  showStartHint,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: TracingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef(300);

  const getCanvasPoint = useCallback((e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = 109 / rect.width;
    const scaleY = 109 / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, []);

  // Draw user strokes on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = sizeRef.current;
    const scale = size / 109;

    ctx.clearRect(0, 0, size, size);

    // Draw completed user strokes
    for (const stroke of userStrokes) {
      if (stroke.points.length < 2) continue;
      ctx.beginPath();
      ctx.strokeStyle = '#4CAF50';
      ctx.lineWidth = 6 * scale;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(stroke.points[0].x * scale, stroke.points[0].y * scale);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x * scale, stroke.points[i].y * scale);
      }
      ctx.stroke();
    }

    // Draw current stroke with color feedback
    if (currentPoints.length >= 2) {
      for (let i = 1; i < currentPoints.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = currentColors[i] || '#4CAF50';
        ctx.lineWidth = 7 * scale;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.moveTo(currentPoints[i - 1].x * scale, currentPoints[i - 1].y * scale);
        ctx.lineTo(currentPoints[i].x * scale, currentPoints[i].y * scale);
        ctx.stroke();
      }
    }
  }, [userStrokes, currentPoints, currentColors]);

  // Resize handling
  useEffect(() => {
    const updateSize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const containerWidth = container.clientWidth;
      const maxSize = Math.min(containerWidth, window.innerHeight * 0.5);
      const size = Math.floor(maxSize);

      sizeRef.current = size;
      canvas.width = size;
      canvas.height = size;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 16px',
      }}
    >
      <div style={{
        position: 'relative',
        width: sizeRef.current,
        height: sizeRef.current,
        maxWidth: '100%',
        aspectRatio: '1',
        border: '3px solid #E8D8C8',
        borderRadius: 8,
        background: '#FFFDF8',
        overflow: 'hidden',
      }}>
        {/* SVG guide layer */}
        <StrokeGuide
          character={character}
          currentStrokeIndex={currentStrokeIndex}
          completedStrokes={completedStrokes}
          showStartHint={showStartHint}
          size={sizeRef.current}
        />

        {/* Canvas drawing layer */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            touchAction: 'none',
            cursor: 'crosshair',
          }}
          onPointerDown={(e) => {
            e.preventDefault();
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            onPointerDown(getCanvasPoint(e));
          }}
          onPointerMove={(e) => {
            e.preventDefault();
            if (isDrawing) {
              onPointerMove(getCanvasPoint(e));
            }
          }}
          onPointerUp={(e) => {
            e.preventDefault();
            onPointerUp();
          }}
          onPointerCancel={() => {
            onPointerUp();
          }}
        />
      </div>
    </div>
  );
}
