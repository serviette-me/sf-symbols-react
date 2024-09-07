'use client'

import { useColor } from '@/context/ColorContext'
import { useWeight } from '@/context/WeightProvider'
import { getSymbolList } from '@/lib/getSymbolList'
import * as SFSymbols from '@serviette/sf-symbols-react'
import { CopyBlock } from 'react-code-blocks'

interface Props {
  params: {
    symbol: string
  }
}

export default function IconPage({ params }: Props) {
  const { symbol } = params
  const { color } = useColor()
  const { weight } = useWeight()
  const symbols = getSymbolList()

  if (!symbols.includes(symbol)) {
    return <div>Icon not found</div>
  }

  const symbolToComponent = (symbol: string) => {
    // @ts-ignore
    return SFSymbols[symbol]({
      className: 'w-36 h-36',
      weight: weight,
      color: color,
    })
  }

  return (
    <div className="flex flex-col">
      <div className="mb-6 h-[0.0625rem] w-full bg-gray-200 dark:bg-gray-800" />
      <div className="flex items-start px-4 sm:px-7">
        <div
          className="shadown-lg mt-1 flex items-center justify-center rounded-lg bg-gray-100 p-8 dark:bg-gray-900"
          style={{ color: color }}
        >
          {symbolToComponent(symbol)}
        </div>
        <div className="ml-4 w-full text-sm">
          <h1 className="ml-2 text-xl font-medium">{symbol}</h1>
          <CopyBlock
            text={`import { ${symbol} } from '@serviette/sf-symbols-react'
            
const App = () => {
  return <${symbol} weight={${weight}} className="w-36 h-36" color={${color}} />
}

export default App`}
            language="typescript"
            showLineNumbers
            codeBlock
          />
        </div>
      </div>
      <div className="my-6 h-[0.0625rem] w-full bg-gray-200 px-4 sm:px-7 dark:bg-gray-800" />
      <div className="flex items-start px-4 sm:px-7">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium">Related Symbols</h2>
          <p>Coming soon!</p>
        </div>
      </div>
    </div>
  )
}
