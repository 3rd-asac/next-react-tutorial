'use client'

import ReduceContextProvider from './auth/context/modalContextProvier'
import ModalProvider from './jointemp/component/modal/modalProvider'

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <ModalProvider>
      <ReduceContextProvider>{children}</ReduceContextProvider>
    </ModalProvider>
  )
}
