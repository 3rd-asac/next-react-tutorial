import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
	title: '로그인',
	description: '로그인 페이지',
};

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			id='login'>
			<body>{children}</body>
		</html>
	);
}
