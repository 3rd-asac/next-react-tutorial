import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import styles from "./newInqury.module.css";

export const roomList = [
    { value: "0", text: "카테고리유형을 선택하세요." },
    { value: "1", text: "모텔" },
    { value: "2", text: "호텔·리조트" },
    { value: "3", text: "펜션" },
    { value: "4", text: "게스트하우스" },
    { value: "5", text: "캠핑/글램핑" },
    { value: "6", text: "한옥" },
    { value: "7", text: "액티비티" },
    { value: "8", text: "현금성(유상)포인트" },
];
export const inqList = [
    { value: "0", text: "문의유형을 선택하세요" },
    { value: "1", text: "이벤트" },
    { value: "2", text: "예약/결제" },
    { value: "3", text: "취소/환불" },
    { value: "4", text: "혜택받기" },
    { value: "5", text: "이용문의" },
    { value: "6", text: "회원정보" },
    { value: "7", text: "리뷰" },
    { value: "8", text: "환불신청" },
    { value: "99", text: "기타" },
];

function NewInqury() {
    const [isUlVisible, setUlVisible] = useState(true);
    // 폰과 텍스트는 선택사항이므로 없어도 괜찮다.
    const phoneRef = useRef<HTMLInputElement | null>(null);
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
                <section className={styles.info_wrap}>
                    <b>카테고리유형</b>
                    <select id="room_type" className="room_type" required>
                        {roomList.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </select>
                    <b>문의유형</b>
                    <select className="inq_type" id="inq_type" required>
                        {inqList.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </select>
                    <div className={styles.phone_block}>
                        <b>휴대폰 번호</b>
                        <p className={styles.inp_wrap}>
                            <input
                                id="phone_number"
                                className={styles.phone_input}
                                ref={phoneRef}
                                minLength={10}
                                type="text"
                                placeholder="선택사항입니다."
                            />
                        </p>
                    </div>
                    <div className={styles.email_block}>
                        <b>이메일</b>
                        <p className={styles.inp_wrap}>
                            <input
                                id="email_text"
                                className={styles.email_input}
                                ref={phoneRef}
                                type="email"
                                placeholder="선택사항입니다."
                            />
                        </p>
                    </div>
                </section>
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
