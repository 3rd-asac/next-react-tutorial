"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "../Modal/Popup";

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
    title: "",
    message: "",
  });

  const openPopup = (title: string, message: string, callback?: () => void) => {
    setPopup({
      open: true,
      title: title,
      message: message,
      callback: callback,
    });
  };

  const validPassword = (id: string, password: string) => {
    return id === "helloworld" && password === "Qwer!234";
  };

  const onSubmit = (data: any) => {
    const { id, password } = data;

    if (!validPassword(id, password)) {
      handleInvalidPassword();
    } else {
      console.log("로그인 정보:", {
        id: id,
        password: password,
      });
      router.push("/");
    }
  };
  const handleInvalidPassword = () => {
    openPopup("로그인 제약", "ID 또는 비밀번호가 틀렸습니다.", undefined);
  };
  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="아이디"
            {...register("id", { required: true })}
            className="form-control"
          />
          {errors.id && (
            <span className="text-danger">아이디를 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="비밀번호"
            {...register("password", { required: true })}
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
        <a onClick={() => console.log("123123")}></a>
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
        title={popup.title}
        message={popup.message}
        callback={popup.callback}
        setPopup={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default UseRefEx;
