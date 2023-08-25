import React, { useState, useEffect, useRef } from "react";
import styles from "./newInqury.module.css";

function NewInqury() {
    const phoneRef = useRef<HTMLInputElement>(null);

    return (
        <div className={styles.tab_each}>
            <form className="inq-form">
                <div className={styles.alert_top}>
                    <p>
                        여기어때 이용 중 불편하신 점을 문의주시면{" "}
                        <em>최대한 빠른 시일내에 답변 드리겠습니다.</em>
                    </p>
                </div>
                <section className={styles.info_wrap}>
                    <div className={styles.phone_block}>
                        <b className={styles.phone_text}>휴대폰 번호</b>
                        <p className={styles.inp_wrap}>
                            <input
                                className={styles.phone_input}
                                ref={phoneRef}
                                type="text"
                                placeholder="선택사항입니다."
                            />
                        </p>
                    </div>
                </section>
                <section className="text-warp">
                    <b>문의 내용</b>
                </section>
            </form>
        </div>
    );
}

export default NewInqury;
