'use client';
import Link from 'next/link';

const AsideComponent = () => {
  return (
    <aside className="flex items-center gap-2">
      <ul className="flex gap-2">
        <li>
          <button
            className="searchButton text-sm"
            type="button"
            data-attribute-id="gnb"
            data-gnb-kind="search"
          >
            {/* ... svg path data ... */}
          </button>
        </li>
        <li>
          <Link href="/Join">
            <div
              className="signUpButton mt-1 text-xs"
              data-attribute-id="gnb"
              data-gnb-kind="signupLogin"
            >
              회원가입/로그인
            </div>
          </Link>
        </li>
        <li
          className="mdMoreVisible leftDivision"
          data-attribute-id="gnb"
          data-gnb-kind="forEmployers"
        >
          |
        </li>
        <div className="relative">
          <div className="absolute flex items-center justify-center rounded-full bg-gray-200 bg-opacity-50 w-20 h-6">
            <div className="dashboardButton text-xs m-1 mt-1.5">
              기업 서비스
            </div>
            <li className="Aside_visibleMenu__Dki9n">
              <button
                className="menuButton text-sm m-1"
                type="button"
                data-attribute-id="gnb"
                data-gnb-kind="photo"
              ></button>
            </li>
          </div>
        </div>
      </ul>
      <div className="Aside_visibleMenu__Dki9n"></div>
    </aside>
  );
};

export default AsideComponent;
