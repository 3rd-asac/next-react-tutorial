"use client"

import { useContext, useEffect, useRef, useState } from "react";
import Welcome from "./component/welcome";
import JoinForm from "./component/joinForm";
import styles from "./page.module.css";
import Buttons from "./component/buttons";
import JoinModal from "./component/modal/joinModal";
import {ModalsStateContext, defaultValue, ModalProps } from "./component/modal/modalContext";
import ReactModal from "react-modal";


function JoinPage (){
    const idRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        ReactModal.setAppElement('#rootLogin'); // 최상위 엘리먼트의 id를 설정
      }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    

    const handleRetry=()=>{
        //setOpen(false);
        console.log("context 삭제");
        setOpenModel(defaultValue);
    }

    // 전역으로 공유하는 컴포넌트,프롭스 리스트
    const [openModal , setOpenModel] = useState<ModalProps>(defaultValue);

    // 열고 싶은 모달 컴포넌트와 컴포넌트에 넘겨줄 props를 입력
    const open = (props:ModalProps) => { 
        console.log("provider open");
        console.log(props);
        setOpenModel(props)
    };

    const handleClick = (text: String) => {
        //setOpen(true);
        open({ text: text ,isOpen:true ,retry:handleRetry} );
    };

    const handleItemClick= () => {
        if(idRef.current!==null && passwordRef.current!==null){
            if(idRef.current.value ===""){
                console.log("이메일 빈칸!!!");
                idRef.current.focus();
                handleClick("이메일을 작성해주세요.");
                
                return ;
            }
            else if(passwordRef.current.value ===""){
                console.log("비밀번호 빈칸!!!");
                passwordRef.current.focus();
                handleClick("비밀번호를 작성해주세요.");
                return ;
            }
            
            if(idRef.current.value !=="") {
                const emailForm = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/;
                if(!emailForm.test(idRef.current.value)){
                    idRef.current.focus();
                    idRef.current.value="";
                    handleClick('이메일을 형식을 맞춰주세요.');
                    return ;
                }
            }
            if(passwordRef.current.value !==""){
                const pwdForm =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if(!pwdForm.test(passwordRef.current.value)){
                    passwordRef.current.focus();
                    passwordRef.current.value="";
                    handleClick('비밀번호 형식을 맞춰주세요.');
                }
                else{
                    console.log(idRef.current.value);
                    console.log(passwordRef.current.value);
                }
                
            }
            
        }  
    }

    // <JoinModal isOpen={isOpen} text="이메일을 작성해주세요" retry={handleRetry}/>

    return (
        <ModalsStateContext.Provider value={openModal}>
            <div className="w-full h-screen bg-[#ffffff] pt-20" id="rootLogin">
                <div className={styles.align_rt}>
                    <div className={styles.inqury}>
                        <Welcome/>
                        <JoinForm idRef={idRef} passwordRef={passwordRef} />
                        <Buttons onJoinClick={handleItemClick}/>
                    </div>
                </div>
                <JoinModal/>
            </div>
        </ModalsStateContext.Provider>
    )
}

export default JoinPage;