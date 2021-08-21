import { createContext, useContext as useContextReact } from 'react'
export interface ContextProps {
    url: string
    title: string
    description: string
    date?: string
}
const Context = createContext<ContextProps>(null)
export function useContext<ContextProps>() {
  return useContextReact(Context)
}
export default Context