'use client'
import styles from './module/inputForm.module.css'
import { useForm, SubmitHandler, Resolver } from 'react-hook-form'

interface LoginProps {
  idRef: React.RefObject<HTMLInputElement>
  passwordRef: React.RefObject<HTMLInputElement>
}

interface IFormInput {
  email: string
  password: string
}

const resolver: Resolver<IFormInput> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  }
}

function LoginForm(props: LoginProps) {
  const { idRef, passwordRef } = props

  return (
    <section className={styles.info_wrap}>
      <p className="text-2xl mb-10 text-center">로그인</p>
      <div className={styles.phone_block}>
        <b>이메일</b>
        <p className={styles.inp_wrap}>
          <input
            id="eamil"
            className={styles.id_input}
            required={true}
            ref={idRef}
            minLength={10}
            type="email"
            placeholder="abc@example.com"
          />
        </p>
      </div>
      <div className={styles.email_block}>
        <b>비밀번호</b>
        <p className={styles.inp_wrap}>
          <input
            id="password"
            className={styles.pwd_input}
            type="text"
            ref={passwordRef}
            placeholder="8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개"
          />
        </p>
      </div>
    </section>
  )
}

export default LoginForm
