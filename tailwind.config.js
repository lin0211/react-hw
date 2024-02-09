import { range } from "lodash";
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 999),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 999),
      },
      fontSize: {
        ...pxToRemFunc(0, 999),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 999),
      }, // px을 rem으로 변환
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
      },
      backgroundImage: {
        checkAllWhite: 'url("/week1/check_filled_white.svg")',
        checkAllBlue: 'url("/week1/check_filled_blue.svg")',
        checkWhite: 'url("/week1/check_white.svg")',
        checkBlue: 'url("/week1/check_blue.svg")',
        kakao: 'url("/week4/kakaotalk.png")',
      },
    },
    fontFamily: {
      sans: ["noto-sans-kr", "sans-serif"],
    },
  },
  plugins: [],
};
