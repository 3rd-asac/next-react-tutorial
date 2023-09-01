import { createContext } from 'react'

export const initialModal = { text: '', isOpen: false }

export interface StateType {
  text: string
  isOpen: boolean
}

export interface ActionType extends StateType {
  type: string
}

export const ModalContext = createContext(initialModal)
export const ModalDispatchContext = createContext<(action: ActionType) => void>(
  () => {},
)
