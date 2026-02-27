import type { CharacterDefinition } from './types';

export const katakanaCharacters: Record<string, CharacterDefinition> = {
  // ア行 (a-row)
  'ア': {
    char: 'ア',
    romaji: 'a',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 30 35 L 80 35' },
      { index: 1, path: 'M 55 18 L 55 45 Q 55 70 40 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'イ': {
    char: 'イ',
    romaji: 'i',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 70 20 L 45 50' },
      { index: 1, path: 'M 45 30 L 45 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ウ': {
    char: 'ウ',
    romaji: 'u',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 52 18 L 52 28' },
      { index: 1, path: 'M 25 38 L 85 38' },
      { index: 2, path: 'M 25 38 L 25 60 Q 25 85 55 90 Q 85 85 85 60 L 85 38' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'エ': {
    char: 'エ',
    romaji: 'e',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 25 30 L 85 30' },
      { index: 1, path: 'M 55 30 L 55 82' },
      { index: 2, path: 'M 20 82 L 90 82' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'オ': {
    char: 'オ',
    romaji: 'o',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 35 25 L 35 90' },
      { index: 1, path: 'M 20 45 L 85 45' },
      { index: 2, path: 'M 65 25 L 65 55 Q 65 78 50 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // カ行 (ka-row)
  'カ': {
    char: 'カ',
    romaji: 'ka',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 50 15 L 50 55 Q 50 78 35 92' },
      { index: 1, path: 'M 25 35 L 85 35 L 85 55 Q 85 78 75 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'キ': {
    char: 'キ',
    romaji: 'ki',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 25 35 L 80 28' },
      { index: 1, path: 'M 25 60 L 80 53' },
      { index: 2, path: 'M 52 15 L 52 95' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ク': {
    char: 'ク',
    romaji: 'ku',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 50 18 L 75 40 Q 80 48 78 55' },
      { index: 1, path: 'M 25 35 L 70 35 L 55 60 Q 40 80 25 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ケ': {
    char: 'ケ',
    romaji: 'ke',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 30 20 L 30 70' },
      { index: 1, path: 'M 20 40 L 85 40' },
      { index: 2, path: 'M 65 25 L 65 50 Q 65 72 50 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'コ': {
    char: 'コ',
    romaji: 'ko',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 25 30 L 80 30 L 80 80' },
      { index: 1, path: 'M 25 80 L 80 80' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // サ行 (sa-row)
  'サ': {
    char: 'サ',
    romaji: 'sa',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 35 18 L 35 60' },
      { index: 1, path: 'M 70 18 L 70 60' },
      { index: 2, path: 'M 20 42 L 85 42 Q 80 70 60 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'シ': {
    char: 'シ',
    romaji: 'shi',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 25 35 Q 28 40 30 42' },
      { index: 1, path: 'M 30 60 Q 33 65 35 67' },
      { index: 2, path: 'M 25 80 Q 55 75 75 50 Q 85 35 80 20' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ス': {
    char: 'ス',
    romaji: 'su',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 25 25 L 80 25' },
      { index: 1, path: 'M 70 25 L 50 55 Q 42 68 30 75 M 50 55 Q 60 72 75 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'セ': {
    char: 'セ',
    romaji: 'se',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 40 18 L 40 90' },
      { index: 1, path: 'M 20 50 L 85 50 L 85 70 Q 85 85 70 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ソ': {
    char: 'ソ',
    romaji: 'so',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 30 25 Q 33 32 35 38' },
      { index: 1, path: 'M 75 22 Q 65 50 45 75 Q 35 88 28 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // タ行 (ta-row)
  'タ': {
    char: 'タ',
    romaji: 'ta',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 25 35 L 80 35' },
      { index: 1, path: 'M 55 18 L 55 50 Q 55 72 40 90' },
      { index: 2, path: 'M 65 55 Q 68 62 70 65' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'チ': {
    char: 'チ',
    romaji: 'chi',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 25 30 L 80 25' },
      { index: 1, path: 'M 20 52 L 88 52' },
      { index: 2, path: 'M 55 52 L 55 70 Q 55 85 42 95' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ツ': {
    char: 'ツ',
    romaji: 'tsu',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 20 30 Q 23 38 25 42' },
      { index: 1, path: 'M 50 25 Q 53 33 55 37' },
      { index: 2, path: 'M 80 20 Q 68 50 48 72 Q 35 85 25 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'テ': {
    char: 'テ',
    romaji: 'te',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 25 25 L 80 25' },
      { index: 1, path: 'M 20 50 L 88 50' },
      { index: 2, path: 'M 55 50 L 55 70 Q 55 85 42 95' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ト': {
    char: 'ト',
    romaji: 'to',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 38 15 L 38 92' },
      { index: 1, path: 'M 38 45 L 75 65' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // ナ行 (na-row)
  'ナ': {
    char: 'ナ',
    romaji: 'na',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 20 45 L 85 45' },
      { index: 1, path: 'M 60 18 L 60 50 Q 58 72 42 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ニ': {
    char: 'ニ',
    romaji: 'ni',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 30 38 L 80 38' },
      { index: 1, path: 'M 20 72 L 90 72' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ヌ': {
    char: 'ヌ',
    romaji: 'nu',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 20 30 L 82 30' },
      { index: 1, path: 'M 75 30 L 35 65 Q 28 72 30 78 Q 45 90 75 85 M 35 65 L 55 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ネ': {
    char: 'ネ',
    romaji: 'ne',
    strokeCount: 4,
    strokes: [
      { index: 0, path: 'M 20 30 L 88 30' },
      { index: 1, path: 'M 55 18 L 55 92' },
      { index: 2, path: 'M 25 55 L 55 70' },
      { index: 3, path: 'M 55 55 L 80 70 Q 85 75 82 82' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ノ': {
    char: 'ノ',
    romaji: 'no',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 75 15 Q 55 45 38 68 Q 25 85 20 95' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // ハ行 (ha-row)
  'ハ': {
    char: 'ハ',
    romaji: 'ha',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 48 22 Q 38 50 22 85' },
      { index: 1, path: 'M 58 22 Q 68 50 85 85' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ヒ': {
    char: 'ヒ',
    romaji: 'hi',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 35 20 L 35 75 Q 35 88 50 90 Q 72 90 82 78' },
      { index: 1, path: 'M 70 25 L 70 60' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'フ': {
    char: 'フ',
    romaji: 'fu',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 22 28 L 82 28 Q 78 55 60 75 Q 45 88 30 95' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ヘ': {
    char: 'ヘ',
    romaji: 'he',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 15 60 L 55 28 L 95 65' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ホ': {
    char: 'ホ',
    romaji: 'ho',
    strokeCount: 4,
    strokes: [
      { index: 0, path: 'M 20 28 L 88 28' },
      { index: 1, path: 'M 55 28 L 55 92' },
      { index: 2, path: 'M 25 55 Q 30 68 35 85' },
      { index: 3, path: 'M 82 55 Q 78 68 72 85' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // マ行 (ma-row)
  'マ': {
    char: 'マ',
    romaji: 'ma',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 18 30 L 88 30' },
      { index: 1, path: 'M 80 30 L 50 60 Q 35 75 25 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ミ': {
    char: 'ミ',
    romaji: 'mi',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 35 25 L 75 32' },
      { index: 1, path: 'M 30 50 L 80 57' },
      { index: 2, path: 'M 35 78 L 75 85' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ム': {
    char: 'ム',
    romaji: 'mu',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 30 85 L 55 18 L 80 60' },
      { index: 1, path: 'M 60 55 Q 72 62 82 72 Q 88 78 85 82' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'メ': {
    char: 'メ',
    romaji: 'me',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 65 18 Q 58 28 52 38' },
      { index: 1, path: 'M 22 30 L 60 60 Q 70 70 78 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'モ': {
    char: 'モ',
    romaji: 'mo',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 20 32 L 88 32' },
      { index: 1, path: 'M 20 60 L 88 60' },
      { index: 2, path: 'M 55 20 L 55 75 Q 55 88 45 95' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // ヤ行 (ya-row)
  'ヤ': {
    char: 'ヤ',
    romaji: 'ya',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 20 38 L 80 38 M 55 38 L 55 12' },
      { index: 1, path: 'M 55 38 L 55 60 Q 52 78 38 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ユ': {
    char: 'ユ',
    romaji: 'yu',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 25 35 L 25 72' },
      { index: 1, path: 'M 25 72 L 82 72 L 82 25' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ヨ': {
    char: 'ヨ',
    romaji: 'yo',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 30 28 L 78 28' },
      { index: 1, path: 'M 30 55 L 78 55' },
      { index: 2, path: 'M 78 28 L 78 82 L 30 82' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // ラ行 (ra-row)
  'ラ': {
    char: 'ラ',
    romaji: 'ra',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 25 30 L 82 30' },
      { index: 1, path: 'M 55 30 L 55 55 Q 52 72 38 88' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'リ': {
    char: 'リ',
    romaji: 'ri',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 35 20 L 35 58' },
      { index: 1, path: 'M 72 20 L 72 62 Q 72 80 58 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ル': {
    char: 'ル',
    romaji: 'ru',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 35 18 L 35 85' },
      { index: 1, path: 'M 60 18 L 60 70 Q 62 82 78 88 L 88 90' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'レ': {
    char: 'レ',
    romaji: 're',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 35 15 L 35 65 Q 38 80 55 88 L 82 92' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ロ': {
    char: 'ロ',
    romaji: 'ro',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 25 25 L 82 25' },
      { index: 1, path: 'M 25 25 L 25 82 L 82 82' },
      { index: 2, path: 'M 82 25 L 82 82' },
    ],
    viewBox: { width: 109, height: 109 },
  },

  // ワ行 (wa-row)
  'ワ': {
    char: 'ワ',
    romaji: 'wa',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 25 25 L 82 25' },
      { index: 1, path: 'M 25 25 L 25 60 Q 25 82 55 88 Q 80 82 82 25' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ヲ': {
    char: 'ヲ',
    romaji: 'wo',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 22 30 L 85 30' },
      { index: 1, path: 'M 22 52 L 85 52' },
      { index: 2, path: 'M 78 30 L 78 52 Q 75 72 55 85 Q 40 92 30 95' },
    ],
    viewBox: { width: 109, height: 109 },
  },
  'ン': {
    char: 'ン',
    romaji: 'n',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 25 65 Q 28 72 30 75' },
      { index: 1, path: 'M 30 85 Q 55 72 72 48 Q 82 32 80 18' },
    ],
    viewBox: { width: 109, height: 109 },
  },
};
