'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const ImgList = () => {
	const imageUrl = [
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2132%2Fb670c0d8.jpg&w=1060&q=100',
		},
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2070%2F1c7540fe.jpg&w=1060&q=100',
		},
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2081%2F7c4e8e6d.jpg&w=1060&q=100',
		},
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2078%2Fa78a154c.jpg&w=1060&q=100',
		},
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2143%2F67007bf2.jpg&w=1060&q=100',
		},
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2059%2F24c52879.jpg&w=1060&q=100',
		},
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2144%2Fc0d7064f.jpg&w=1060&q=100',
		},
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2135%2Fad33d1a2.jpg&w=1060&q=100',
		},
	];

	const images = [
		...imageUrl,
		...imageUrl,
		...imageUrl,
		{
			src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2132%2Fb670c0d8.jpg&w=1060&q=100',
		},
	];
	const [move, setMove] = useState(-8020);
	const [isChange, setChange] = useState(false);
	// let test = [
	// 	`flex translate-x-[-600px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-1660px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-2720px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-3780px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-4840px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-5900px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-6960px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-8020px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-9180px] transition duration-300 ease-in-out`,
	// 	`flex translate-x-[-600px]`,
	// ];
	useEffect(() => {
		const interval = setInterval(() => {
			// console.log(isChange);
			setMove((move) => move - 1060);
			// setChange(true);
		}, 2000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	// useEffect(() => {
	// 	console.log(move);
	// 	// if (move === 8) {
	// 	// 	setChange(true);
	// 	// }
	// 	// if (move <= -10140) {
	// 	// 	setChange(true);
	// 	// 	setMove(-1660);
	// 	// 	setChange(false);
	// 	// }
	// }, [move]);

	// useEffect(() => {
	// 	console.log(isChange);
	// 	if (isChange) {
	// 		console.log(isChange);
	// 		// setChange(false);
	// 	}
	// }, [isChange]);
	return (
		<div>
			<div
				className={`flex translate-x-[${move}px] transition duration-300 ease-in-out`}>
				{images.map((image, key) => (
					<Image
						className='px-3'
						src={image.src}
						key={key}
						alt='이미지'
						width={1060}
						height={300}
					/>
				))}
			</div>
			<p>{move}</p>
		</div>
	);
};

export default function Carousel() {
	return (
		<section>
			<div>
				<div className='relative overflow-hidden'>
					<button></button>
					<div className='relative overflow-hidden'>
						<ImgList />
					</div>
					<button></button>
				</div>
			</div>
		</section>
	);
}
