import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Container from './container';
export const metadata: Metadata = {
	title: '회원가입 및 로그인',
	description: '회원가입 및 로그인 페이지',
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
			<body>
				<Container>{children}</Container>
			</body>
		</html>
	);
}
