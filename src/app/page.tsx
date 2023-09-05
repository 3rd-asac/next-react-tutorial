import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

export default function IconTest() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Icon Test Page</h1>

      {/* 적용 예시: custom-blue 배경과 텍스트에 적용 */}
      <div className="bg-customblue p-6 rounded-lg shadow-md text-white">
        This is custom blue background with white text.
      </div>

      {/* 적용 예시: custom-green 텍스트에만 적용 */}
      <div className="text-customgreen mt-4">This text is in custom green.</div>

      <div className="text-highlight mt-4">이 텍스트는 눈에 띄게 보임.</div>

      {/* 홈 아이콘을 사용한 링크 버튼 추가 */}
      <Link href="/" passHref>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex items-center">
          <HomeIcon className="mr-2" /> Home
        </button>
      </Link>

      <Link href="/movie" passHref>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Go to Movies
        </button>
      </Link>
    </div>
  );
}
