import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import styles from "./newInqury.module.css";
import InquryChios from "../containers/inquryChios";

function NewInqury() {
    const [isUlVisible, setUlVisible] = useState(true);
    // 폰과 텍스트는 선택사항이므로 없어도 괜찮다.
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        console.log("room type : " + form.room_type.value);
        console.log("inq type : " + form.inq_type.value);
        console.log("phone number : " + form.phone_number.value);
        console.log("email_text : " + form.email_text.value);
        console.log("questionText : " + form.questionTextarea.value);
    };

    const handleUlClick = () => {
        setUlVisible(false);
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    const handleTextareaBlur = (
        event: React.FocusEvent<HTMLTextAreaElement>,
    ) => {
        if (event.target.value === "") {
            setUlVisible(true);
        }
    };

    return (
        <div className={styles.tab_each}>
            <form className="inq-form" onSubmit={handleSubmit}>
                <div className={styles.alert_top}>
                    <p>
                        여기어때 이용 중 불편하신 점을 문의주시면{" "}
                        <em>최대한 빠른 시일내에 답변 드리겠습니다.</em>
                    </p>
                </div>
                <InquryChios phoneRef={phoneRef} emailRef={emailRef} />
                <section className="text-warp">
                    <b>문의 내용</b>
                    <div className="relative">
                        <textarea
                            ref={textareaRef}
                            className={styles.text_wraparea}
                            id="questionTextarea"
                            onBlur={handleTextareaBlur}></textarea>
                        <ul
                            className={`${styles.placeholder_txt} ${
                                isUlVisible ? "" : "hidden"
                            }`}
                            onClick={handleUlClick}>
                            <li>문의하실 내용을 10자 이상 입력해 주세요.</li>
                            <li>
                                문의하시는 제휴점 이름과 예약정보를 남겨주시면
                                보다 빠른 상담이 가능합니다.
                            </li>
                            <li>
                                문의 내용 작성 시 개인정보가 입력되지 않도록
                                주의 부탁드립니다.
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.btn_wrap}>
                    <button className={styles.btn_red_fill} type="submit">
                        작성완료
                    </button>
                </section>
            </form>
        </div>
    );
}

export default NewInqury;
