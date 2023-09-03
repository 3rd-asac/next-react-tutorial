import { useRef, useState } from "react";
import styles from "./module/inquryText.module.css";
interface InquryTextProps {
    textareaRef: React.RefObject<HTMLTextAreaElement>;
}

function InquryText(props: InquryTextProps) {
    const { textareaRef } = props;
    const [isUlVisible, setUlVisible] = useState(true);
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
                        문의하시는 제휴점 이름과 예약정보를 남겨주시면 보다 빠른
                        상담이 가능합니다.
                    </li>
                    <li>
                        문의 내용 작성 시 개인정보가 입력되지 않도록 주의
                        부탁드립니다.
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default InquryText;
