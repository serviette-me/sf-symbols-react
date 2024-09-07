import { createContext, useContext } from 'react'

interface WeightContextType {
  weight: string
  setWeight: (weight: string) => void
}

const WeightContext = createContext<WeightContextType | undefined>(undefined)

export const useWeight = () => {
  const context = useContext(WeightContext)
  if (context === undefined) {
    throw new Error('useWeight must be used within a WeightProvider')
  }
  return context
}

export const WeightProvider = WeightContext.Provider
