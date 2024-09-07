import { SquareStack3dUpIcon } from '@serviette/sf-symbols-react'

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <SquareStack3dUpIcon className="h-4 w-4" weight="bold" />
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold tracking-tight">SF Symbols React</span>
    </div>
  )
}
