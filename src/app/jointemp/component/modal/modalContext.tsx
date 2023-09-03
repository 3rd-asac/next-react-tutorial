import { createContext } from 'react'

export interface ModalContent {
  text?: string
  isOpen?: boolean
  //retry : () => void;
}
export const ModalContext = createContext({
  show: (parm: ModalContent) => {},
  hide: () => {},
})
