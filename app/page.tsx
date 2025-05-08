'use client'
import { useState } from 'react'
import { comparators } from '@/data/comparators'
import getSuggestion from '@/lib/getSuggestion'

export default function Home() {
  const [query, setQuery] = useState('')
  const suggestion = getSuggestion(query)

  return (
    <main className="min-h-screen p-6 text-white bg-zinc-900">
      <h1 className="text-4xl font-bold text-center mb-6">CompariZon</h1>
      <input
        type="text"
        placeholder="Cosa vuoi cercare?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 rounded bg-zinc-800 text-white"
      />
      {suggestion && (
        <div className="mt-6 bg-zinc-800 p-4 rounded shadow">
          <p>Consiglio: {suggestion}</p>
          <a
            href={`https://${suggestion.toLowerCase()}.com`}
            className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-black rounded"
          >
            Cerca su {suggestion}
          </a>
        </div>
      )}
    </main>
  )
}
