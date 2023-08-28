import React from 'react';

function Dropdown() {
    return (
        <>
            <div className="w-64 rounded-lg bg-[#282828] w-24 content-center text-white">
                <li>
                    {' '}
                    <button>계정 </button>{' '}
                </li>
                <li>
                    <button>프로필</button>
                </li>
                <li>
                    {' '}
                    <button>지원</button>
                </li>
                <li>
                    <button>다운로드하기</button>
                </li>
                <li>
                    <button>설정</button>
                </li>
            </div>
        </>
    );
}

export default Dropdown;
