import React from "react";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowTopIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="50" height="50" viewBox="0 0 50 50" fill="none" {...props}>
      <g filter="url(#filter0_bd_1155_179)">
        <path
          d="M12.75 12.5556C12.2542 12.5556 11.8383 12.3849 11.5023 12.0436C11.1663 11.7022 10.9988 11.2803 11 10.7778C11 10.2741 11.168 9.85156 11.504 9.51023C11.84 9.16889 12.2553 8.99882 12.75 9.00001H37.25C37.7458 9.00001 38.1617 9.17067 38.4977 9.51201C38.8337 9.85334 39.0012 10.2753 39 10.7778C39 11.2815 38.832 11.704 38.496 12.0453C38.16 12.3867 37.7447 12.5567 37.25 12.5556H12.75ZM25 41C24.5042 41 24.0883 40.8293 23.7523 40.488C23.4163 40.1467 23.2488 39.7247 23.25 39.2222V22.8667L19.8813 26.2889C19.5604 26.6148 19.1667 26.7778 18.7 26.7778C18.2333 26.7778 17.825 26.6 17.475 26.2444C17.1542 25.9185 16.9938 25.5037 16.9938 25C16.9938 24.4963 17.1542 24.0815 17.475 23.7556L23.775 17.3556C23.95 17.1778 24.1396 17.0522 24.3438 16.9787C24.5479 16.9052 24.7667 16.8679 25 16.8667C25.2333 16.8667 25.4521 16.904 25.6563 16.9787C25.8604 17.0533 26.05 17.179 26.225 17.3556L32.5687 23.8C32.8896 24.1259 33.05 24.5259 33.05 25C33.05 25.4741 32.875 25.8889 32.525 26.2444C32.2042 26.5704 31.7958 26.7333 31.3 26.7333C30.8042 26.7333 30.3958 26.5704 30.075 26.2444L26.75 22.8667V39.2222C26.75 39.7259 26.582 40.1484 26.246 40.4898C25.91 40.8311 25.4947 41.0012 25 41Z"
          fill="url(#paint0_linear_1155_179)"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_1155_179"
          x="-10"
          y="-10"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1155_179"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_1155_179"
            result="effect2_dropShadow_1155_179"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1155_179"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1155_179"
          x1="25"
          y1="9"
          x2="25"
          y2="41"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA25E" />
          <stop offset="0.409375" stopColor="#FF6E4B" />
          <stop offset="0.742708" stopColor="#FF4B4B" />
          <stop offset="1" stopColor="#EE4545" />
        </linearGradient>
      </defs>
    </SVGIconBase>
  );
};

export default ArrowTopIcon;
