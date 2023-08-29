import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';
import Carousel from './components/carousel';
export default function Home() {
	return (
		<>
			<Header />
			<main className='flex min-h-screen flex-col items-center justify-between p-24'>
				<Carousel />
				<div>
					<Link href='/Login'>Login 이동</Link>
					<br></br>
					<Link href='/signup'>회원가입</Link>
				</div>
			</main>
		</>
	);
}
