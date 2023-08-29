import React, { useRef, useState } from 'react';
import Link from 'next/link';

const UseRefEx = () => {
  const inputRef = useRef([]);

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    email: '',
  });
  const { id, password, email } = inputs;

  // 비밀번호 유효성 검사 함수
  const validPassword =
    password.length >= 8 &&
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password);

  // 이메일 유효성 검사를 위한 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailRegex.test(email);

  // input 값 변경 핸들러
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 가입 버튼 클릭 핸들러
  const handleClick = () => {
    if (!validPassword) {
      alert('유효하지 않은 비밀번호입니다.');
      inputRef.current[0].focus();
      setInputs({
        ...inputs,
        password: '',
      });
    } else if (!validEmail) {
      alert('유효하지 않은 이메일입니다.');
      inputRef.current[1].focus();
      setInputs({
        ...inputs,
        email: '',
      });
    } else {
      console.log('가입 정보:', {
        id: id,
        password: password,
        email: email,
      });
    }
  };

  return (
    <>
      <div>
        <div>
          {/* ID는 검사 없이 입력 받음 */}
          <input
            type="text"
            name="id"
            placeholder="아이디"
            value={id}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="적어도 8자, 특수문자 1개, 소문자 1개, 대문자 1개 이상 포함"
            value={password}
            onChange={handleChange}
            ref={(el) => (inputRef.current[0] = el)}
          />
          {!validPassword && (
            <span>
              유효하지 않은 비밀번호입니다 (8자 이상, 특수문자, 소문자, 대문자를
              각각 1개 이상 포함).
            </span>
          )}
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="유효한 이메일 작성"
            value={email}
            onChange={handleChange}
            ref={(el) => (inputRef.current[1] = el)}
          />
          {!validEmail && <span>유효하지 않은 이메일입니다.</span>}
        </div>
        <button
          type="button"
          onClick={handleClick}
          disabled={password.length < 1 || email.length < 1}
        >
          회원 가입
        </button>
      </div>
      <div>
        <Link href="/">
          <button type="button">메인</button>
        </Link>
      </div>
    </>
  );
};

export default UseRefEx;
