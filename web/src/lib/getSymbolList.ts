// load symbols.json (its in the current directory)
import symbols from './symbols.json'

export function getSymbolList() {
  return symbols.sort((a, b) => a.localeCompare(b))
}
