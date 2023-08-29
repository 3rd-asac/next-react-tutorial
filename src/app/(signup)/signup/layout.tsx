import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
	title: '회원가입',
	description: '회원가입 페이지',
};

export default function SignupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			id='signup'>
			<body>{children}</body>
		</html>
	);
}
