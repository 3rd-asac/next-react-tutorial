'use client'

import ModalProvider from "./join/component/modal/modalProvider"

interface Props {
    children: React.ReactNode
}

export default function Providers({ children }: Props) {
    return (<ModalProvider>
            {children}
        </ModalProvider>);
}