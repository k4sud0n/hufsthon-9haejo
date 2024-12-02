/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', "sans-serif"], // 기본 sans-serif를 Noto Sans KR로 설정
      },
    },
  },
  plugins: [],
};
