import type { CharacterDefinition } from './types';

const viewBox = { width: 109 as const, height: 109 as const };

export const hiraganaCharacters: Record<string, CharacterDefinition> = {
  // ===== あ行 (a-row) =====
  'あ': {
    char: 'あ',
    romaji: 'a',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 28,30 L 80,30' },
      { index: 1, path: 'M 54,16 C 54,16 54,50 54,60 C 54,70 48,82 34,88' },
      { index: 2, path: 'M 22,52 C 22,52 40,44 58,52 C 76,60 82,78 70,90 C 58,102 30,92 24,76 C 18,60 28,48 42,48' },
    ],
    viewBox,
  },
  'い': {
    char: 'い',
    romaji: 'i',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 32,24 C 32,24 30,46 28,58 C 26,70 22,82 18,90' },
      { index: 1, path: 'M 64,28 C 64,28 68,48 72,60 C 76,72 82,84 88,90' },
    ],
    viewBox,
  },
  'う': {
    char: 'う',
    romaji: 'u',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 48,20 C 48,20 54,18 58,22' },
      { index: 1, path: 'M 30,40 C 30,40 54,34 76,40 C 76,40 82,56 74,72 C 66,88 44,96 26,90' },
    ],
    viewBox,
  },
  'え': {
    char: 'え',
    romaji: 'e',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 44,22 C 44,22 52,20 58,24' },
      { index: 1, path: 'M 48,36 C 48,36 28,58 24,68 C 24,68 54,56 70,62 C 70,62 56,78 38,92 C 38,92 58,96 80,86' },
    ],
    viewBox,
  },
  'お': {
    char: 'お',
    romaji: 'o',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 28,32 L 78,32' },
      { index: 1, path: 'M 42,16 C 42,16 42,48 42,60 C 42,72 36,86 24,94' },
      { index: 2, path: 'M 58,48 C 58,48 72,44 78,50 C 84,56 82,68 74,78 C 66,88 50,94 40,90 Q 44,74 62,70' },
    ],
    viewBox,
  },

  // ===== か行 (ka-row) =====
  'か': {
    char: 'か',
    romaji: 'ka',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 24,28 L 72,28' },
      { index: 1, path: 'M 44,16 C 44,16 44,50 44,62 C 44,74 38,86 28,94' },
      { index: 2, path: 'M 62,42 C 62,42 72,56 78,68 C 84,80 86,90 84,96' },
    ],
    viewBox,
  },
  'き': {
    char: 'き',
    romaji: 'ki',
    strokeCount: 4,
    strokes: [
      { index: 0, path: 'M 26,28 C 26,28 54,22 78,28' },
      { index: 1, path: 'M 22,48 C 22,48 54,42 82,48' },
      { index: 2, path: 'M 58,16 C 58,16 52,36 48,54' },
      { index: 3, path: 'M 36,62 C 36,62 56,58 68,62 C 80,66 78,78 68,86 C 58,94 38,94 28,88' },
    ],
    viewBox,
  },
  'く': {
    char: 'く',
    romaji: 'ku',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 72,16 C 72,16 44,38 34,54 C 34,54 52,72 72,94' },
    ],
    viewBox,
  },
  'け': {
    char: 'け',
    romaji: 'ke',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 20,22 C 20,22 20,54 20,70 C 20,86 18,92 16,96' },
      { index: 1, path: 'M 20,40 L 80,40' },
      { index: 2, path: 'M 62,22 C 62,22 62,50 60,64 C 58,78 52,92 44,98' },
    ],
    viewBox,
  },
  'こ': {
    char: 'こ',
    romaji: 'ko',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 30,32 C 30,32 54,28 76,32' },
      { index: 1, path: 'M 28,74 C 28,74 48,68 64,72 C 80,76 84,84 78,88' },
    ],
    viewBox,
  },

  // ===== さ行 (sa-row) =====
  'さ': {
    char: 'さ',
    romaji: 'sa',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 26,32 C 26,32 54,26 80,32' },
      { index: 1, path: 'M 56,16 C 56,16 50,40 48,56' },
      { index: 2, path: 'M 30,56 C 30,56 52,52 66,58 C 80,64 78,78 66,86 C 54,94 34,92 26,84' },
    ],
    viewBox,
  },
  'し': {
    char: 'し',
    romaji: 'shi',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 38,16 C 38,16 34,40 32,58 C 30,76 34,90 48,94 C 62,98 78,88 86,76' },
    ],
    viewBox,
  },
  'す': {
    char: 'す',
    romaji: 'su',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 24,30 C 24,30 54,24 82,30' },
      { index: 1, path: 'M 54,16 C 54,16 50,38 48,50 C 48,50 66,46 72,54 C 78,62 72,74 60,80 C 48,86 34,84 28,78 C 28,78 32,92 42,98' },
    ],
    viewBox,
  },
  'せ': {
    char: 'せ',
    romaji: 'se',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 22,22 C 22,22 22,52 22,68 C 22,84 20,92 18,96' },
      { index: 1, path: 'M 18,46 L 84,46' },
      { index: 2, path: 'M 58,26 C 58,26 58,48 58,62 C 58,76 66,88 80,92' },
    ],
    viewBox,
  },
  'そ': {
    char: 'そ',
    romaji: 'so',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 34,20 C 34,20 58,18 68,24 C 68,24 48,38 36,48 C 36,48 62,44 74,52 C 74,52 60,68 42,80 C 42,80 30,90 34,96 C 38,102 56,94 70,86' },
    ],
    viewBox,
  },

  // ===== た行 (ta-row) =====
  'た': {
    char: 'た',
    romaji: 'ta',
    strokeCount: 4,
    strokes: [
      { index: 0, path: 'M 16,36 L 52,36' },
      { index: 1, path: 'M 34,16 C 34,16 34,48 32,64 C 30,80 24,92 18,98' },
      { index: 2, path: 'M 62,28 C 62,28 72,42 78,58' },
      { index: 3, path: 'M 62,60 C 62,60 76,58 82,64 C 88,70 84,82 74,90 C 64,98 50,96 46,90' },
    ],
    viewBox,
  },
  'ち': {
    char: 'ち',
    romaji: 'chi',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 24,30 L 80,30' },
      { index: 1, path: 'M 58,16 C 58,16 54,34 52,48 C 52,48 72,44 80,52 C 88,60 82,76 68,86 C 54,96 34,94 24,86' },
    ],
    viewBox,
  },
  'つ': {
    char: 'つ',
    romaji: 'tsu',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 22,36 C 22,36 42,30 62,34 C 82,38 90,50 82,64 C 74,78 54,90 32,92' },
    ],
    viewBox,
  },
  'て': {
    char: 'て',
    romaji: 'te',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 24,30 C 24,30 52,24 78,30 C 78,30 62,48 48,62 C 48,62 38,76 42,86 C 46,96 60,92 72,84' },
    ],
    viewBox,
  },
  'と': {
    char: 'と',
    romaji: 'to',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 44,16 C 44,16 38,40 34,58 C 30,76 26,90 22,96' },
      { index: 1, path: 'M 34,44 C 34,44 54,38 66,46 C 78,54 74,68 62,74' },
    ],
    viewBox,
  },

  // ===== な行 (na-row) =====
  'な': {
    char: 'な',
    romaji: 'na',
    strokeCount: 4,
    strokes: [
      { index: 0, path: 'M 16,38 L 52,38' },
      { index: 1, path: 'M 34,16 C 34,16 34,48 32,64 C 30,80 24,92 18,98' },
      { index: 2, path: 'M 62,28 C 62,28 72,42 78,56' },
      { index: 3, path: 'M 58,56 C 58,56 76,52 84,60 C 92,68 84,82 72,90 C 60,98 42,96 38,88 Q 42,74 60,68' },
    ],
    viewBox,
  },
  'に': {
    char: 'に',
    romaji: 'ni',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 22,20 C 22,20 22,52 22,68 C 22,84 20,94 18,98' },
      { index: 1, path: 'M 52,34 C 52,34 68,30 80,34' },
      { index: 2, path: 'M 52,68 C 52,68 68,64 82,68' },
    ],
    viewBox,
  },
  'ぬ': {
    char: 'ぬ',
    romaji: 'nu',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 26,36 C 26,36 54,30 78,36' },
      { index: 1, path: 'M 44,16 C 44,16 38,42 34,56 C 34,56 22,76 26,86 C 30,96 48,98 64,90 C 80,82 86,66 78,54 C 70,42 54,44 46,56 C 38,68 48,84 62,94' },
    ],
    viewBox,
  },
  'ね': {
    char: 'ね',
    romaji: 'ne',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 22,20 C 22,20 22,52 22,68 C 22,84 20,94 18,98' },
      { index: 1, path: 'M 22,42 C 22,42 46,36 60,42 C 74,48 72,60 62,68 C 52,76 38,74 34,68 C 34,68 40,78 52,86 C 64,94 80,90 88,80 C 88,80 92,72 88,66' },
    ],
    viewBox,
  },
  'の': {
    char: 'の',
    romaji: 'no',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 68,20 C 68,20 40,34 28,52 C 16,70 20,88 36,94 C 52,100 72,90 82,72 C 92,54 86,32 68,20' },
    ],
    viewBox,
  },

  // ===== は行 (ha-row) =====
  'は': {
    char: 'は',
    romaji: 'ha',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 20,20 C 20,20 20,52 20,68 C 20,84 18,94 16,98' },
      { index: 1, path: 'M 42,34 C 42,34 62,28 82,34' },
      { index: 2, path: 'M 58,34 C 58,34 56,52 54,64 C 54,64 44,82 48,90 C 52,98 68,96 78,88 C 88,80 92,66 86,58 C 80,50 66,50 58,58 C 50,66 54,80 64,90' },
    ],
    viewBox,
  },
  'ひ': {
    char: 'ひ',
    romaji: 'hi',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 24,24 C 24,24 20,48 22,62 C 24,76 34,86 50,86 C 66,86 78,72 82,56 C 86,40 80,28 68,24 C 56,20 44,28 40,42 C 36,56 42,72 56,80' },
    ],
    viewBox,
  },
  'ふ': {
    char: 'ふ',
    romaji: 'fu',
    strokeCount: 4,
    strokes: [
      { index: 0, path: 'M 50,18 C 50,18 54,16 58,20' },
      { index: 1, path: 'M 26,42 C 26,42 34,36 40,40' },
      { index: 2, path: 'M 66,38 C 66,38 76,34 82,38' },
      { index: 3, path: 'M 42,54 C 42,54 28,68 24,80 C 20,92 32,100 48,94 C 64,88 78,72 82,60' },
    ],
    viewBox,
  },
  'へ': {
    char: 'へ',
    romaji: 'he',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 14,58 C 14,58 34,42 54,30 C 54,30 74,44 94,62' },
    ],
    viewBox,
  },
  'ほ': {
    char: 'ほ',
    romaji: 'ho',
    strokeCount: 4,
    strokes: [
      { index: 0, path: 'M 18,20 C 18,20 18,52 18,68 C 18,84 16,94 14,98' },
      { index: 1, path: 'M 36,30 C 36,30 60,26 84,30' },
      { index: 2, path: 'M 36,56 C 36,56 60,52 84,56' },
      { index: 3, path: 'M 58,30 C 58,30 56,58 54,70 C 54,70 44,84 48,92 C 52,100 66,96 76,88 C 86,80 90,66 84,58 C 78,50 64,50 56,58 C 48,66 54,82 66,92' },
    ],
    viewBox,
  },

  // ===== ま行 (ma-row) =====
  'ま': {
    char: 'ま',
    romaji: 'ma',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 22,28 C 22,28 54,22 82,28' },
      { index: 1, path: 'M 22,54 C 22,54 54,48 82,54' },
      { index: 2, path: 'M 54,14 C 54,14 50,40 48,58 C 48,58 38,72 40,82 C 42,92 56,94 68,88 C 80,82 84,70 78,62 C 72,54 58,56 52,64 C 46,72 52,86 64,94' },
    ],
    viewBox,
  },
  'み': {
    char: 'み',
    romaji: 'mi',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 28,24 C 28,24 46,20 58,28 C 70,36 64,50 48,54 C 32,58 22,52 20,44' },
      { index: 1, path: 'M 40,58 C 40,58 58,56 70,64 C 82,72 78,86 64,94 C 50,102 34,98 28,88 C 28,88 36,82 48,82' },
    ],
    viewBox,
  },
  'む': {
    char: 'む',
    romaji: 'mu',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 20,36 L 76,36' },
      { index: 1, path: 'M 42,14 C 42,14 40,40 38,56 C 36,72 28,88 20,96 L 20,96 C 20,96 48,88 68,78 C 88,68 94,56 86,48 C 78,40 62,48 56,62 C 50,76 56,92 70,98' },
      { index: 2, path: 'M 78,74 C 78,74 84,70 88,74' },
    ],
    viewBox,
  },
  'め': {
    char: 'め',
    romaji: 'me',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 22,22 C 22,22 22,52 22,68 C 22,84 20,92 18,96' },
      { index: 1, path: 'M 22,46 C 22,46 44,38 60,42 C 76,46 84,58 80,72 C 76,86 60,96 42,94 C 42,94 50,78 62,62 C 74,46 82,34 86,28' },
    ],
    viewBox,
  },
  'も': {
    char: 'も',
    romaji: 'mo',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 44,14 C 44,14 42,42 40,60 C 38,78 34,92 28,98' },
      { index: 1, path: 'M 22,36 C 22,36 48,30 76,36' },
      { index: 2, path: 'M 22,64 C 22,64 48,58 68,64 C 88,70 86,84 72,92 C 58,100 38,98 28,90' },
    ],
    viewBox,
  },

  // ===== や行 (ya-row) =====
  'や': {
    char: 'や',
    romaji: 'ya',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 16,38 L 52,38' },
      { index: 1, path: 'M 34,16 C 34,16 32,42 30,58 C 28,74 24,88 18,96' },
      { index: 2, path: 'M 62,18 C 62,18 72,36 76,50 C 80,64 78,80 68,90 C 58,100 46,98 42,90' },
    ],
    viewBox,
  },
  'ゆ': {
    char: 'ゆ',
    romaji: 'yu',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 22,28 C 22,28 24,48 26,62 C 28,76 32,88 38,94' },
      { index: 1, path: 'M 42,20 C 42,20 62,18 76,26 C 90,34 88,52 76,62 C 64,72 44,74 34,68 C 34,68 42,82 58,88 C 74,94 88,86 94,74' },
    ],
    viewBox,
  },
  'よ': {
    char: 'よ',
    romaji: 'yo',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 30,40 C 30,40 52,34 74,40' },
      { index: 1, path: 'M 54,16 C 54,16 52,40 50,58 C 50,58 42,72 44,82 C 46,92 56,96 68,90 C 80,84 84,72 80,64' },
    ],
    viewBox,
  },

  // ===== ら行 (ra-row) =====
  'ら': {
    char: 'ら',
    romaji: 'ra',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 44,20 C 44,20 52,18 58,22' },
      { index: 1, path: 'M 50,36 C 50,36 34,52 28,64 C 22,76 28,90 44,94 C 60,98 76,88 84,74' },
    ],
    viewBox,
  },
  'り': {
    char: 'り',
    romaji: 'ri',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 34,22 C 34,22 32,44 30,58 C 28,72 24,82 20,88' },
      { index: 1, path: 'M 72,18 C 72,18 70,42 68,58 C 66,74 62,86 52,94 C 42,102 34,98 30,90' },
    ],
    viewBox,
  },
  'る': {
    char: 'る',
    romaji: 'ru',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 30,22 C 30,22 54,18 74,24 C 74,24 56,42 40,58 C 40,58 28,74 36,84 C 44,94 62,90 72,80 C 82,70 78,58 66,56 C 54,54 48,64 54,74' },
    ],
    viewBox,
  },
  'れ': {
    char: 'れ',
    romaji: 're',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 20,20 C 20,20 20,52 20,68 C 20,84 18,94 16,98' },
      { index: 1, path: 'M 20,42 C 20,42 44,36 58,42 C 72,48 70,60 62,68 C 54,76 40,76 36,70 C 36,70 42,80 54,88 C 66,96 80,92 88,82' },
    ],
    viewBox,
  },
  'ろ': {
    char: 'ろ',
    romaji: 'ro',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 30,22 C 30,22 54,18 74,24 C 74,24 56,42 40,58 C 40,58 28,74 36,86 C 44,98 64,94 78,84' },
    ],
    viewBox,
  },

  // ===== わ行 (wa-row) =====
  'わ': {
    char: 'わ',
    romaji: 'wa',
    strokeCount: 2,
    strokes: [
      { index: 0, path: 'M 22,20 C 22,20 22,52 22,68 C 22,84 20,94 18,98' },
      { index: 1, path: 'M 22,42 C 22,42 46,36 62,42 C 78,48 82,62 76,76 C 70,90 52,98 38,92' },
    ],
    viewBox,
  },
  'を': {
    char: 'を',
    romaji: 'wo',
    strokeCount: 3,
    strokes: [
      { index: 0, path: 'M 24,28 C 24,28 54,22 80,28' },
      { index: 1, path: 'M 54,14 C 54,14 50,34 46,50' },
      { index: 2, path: 'M 28,52 C 28,52 48,46 62,50 C 76,54 80,66 72,76 C 64,86 44,92 30,88 C 30,88 40,82 54,80 C 68,78 82,82 88,90' },
    ],
    viewBox,
  },
  'ん': {
    char: 'ん',
    romaji: 'n',
    strokeCount: 1,
    strokes: [
      { index: 0, path: 'M 28,28 C 28,28 26,52 28,68 C 30,84 42,96 58,92 C 74,88 86,68 90,48' },
    ],
    viewBox,
  },
};
