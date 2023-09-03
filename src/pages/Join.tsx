import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Popup from '../Modal/Popup'; // 경로를 적절하게 수정하세요

const UseRefEx = () => {
  const inputRef = useRef<HTMLInputElement[]>([]);
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

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    email: '',
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

  const handleInvalidPassword = () => {
    openPopup(
      '비밀번호 제약',
      '비밀번호는 적어도 8자, 1개의 특수문자, 1개의 소문자, 1개의 대문자를 포함해야 합니다.',
      undefined,
      closePopup
    );
  };

  const handleInvalidEmail = () => {
    openPopup(
      '이메일 제약',
      '유효한 이메일 주소를 입력해주세요.',
      undefined,
      closePopup
    );
  };

  const handleValidInput = () => {
    openPopup(
      '회원 가입',
      '가입 정보를 확인하시겠습니까?',
      handlePopupCallback,
      closePopup
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const { id, password, email } = inputs;
  const validPassword =
    password.length >= 8 &&
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailRegex.test(email);

  const handleClick = () => {
    if (!validPassword) {
      handleInvalidPassword();
    } else if (!validEmail) {
      handleInvalidEmail();
    } else {
      console.log('가입 정보:', {
        id: id,
        password: password,
        email: email,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={id}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="적어도 8자, 특수문자 1개, 소문자 1개, 대문자 1개 이상 포함"
          value={password}
          onChange={handleChange}
          className={`form-control ${!validPassword ? 'is-invalid' : ''}`}
          ref={(el) => (inputRef.current[0] = el as HTMLInputElement)}
        />
        {!validPassword && (
          <div className="invalid-feedback">
            유효하지 않은 비밀번호입니다 (8자 이상, 특수문자, 소문자, 대문자를
            각각 1개 이상 포함).
          </div>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="email"
          placeholder="유효한 이메일 작성"
          value={email}
          onChange={handleChange}
          className={`form-control ${!validEmail ? 'is-invalid' : ''}`}
          ref={(el) => (inputRef.current[1] = el as HTMLInputElement)}
        />
        {!validEmail && (
          <div className="invalid-feedback">유효하지 않은 이메일입니다.</div>
        )}
      </div>
      <button
        type="button"
        onClick={handleClick}
        disabled={password.length < 1 || email.length < 1}
        className="btn btn-primary"
      >
        회원 가입
      </button>
      <div className="mt-4">
        <Link href="/">
          <button type="button" className="btn btn-secondary mr-2">
            메인
          </button>
        </Link>
        <Link href="/Login">
          <button type="button" className="btn btn-secondary">
            로그인
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
