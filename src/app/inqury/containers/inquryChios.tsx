import { useRef } from "react";
import styles from "./inquryChios.module.css";

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

interface InquryChiosProps {
    phoneRef: React.RefObject<HTMLInputElement>;
    emailRef: React.RefObject<HTMLInputElement>;
}

function InquryChios(props: InquryChiosProps) {
    const { phoneRef, emailRef } = props;

    return (
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
                        ref={emailRef}
                        type="email"
                        placeholder="선택사항입니다."
                    />
                </p>
            </div>
        </section>
    );
}

export default InquryChios;
