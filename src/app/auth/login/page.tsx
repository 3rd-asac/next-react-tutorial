'use client'

import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import ReactModal from 'react-modal'
import { useRouter } from 'next/navigation'
import Welcome from '@auth/components/welcome'
import styles from '@auth/components/module/page.module.css'
import Buttons from '@auth/components/buttons'
import LoginForm from '@auth/components/loginForm'
import { handleItemCheck } from '@auth/utils/handleItemCheck'
import { Poltawski_Nowy } from 'next/font/google'
import { ModalDispatchContext } from '../context/context'

function LoginPage() {
  const router = useRouter()
  const idRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const dispatch = useContext(ModalDispatchContext)

  const handelJoin = () => {
    // join 페이지로 이동
    router.push('/auth/join')
  }

  const modalOpen = () => {}

  const handelLogin = () => {
    const check = handleItemCheck({ id: idRef, pwd: passwordRef })
    if (check) {
      console.log('환영합니다! 로그인 성공!')
    } else {
      console.log('로그인 실패!')
    }
  }

  return (
    <div className="w-full h-screen bg-[#ffffff] pt-20" id="rootLogin">
      <div className={styles.align_rt}>
        <div className={styles.inqury}>
          <Welcome />
          <form>
            <LoginForm idRef={idRef} passwordRef={passwordRef} />
            <Buttons
              loginText="로그인"
              jointext="회원가입하러 가기"
              onJoinClick={handelJoin}
              onLoginClick={handelLogin}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
