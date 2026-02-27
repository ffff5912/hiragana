import { useCallback, useRef } from 'react';

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.3) {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Audio not supported
  }
}

export function useSound(enabled: boolean) {
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  const playStrokeComplete = useCallback(() => {
    if (!enabledRef.current) return;
    playTone(523, 0.15, 'sine', 0.2); // C5
  }, []);

  const playStar1 = useCallback(() => {
    if (!enabledRef.current) return;
    playTone(440, 0.2, 'sine', 0.25); // A4
  }, []);

  const playStar2 = useCallback(() => {
    if (!enabledRef.current) return;
    setTimeout(() => playTone(523, 0.2, 'sine', 0.25), 0); // C5
    setTimeout(() => playTone(659, 0.2, 'sine', 0.25), 150); // E5
  }, []);

  const playStar3 = useCallback(() => {
    if (!enabledRef.current) return;
    setTimeout(() => playTone(523, 0.15, 'sine', 0.25), 0);   // C5
    setTimeout(() => playTone(659, 0.15, 'sine', 0.25), 120);  // E5
    setTimeout(() => playTone(784, 0.3, 'sine', 0.3), 240);    // G5
  }, []);

  const playLevelUp = useCallback(() => {
    if (!enabledRef.current) return;
    setTimeout(() => playTone(523, 0.15, 'triangle', 0.3), 0);
    setTimeout(() => playTone(659, 0.15, 'triangle', 0.3), 100);
    setTimeout(() => playTone(784, 0.15, 'triangle', 0.3), 200);
    setTimeout(() => playTone(1047, 0.4, 'triangle', 0.35), 300);
  }, []);

  const playFail = useCallback(() => {
    if (!enabledRef.current) return;
    playTone(220, 0.3, 'sine', 0.15);
  }, []);

  const speak = useCallback((text: string) => {
    if (!enabledRef.current) return;
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      utterance.volume = 0.8;
      speechSynthesis.speak(utterance);
    } catch {
      // speechSynthesis not available
    }
  }, []);

  return {
    playStrokeComplete,
    playStar1,
    playStar2,
    playStar3,
    playLevelUp,
    playFail,
    speak,
  };
}
