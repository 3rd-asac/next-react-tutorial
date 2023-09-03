import styles from './module/inputForm.module.css'

interface LoginProps {
  idRef: React.RefObject<HTMLInputElement>
  passwordRef: React.RefObject<HTMLInputElement>
}

function InputForm(props: LoginProps) {
  const { idRef, passwordRef } = props
  return (
    <section className={styles.info_wrap}>
      <p className="text-2xl mb-10 text-center">로그인</p>
      <div className={styles.phone_block}>
        <b>이메일</b>
        <p className={styles.inp_wrap}>
          <input
            id="phone_number"
            className={styles.id_input}
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
            id="email_text"
            className={styles.pwd_input}
            ref={passwordRef}
            type="password"
            placeholder="8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개"
          />
        </p>
      </div>
    </section>
  )
}

export default InputForm
