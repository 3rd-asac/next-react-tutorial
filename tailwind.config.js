/** @type {import('tailwindcss').Config} */
module.exports = {
  // CSS 파일과 연결된 HTML 또는 JS 파일 경로. Tailwind CSS 제거 방지.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // darkMode 설정. 'media'는 사용자 시스템 설정 따라 다크 모드 활성화. 현재 비활성화.
  // darkMode: 'media',

  theme: {
    extend: {
      // 사용자 정의 색상 추가.
      colors: {
        customblue: "#3252df", // 사용자 정의 파란색
        customgreen: "#41e843", // 사용자 정의 초록색
        highlight: "#ff00ff", // 강조 색상
      },

      // 사용자 정의 폰트 패밀리 추가.
      fontFamily: {
        "custom-font": ['"My Custom Font"', "sans"],
      },

      // 새 간격(높이 및 너비) 값 추가.
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },

  // 사용 가능한 CSS 변형(예: hover, focus) 정의. 현재 비어 있음.
  variants: {},

  // Tailwind CSS 플러그인 추가. 현재 비어 있음.
  plugins: [],
};
