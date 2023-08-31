import { createContext, useMemo, useState } from "react";
import JoinModal from "./joinModal";

interface ModalProviderProps{
    children : React.ReactNode;
}

export interface ModalContent {
    text? : string;
    isOpen? : boolean;
    //retry : () => void;
  }
  
  
export const ModalContext = createContext({
    show:(parm:ModalContent) => { console.log('test') },
    hide:()=>{}
});

export default function ModalProvider ({children}:ModalProviderProps) {

    const initialValue : ModalContent = {
        text: '', // 적절한 기본 텍스트 값
        isOpen: false, // 기본으로 모달이 열려있지 않도록 설정
        //retry: () => {} // 빈 함수로 설정하여 기본값으로 설정
    };

    const [modalValue, setModalValue] = useState<ModalContent>(initialValue);
                             

    return (
        <ModalContext.Provider value={
            {show:(parm : ModalContent)=>{
                console.log(parm);
                setModalValue({
                    text:parm.text,
                    isOpen:parm.isOpen
                });
            },
            hide:()=>{
                setModalValue(initialValue);
            }}
        }>
            {children}
            <JoinModal text={modalValue.text} isOpen={modalValue.isOpen} retry={()=>{setModalValue(initialValue)}}/>
        </ModalContext.Provider>
        
    )
};