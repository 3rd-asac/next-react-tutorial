'use client';
import { useRef, useState } from 'react';
import isValid from '@/app/utils/isvalid';

export default function Signup() {
	const [id, setId] = useState('');
	const passwordObj = useRef({ password: '', isFocus: false });
	const emailObj = useRef({ email: '', isFocus: false });

	const [error, setError] = useState({ isError: false, message: '', type: '' });

	const onChangeId = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setId(target.value);
	};

	const onChangePassword = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setError(isValid(target.type, target.value));
		emailObj.current.isFocus = false;
		passwordObj.current.password += target.value;
		passwordObj.current.isFocus = true;
	};

	const onChangeEmail = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setError(isValid(target.type, target.value));
		passwordObj.current.isFocus = false;
		emailObj.current.email += target.value;
		emailObj.current.isFocus = true;
	};

	const onSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		alert('회원가입이 성공적으로 되었습니다!');
	};

	const ActiveButton = () => {
		return id.length &&
			passwordObj.current.password &&
			emailObj.current.email &&
			!error.isError ? (
			<button className='bg-blue-500 rounded-3xl text-white font-bold w-full py-2 mt-8 mb-2'>
				회원가입 진행
			</button>
		) : (
			<button
				className='bg-gray-200 rounded-3xl text-gray-400 font-bold w-full py-2 mt-8 mb-2'
				disabled>
				회원가입 진행
			</button>
		);
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-6'>
			<div className='border-2 border-gray-200 rounded-md bg-white p-5 w-[400px]'>
				<div className='flex flex-col items-center'>
					<h1 className='font-bold font- text-3xl pt-10 mb-4'>wanted</h1>
					<h2 className='text-center font-semibold text-2xl my-4'>
						하나의 계정으로
						<br />
						더욱 편리하게
					</h2>
					<p className='text-gray-500 text-center text-sm mb-11'>
						원티드가 제공하는 서비스를
						<br />
						하나의 계정으로 모두 이용할 수 있습니다.
					</p>
				</div>

				<div>
					<form onSubmit={onSubmitForm}>
						<div className='flex flex-col py-2'>
							<label
								htmlFor='id'
								className='text-sm font-semibold text-gray-500 mb-2'>
								아이디
							</label>
							<input
								type='text'
								id='id'
								value={id}
								onChange={onChangeId}
								placeholder='아이디를 입력해주세요.'
								className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
									id.length ? 'focus:border-blue-500' : 'focus:border-red-500'
								} focus:border-2`}
							/>
						</div>
						<div className='flex flex-col py-2'>
							<label
								htmlFor='password'
								className='text-sm font-semibold text-gray-500 mb-2'>
								비밀번호
							</label>
							<input
								type='password'
								id='password'
								onChange={onChangePassword}
								placeholder='비밀번호를 입력해주세요.'
								className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
									passwordObj.current.isFocus && error.isError
										? 'focus:border-red-500'
										: 'focus:border-blue-500'
								} focus:border-2`}
							/>
							{passwordObj.current.isFocus && error.isError ? (
								<p className=' inli text-red-500 text-xs p-1'>
									{error.message}
								</p>
							) : null}
						</div>
						<div className='flex flex-col py-2'>
							<label
								htmlFor='email'
								className='text-sm font-semibold text-gray-500 mb-2'>
								이메일
							</label>
							<input
								type='email'
								id='email'
								onChange={onChangeEmail}
								placeholder='이메일을 입력해주세요.'
								className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
									emailObj.current.isFocus && error.isError
										? 'focus:border-red-500'
										: 'focus:border-blue-500'
								} focus:border-2`}
							/>
							{emailObj.current.isFocus && error.isError ? (
								<p className='text-red-500 text-xs p-1'>{error.message}</p>
							) : null}
						</div>
						<ActiveButton />
					</form>
				</div>
			</div>
		</main>
	);
}
