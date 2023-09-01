'use client'

import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Welcome from '@auth/components/welcome'
import styles from '@auth/components/module/page.module.css'
import Buttons from '@auth/components/buttons'
import JoinForm from '@auth/components/joinForm'
import { handleItemCheck } from '@auth/utils/handleItemCheck'
function JoinPage() {
  const idRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  const handelLogin = () => {
    // join 페이지로 이동
    router.push('/auth/login')
  }

  const handelJoin = () => {
    const check = handleItemCheck({
      id: idRef,
      pwd: passwordRef,
    })
    if (check) {
      console.log('환영합니다! 회원가입 성공!')
    } else {
      console.log('회원가입 실패!')
    }
  }

  return (
    <div className="w-full h-screen bg-[#ffffff] pt-20" id="rootLogin">
      <div className={styles.align_rt}>
        <div className={styles.inqury}>
          <Welcome />
          <form>
            <JoinForm idRef={idRef} passwordRef={passwordRef} />
            <Buttons
              loginText="로그인하러 가기"
              jointext="회원가입"
              onJoinClick={handelJoin}
              onLoginClick={handelLogin}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinPage
