'use client';
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    isOpen: false,
    content: '',
};

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const openModal = (content) => ({ type: OPEN_MODAL, content });
const closeModal = () => ({ type: CLOSE_MODAL });

const modalReducer = (state, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { isOpen: true, content: action.content };
        case CLOSE_MODAL:
            return { isOpen: false, content: '' };
        default:
            return state;
    }
};

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalState, dispatch] = useReducer(modalReducer, initialState);

    return (
        <ModalContext.Provider value={{ modalState, dispatch }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('에러발생');
    }
    return context;
};

export { openModal, closeModal };
