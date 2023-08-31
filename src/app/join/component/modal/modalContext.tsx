import { createContext } from 'react';

export interface ModalProps {
  text : String;
  isOpen : boolean;
  retry : () => void;
}

// interface ModalsDispatchContextProps {
//   open: (props : ModalProps) => void;
//   close: () => void;
// }

// export const ModalsDispatchContext = createContext<ModalsDispatchContextProps>({
//   open: () => {},
//   close: () => {},
// });

export const defaultValue : ModalProps = {
    text: '', // 적절한 기본 텍스트 값
    isOpen: false, // 기본으로 모달이 열려있지 않도록 설정
    retry: () => {} // 빈 함수로 설정하여 기본값으로 설정
};

export const ModalsStateContext = createContext<ModalProps>(defaultValue);