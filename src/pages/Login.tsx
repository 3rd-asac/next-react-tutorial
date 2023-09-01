import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Popup from '../Modal/Popup';

const UseRefEx = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [popup, setPopup] = useState<{
    open: boolean;
    title: string;
    message: string;
    callback?: () => void;
    cancelCallback?: () => void;
  }>({
    open: false,
    title: '',
    message: '',
  });

  const handlePopupCallback = () => {
    console.log('Popup confirmed.');
  };

  const handlePopupCancelCallback = () => {
    console.log('Popup canceled.');
  };

  const openPopup = (
    title: string,
    message: string,
    callback?: () => void,
    cancelCallback?: () => void
  ) => {
    setPopup({
      open: true,
      title: title,
      message: message,
      callback: callback,
      cancelCallback: cancelCallback,
    });
  };

  const closePopup = () => {
    setPopup({
      open: false,
      title: '',
      message: '',
    });
  };

  const validPassword = (id: string, password: string) => {
    // 여기에서 실제 로그인 정보와 비교하는 로직을 구현해야 합니다.
    return id === 'helloworld' && password === 'Qwer!234';
  };

  const onSubmit = (data: any) => {
    const { id, password } = data;

    if (!validPassword(id, password)) {
      handleInvalidPassword();
    } else {
      console.log('로그인 정보:', {
        id: id,
        password: password,
      });
      router.push('/');
    }
  };
  const handleInvalidPassword = () => {
    openPopup(
      '로그인 제약',
      'ID 또는 비밀번호가 틀렸습니다.',
      undefined,
      closePopup
    );
  };
  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            name="id"
            placeholder="아이디"
            {...register('id', { required: true })}
            className="form-control"
          />
          {errors.id && (
            <span className="text-danger">아이디를 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            {...register('password', { required: true })}
            className="form-control"
          />
          {errors.password && (
            <span className="text-danger">비밀번호를 입력해주세요.</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          로그인
        </button>
      </form>
      <div className="mt-4">
        <Link href="/">
          <button type="button" className="btn btn-secondary mr-2">
            메인
          </button>
        </Link>
        <Link href="/Join">
          <button type="button" className="btn btn-secondary">
            회원가입
          </button>
        </Link>
      </div>

      {/* 팝업 컴포넌트 */}
      <Popup
        open={popup.open}
        setPopup={setPopup}
        title={popup.title}
        message={popup.message}
        callback={popup.callback}
        cancelCallback={popup.cancelCallback}
      />
    </div>
  );
};

export default UseRefEx;
