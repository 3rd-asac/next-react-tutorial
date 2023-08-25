'use client'

import Link from 'next/link'

import Header from './Header'
import Footer from './Footer'
import MainLink from './components/MainLink'
import MainInfo from './components/MainInfo'
import MainSwiper from './components/MainSwiper'

import './globals.css'
import './styles/home.css'

export default function Home() {
	return (
		<div className="wrap bg-white">
			<Header />
			<main className="main m-auto lg:w-[1024px]">
				<div className="main-banner lg:h-[580px] md:[50vw]">
					{/* Link href 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제) */}
					<Link
						className="main-banner-link lg:h-[580px] md:[50vw] block"
						href="https://www.goodchoice.kr/more/eventView/3328">
						<span className="blind">여행할 때 여기어때</span>
					</Link>
				</div>
				<MainLink />
				<MainInfo />
				<MainSwiper />
			</main>
			<Footer />
		</div>
	)
}
