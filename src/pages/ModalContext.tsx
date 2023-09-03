// import React, { createContext, useContext, useReducer } from 'react';

// // 액션 타입 정의
// type ActionType = 'OPEN_MODAL' | 'CLOSE_MODAL';

// // 모달 컨텍스트의 초기 상태와 액션 정의
// interface ModalState {
//   isOpen: boolean;
//   content: { title: string; detail: string } | null;
// }

// interface OpenModalAction {
//   type: 'OPEN_MODAL';
//   payload: { title: string; detail: string };
// }

// interface CloseModalAction {
//   type: 'CLOSE_MODAL';
// }

// type ModalAction = OpenModalAction | CloseModalAction;

// // 초기 상태
// const initialModalState: ModalState = {
//   isOpen: false,
//   content: null,
// };

// // 리듀서 함수
// const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
//   switch (action.type) {
//     case 'OPEN_MODAL':
//       return { isOpen: true, content: action.payload };
//     case 'CLOSE_MODAL':
//       return { isOpen: false, content: null };
//     default:
//       return state;
//   }
// };

// // 모달 컨텍스트 생성
// const ModalContext = createContext<{
//   state: ModalState;
//   dispatch: React.Dispatch<ModalAction>;
// }>({
//   state: initialModalState,
//   dispatch: () => {},
// });

// // ModalProvider 컴포넌트
// export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [state, dispatch] = useReducer(modalReducer, initialModalState);

//   return (
//     <ModalContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// // 모달 컨텍스트 훅
// export const useModal = () => useContext(ModalContext);
