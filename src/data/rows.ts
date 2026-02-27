import type { RowGroup } from './types';

export const hiraganaRows: RowGroup[] = [
  { id: 'a', label: 'あ行', labelRomaji: 'a', characters: ['あ', 'い', 'う', 'え', 'お'] },
  { id: 'ka', label: 'か行', labelRomaji: 'ka', characters: ['か', 'き', 'く', 'け', 'こ'] },
  { id: 'sa', label: 'さ行', labelRomaji: 'sa', characters: ['さ', 'し', 'す', 'せ', 'そ'] },
  { id: 'ta', label: 'た行', labelRomaji: 'ta', characters: ['た', 'ち', 'つ', 'て', 'と'] },
  { id: 'na', label: 'な行', labelRomaji: 'na', characters: ['な', 'に', 'ぬ', 'ね', 'の'] },
  { id: 'ha', label: 'は行', labelRomaji: 'ha', characters: ['は', 'ひ', 'ふ', 'へ', 'ほ'] },
  { id: 'ma', label: 'ま行', labelRomaji: 'ma', characters: ['ま', 'み', 'む', 'め', 'も'] },
  { id: 'ya', label: 'や行', labelRomaji: 'ya', characters: ['や', 'ゆ', 'よ'] },
  { id: 'ra', label: 'ら行', labelRomaji: 'ra', characters: ['ら', 'り', 'る', 'れ', 'ろ'] },
  { id: 'wa', label: 'わ行', labelRomaji: 'wa', characters: ['わ', 'を', 'ん'] },
];

export const katakanaRows: RowGroup[] = [
  { id: 'a', label: 'ア行', labelRomaji: 'a', characters: ['ア', 'イ', 'ウ', 'エ', 'オ'] },
  { id: 'ka', label: 'カ行', labelRomaji: 'ka', characters: ['カ', 'キ', 'ク', 'ケ', 'コ'] },
  { id: 'sa', label: 'サ行', labelRomaji: 'sa', characters: ['サ', 'シ', 'ス', 'セ', 'ソ'] },
  { id: 'ta', label: 'タ行', labelRomaji: 'ta', characters: ['タ', 'チ', 'ツ', 'テ', 'ト'] },
  { id: 'na', label: 'ナ行', labelRomaji: 'na', characters: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'] },
  { id: 'ha', label: 'ハ行', labelRomaji: 'ha', characters: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'] },
  { id: 'ma', label: 'マ行', labelRomaji: 'ma', characters: ['マ', 'ミ', 'ム', 'メ', 'モ'] },
  { id: 'ya', label: 'ヤ行', labelRomaji: 'ya', characters: ['ヤ', 'ユ', 'ヨ'] },
  { id: 'ra', label: 'ラ行', labelRomaji: 'ra', characters: ['ラ', 'リ', 'ル', 'レ', 'ロ'] },
  { id: 'wa', label: 'ワ行', labelRomaji: 'wa', characters: ['ワ', 'ヲ', 'ン'] },
];

export function getRows(type: 'hiragana' | 'katakana'): RowGroup[] {
  return type === 'hiragana' ? hiraganaRows : katakanaRows;
}
