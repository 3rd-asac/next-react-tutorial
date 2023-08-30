'use client';
import {
	createContext,
	useState,
	useContext,
	useReducer,
	useMemo,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ModalContext = createContext();

export const useModalContext = () => {
	return useContext(ModalContext);
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'open':
			return { value: !state.value };
		case 'close':
			return { value: !state.value };
		default:
			return state;
	}
};

const ModelProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {
		value: false,
	});

	const contextValue = useMemo(() => {
		return [state, dispatch];
	}, [state, dispatch]);

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModelProvider;
