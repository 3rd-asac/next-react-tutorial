import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import AsideComponent from './AsideComponent';
import ImageSlider from './ImageSlide';
import Menu from './menu';
import PathSVG from '/public/path.svg';
import SeachSVG from '/public/search.svg';
import WantedSVG from '/public/wanted.svg';

const Page: React.FC = () => {
  const images = [
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2078%2Fa78a154c.jpg&w=1060&q=100',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2070%2F1c7540fe.jpg&w=1060&q=100',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2081%2F7c4e8e6d.jpg&w=1060&q=100',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2059%2F24c52879.jpg&w=1060&q=100',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2132%2Fb670c0d8.jpg&w=1060&q=100',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2144%2Fc0d7064f.jpg&w=1060&q=100',
  ];

  return (
    <div className="font-pretendard-variable">
      <div className="sticky top-0 bg-white z-50 shadow-md">
        {/* 헤더 내용 */}
        <div className="ml-[10%] flex items-center">
          <button className="text-blue-500">
            <MenuIcon />
          </button>
          <WantedSVG className="w-10 h-10" />
          <nav className="ml-[10%] flex space-x-4">
            <Menu />
          </nav>
          <div className="ml-[17%] -mr-2 w-4 h-4">
            <SeachSVG />
          </div>
          <div>
            <AsideComponent />
          </div>
        </div>
        {/* 헤더 바로 아래의 구분선 */}
        <div className="w-[100%] mt-[0.3%] mb-[2%] border-[0.5px] border-lightGray/30 justify-center"></div>
      </div>
      {/* 나머지 내용 */}
      {/* 이미지 슬라이더 */}
      <div className="flex justify-center items-center trans mx-[10%] w-[80%] h-299 bg-gray-200">
        <ImageSlider images={images} />
      </div>
      <main>
        {/* 첫 번째 버튼 */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 mt-10 p-2 rounded-full shadow-md w-[80%] flex items-center justify-center"
            aria-label="다음 버튼"
          >
            <div className="w-6 h-6 mr-2">
              <SeachSVG />
            </div>
            <a className="text-white">채용 중인 포지션 보러가기</a>
          </button>
        </div>
        <article className="mt-16">
          <div className="flex mx-[9%] h-30 justify-center rounded-full p-9">
            <div className="inline-block align-middle w-full">
              <span>내가 관심있을 만한 포지션</span>
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </article>
        <article className="mt-16">
          <div className="flex mx-[9%] h-30 justify-center">
            <div className="inline-block align-middle w-full">
              <div className="flex rounded-2xl justify-between bg-slate-400 p-9">
                <div className="text-white ">
                  내 연차에 이 연봉이 괜찮은가? 궁금할 땐
                </div>
                <button className="bg-white rounded-full p-2 text-blue-500 h-14">
                  커리어 중간점검
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer>
        <br></br>
        {/* 푸터의 구분선 */}
        <div className="flex items-center">
          <div className=" w-[15%] border-lightGray/30">
            <PathSVG />
          </div>
          <WantedSVG className="ml-2 w-10 h-10" />{' '}
          {/* Adjust ml value as needed */}
        </div>

        <br></br>
        {/* 푸터의 하단 구분선 */}
        <div className="w-[100%] mt-[0.3%] mb-[2%] border-[0.5px] border-lightGray/30"></div>
      </footer>
    </div>
  );
};

export default Page;
