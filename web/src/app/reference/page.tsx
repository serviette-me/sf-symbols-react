'use client'

import { useColor } from '@/context/ColorContext'
import { useWeight } from '@/context/WeightProvider'
import { getSymbolList } from '@/lib/getSymbolList'
import * as SFSymbols from '@serviette/sf-symbols-react'
import Fuse from 'fuse.js'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function Reference() {
  const { color } = useColor()
  const { weight } = useWeight()
  const [searchTerm, setSearchTerm] = useState('')
  const symbols = getSymbolList()

  const fuse = useMemo(
    () =>
      new Fuse(symbols, {
        threshold: 0.3,
        minMatchCharLength: 2,
      }),
    [symbols],
  )

  const filteredSymbols = useMemo(() => {
    if (!searchTerm) return symbols
    return fuse.search(searchTerm).map((result) => result.item)
  }, [fuse, searchTerm, symbols])

  const symbolToComponent = (symbol: string) => {
    // @ts-ignore
    return SFSymbols[symbol]({
      className: 'w-6 h-6',
      weight: weight,
      color: color,
    })
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <div className="sticky top-0 z-10 bg-white px-4 pb-4 sm:px-7 dark:bg-gray-950">
        <div className="mb-6 h-[0.0625rem] w-full bg-gray-200 dark:bg-gray-800" />
        <div className="relative w-full">
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder={`Search ${symbols.length} symbols...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-2 w-full rounded-md bg-gray-100 px-4 py-2 pl-10 text-sm focus:outline-none dark:bg-gray-900"
            />
            <SFSymbols.MagnifyingglassIcon className="absolute left-4 mb-2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-8">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-4 py-6 pt-4">
          {filteredSymbols.map((symbol) => (
            <Link
              key={symbol}
              href={`/reference/${symbol}`}
              className="group relative flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-md bg-gray-100 dark:bg-gray-900"
            >
              {/* make current color = color prop */}
              <div className="relative" style={{ color: color }}>
                {symbolToComponent(symbol)}
                <div className="pointer-events-none absolute bottom-[-3rem] left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-black bg-sky-300 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {symbol}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
