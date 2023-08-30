'use client';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useModalContext } from '@/app/contexts/modal';
import ModalComponent from '@/app/components/modal';
import { isValid } from '@/app/(signup)/signup/page';

export default function Login() {
	const {
		register,
		handleSubmit,
		setFocus,
		formState: { isSubmitted, errors },
	} = useForm();
	const [state, dispatch] = useModalContext();
	const modalContent = useRef('');
	let result = useRef({ isError: false, message: '', type: '' });
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
					<form
						onSubmit={handleSubmit((data) => {
							result.current = isValid('login', JSON.stringify(data));
							modalContent.current = result.current.message;
							setFocus(result.current.type);
							dispatch({ type: 'open' });
						})}>
						<div className='flex flex-col py-2'>
							<label
								htmlFor='id'
								className='text-sm font-semibold text-gray-500 mb-2'>
								아이디
							</label>
							<input
								type='text'
								id='id'
								placeholder='아이디를 입력해주세요.'
								className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
									(result.current.type === 'id' && result.current.isError) ||
									errors.id
										? 'focus:border-red-500'
										: 'focus:border-blue-500'
								}  focus:border-2`}
								{...register('id', {
									required: '아이디 입력은 필수입니다.',
								})}
							/>
							{errors.id && (
								<small
									className='text-red-500 p-1'
									role='alert'>
									{errors.id.message as string}
								</small>
							)}
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
								aria-invalid={
									isSubmitted ? (errors.password ? 'true' : 'false') : undefined
								}
								placeholder='비밀번호를 입력해주세요.'
								className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
									(result.current.type === 'password' &&
										result.current.isError) ||
									errors.password
										? 'focus:border-red-500'
										: 'focus:border-blue-500'
								} focus:border-2`}
								{...register('password', {
									required: '비밀번호 입력은 필수입니다.',
									pattern: {
										value:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%#*?&^~]).{8,}$/,
										message: '비밀번호 형식에 맞지 않습니다.',
									},
								})}
							/>
							{errors.password && (
								<small
									className='text-red-500 p-1'
									role='alert'>
									{errors.password.message as string}
								</small>
							)}
						</div>

						<button className='bg-blue-500 rounded-3xl text-white font-bold w-full py-2 mt-8 mb-2'>
							로그인 진행
						</button>
						<p>{result.current.isError}</p>
						<ModalComponent
							modalTitle='로그인'
							modalContent={modalContent.current}></ModalComponent>
					</form>
				</div>
			</div>
		</main>
	);
}
