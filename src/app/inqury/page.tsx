"use client";

import styles from "./inqury.module.css";
import React, { useState } from "react";

function Inquiry() {
    const [selectedIdx, setSelectedIdx] = useState(0);

    const items = [
        { text: "Item 1", content: "Content 1" },
        { text: "Item 2", content: "Content 2" },
    ];

    const handleItemClick = (index: number) => {
        setSelectedIdx(index);
    };

    return (
        <div>
            <div className={styles.align_rt}>
                <div className={styles.inqury}>
                    <div className={styles.tabs}>
                        <span className={styles.tab_btn}>나의 문의 내역</span>
                        <span className={styles.tab_btn}>새 문의 작성</span>
                        {items.map((item, index) => (
                            <span
                                key={index}
                                className={`cursor-pointer ${
                                    selectedIdx === index
                                        ? "tab_btn text-red-500 border-b-2"
                                        : "tab_btn "
                                }`}
                                onClick={() => handleItemClick(index)}>
                                {item.text}
                            </span>
                        ))}
                    </div>
                    <div className="ml-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`mt-2 ${
                                    selectedIdx === index ? "block" : "hidden"
                                }`}>
                                {item.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inquiry;
