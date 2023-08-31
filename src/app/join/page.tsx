"use client"

import { useContext, useEffect, useRef, useState } from "react";
import Welcome from "./component/welcome";
import JoinForm from "./component/joinForm";
import styles from "./page.module.css";
import Buttons from "./component/buttons";
import ReactModal from "react-modal";
import LoginForm from "./component/loginForm";
import ModalProvider, { ModalContext } from "./component/modal/modalProvider";


function JoinPage (){
    const idRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [isJoin, setIsJoin] = useState(false);

    useEffect(() => {
        ReactModal.setAppElement('#rootLogin'); // 최상위 엘리먼트의 id를 설정
      }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    // 전역으로 공유하는 프롭스 리스트
    const {show , hide} = useContext(ModalContext);


    const handleClick = (text: string) => {
        //setOpen(true);
        show({ text: text ,isOpen:true} );
    };

    const handleItemCheck= () => {
        if(idRef.current!==null && passwordRef.current!==null){
            if(idRef.current.value ===""){
                idRef.current.focus();
                handleClick("이메일을 작성해주세요.")
                return false;
            }
            else if(passwordRef.current.value ===""){
                console.log("비밀번호 빈칸!!!");
                passwordRef.current.focus();
                handleClick("비밀번호를 작성해주세요.");
                return false;
            }
            
            if(idRef.current.value !=="") {
                const emailForm = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/;
                if(!emailForm.test(idRef.current.value)){
                    idRef.current.focus();
                    idRef.current.value="";
                    handleClick('이메일을 형식을 맞춰주세요.');
                    return false;
                }
            }
            if(passwordRef.current.value !==""){
                const pwdForm =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#$(^)])[A-Za-z\d@$!%*?&#$(^)]{8,}$/;
                if(!pwdForm.test(passwordRef.current.value)){
                    passwordRef.current.focus();
                    passwordRef.current.value="";
                    handleClick('비밀번호 형식을 맞춰주세요.');
                    return false
                }
                else{
                    console.log(idRef.current.value);
                    console.log(passwordRef.current.value);
                    return true;
                }
            }
        }  
    }

    const handelJoin= () => {
        if(isJoin){
            const check = handleItemCheck();
            if(!check) return ;
            setIsJoin(false);
        }
        else{
            setIsJoin(true);
        }
    }

    const handelLogin = () => {
        if(!isJoin){
            const check = handleItemCheck();
            if(!check) return ;
        }
        else{
            setIsJoin(false)
        }
        
    }

    // <JoinModal isOpen={isOpen} text="이메일을 작성해주세요" retry={handleRetry}/>
    //<ModalsStateContext.Provider value={openModal}>

    return (
            <div className="w-full h-screen bg-[#ffffff] pt-20" id="rootLogin">
                <div className={styles.align_rt}>
                    <div className={styles.inqury}>
                        <Welcome/>
                        <form >
                            {isJoin ? <JoinForm idRef={idRef} passwordRef={passwordRef} /> 
                                    : <LoginForm idRef={idRef} passwordRef={passwordRef} />}
                            <Buttons onJoinClick={handelJoin} onLoginClick={handelLogin}/>
                        </form>
                        
                    </div>
                </div>
            </div>
    )
}

export default JoinPage;