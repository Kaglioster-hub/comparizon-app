import { comparators } from '@/data/comparators'

export default function getSuggestion(query: string) {
  if (!query) return null
  const q = query.toLowerCase()
  if (q.includes('tecnologia') || q.includes('pc')) return 'Idealo'
  if (q.includes('gioielli') || q.includes('moda')) return 'Amazon'
  if (q.includes('confronto') || q.includes('offerta')) return 'Trovaprezzi'
  if (q.includes('tutto') || q.includes('generico')) return 'Google'
  return 'Amazon'
}
