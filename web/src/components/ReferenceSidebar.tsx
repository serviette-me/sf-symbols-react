import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  Arrow2SquarepathIcon,
  ChevronDownIcon,
} from '@serviette/sf-symbols-react'
import clsx from 'clsx'
import { HexColorInput, HexColorPicker } from 'react-colorful'
import { Logo, Logomark } from './Logo'

const options = [
  { id: 1, weight: 'ultralight' },
  { id: 2, weight: 'thin' },
  { id: 3, weight: 'light' },
  { id: 4, weight: 'regular' },
  { id: 5, weight: 'medium' },
  { id: 6, weight: 'semibold' },
  { id: 7, weight: 'bold' },
  { id: 8, weight: 'heavy' },
  { id: 9, weight: 'black' },
]

interface Props {
  className?: string
  color: string
  setColor: (color: string) => void
  weight: string
  setWeight: (weight: string) => void
}

export function ReferenceSidebar({
  className,
  color,
  setColor,
  weight,
  setWeight,
}: Props) {
  return (
    <nav
      className={clsx(
        'max-w-sm overflow-y-scroll px-4 pt-3 text-base lg:text-sm',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Logomark />
        <Logo />
      </div>
      <div className="mt-6">
        <div className="flex w-full flex-col gap-y-2 rounded-lg border border-sky-300 bg-white px-2 py-1 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <h1 className="text-sm font-medium">Customizer</h1>
            <div className="cursor-pointer" onClick={() => setColor('#000000')}>
              <Arrow2SquarepathIcon className="h-4 w-4" />
            </div>
          </div>
          <Menu>
            <MenuButton className="focus:ring-none inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-sm text-sm/6 font-semibold text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-blue-400">
              {weight}
              <ChevronDownIcon className="size-3 text-gray-400 dark:text-gray-500" />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-gray-200 bg-white p-1 text-sm/6 text-gray-700 shadow-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              {options.map((option) => (
                <MenuItem key={option.id}>
                  <button
                    onClick={() => setWeight(option.weight)}
                    className="w-full rounded-md px-3 py-1.5 text-left text-sm/6 font-semibold text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    {option.weight}
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>

          <HexColorPicker color={color} onChange={setColor} />
          <div className="flex items-center gap-2">
            #
            <HexColorInput
              color={color}
              onChange={setColor}
              className="focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
