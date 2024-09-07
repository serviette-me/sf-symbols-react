import { createContext, useContext } from 'react'

interface ColorContextType {
  color: string
  setColor: (color: string) => void
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const useColor = () => {
  const context = useContext(ColorContext)
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider')
  }
  return context
}

export const ColorProvider = ColorContext.Provider
