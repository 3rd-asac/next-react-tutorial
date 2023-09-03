import {
  ActionType,
  ModalContext,
  ModalDispatchContext,
  StateType,
  initialModal,
} from '@auth/context/context'
import { useReducer } from 'react'
import Modal from '@auth/components/modal'

interface ModalProviderProps {
  children: React.ReactNode
}

function modalReducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'open': {
      return {
        text: action.text,
        isOpen: action.isOpen,
      }
    }
    case 'close': {
      return initialModal
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export default function ReduceContextProvider({
  children,
}: ModalProviderProps) {
  const [modal, dispatch] = useReducer(modalReducer, initialModal)

  return (
    <ModalContext.Provider value={modal}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        <Modal
          buttonAction={() => {
            dispatch({ type: 'close', text: '', isOpen: false })
          }}
        />
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  )
}
