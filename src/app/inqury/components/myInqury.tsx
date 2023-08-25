import React, { useState, useEffect } from "react";
import styles from "./myInqury.module.css";

function MyInqury() {
    const [inquries, SetInquries] = useState([]);

    useEffect(() => {
        // axios 사용 get하는 함수 추가, 일단 문의 없도록.
    });

    return (
        <div className={styles.tab_each}>
            <div className={styles.list_none}>
                등록된 1:1 문의가 없습니다.
                <b>
                    여기어때는 회원님들의 소중한 의견에 귀기울여
                    <br />
                    신속하고 정확하게 답변드리도록 하겠습니다.
                </b>
            </div>
        </div>
    );
}

export default MyInqury;
