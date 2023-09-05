import Link from 'next/link';
import Carousel from '@/app/components/carousel';
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Carousel />
			<div>
				<Link href='/Login'>Login 이동</Link>
				<br></br>
				<Link href='/signup'>회원가입</Link>
			</div>
		</main>
	);
}
