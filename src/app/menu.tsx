const Menu = () => {
  return (
    <ul className="Menu_className__gGcYQ flex space-x-2 m-2">
      <li className="text-xs" data-attribute-id="gnb" data-gnb-kind="jobs">
        <a href="/wdlist" className="">
          채용
        </a>
      </li>
      <li className="text-xs" data-attribute-id="gnb" data-gnb-kind="event">
        <a href="/events" className="">
          이벤트
        </a>
      </li>
      <li
        className="smMoreVisible text-xs"
        data-attribute-id="gnb"
        data-gnb-kind="resume"
      >
        <a href="/cv/list" className="">
          이력서
        </a>
      </li>
      <li
        className="smMoreVisible text-xs"
        data-attribute-id="gnb"
        data-gnb-kind="community"
      >
        <a href="/community">소셜</a>
      </li>
      <li
        className="smMoreVisible text-xs"
        data-attribute-id="gnb"
        data-gnb-kind="freelancer"
      >
        <a
          href="https://www.wanted.co.kr/gigs/experts"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          프리랜서
        </a>
      </li>
      <li
        className="smMoreVisible text-xs"
        data-attribute-id="gnb"
        data-gnb-kind="aiScore"
      >
        <a href="/aiscore/resume" className="">
          AI 합격예측
        </a>
      </li>
    </ul>
  );
};

export default Menu;
