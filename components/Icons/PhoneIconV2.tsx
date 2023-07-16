import React from "react";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const PhoneIconV2 = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="31" height="30" viewBox="0 0 31 30" fill="none" {...props}>
      <g filter="url(#filter0_ii_1481_1502)">
        <rect
          x="0.5"
          width="30"
          height="30"
          rx="15"
          fill="url(#paint0_linear_1481_1502)"
        />
      </g>
      <path
        d="M18.6909 22C12.7964 22 8 17.2036 8 11.3091C8.00029 10.2549 8.3848 9.23699 9.08153 8.44586C9.77826 7.65472 10.7394 7.14464 11.7851 7.01111C12.0958 6.97226 12.4107 7.0359 12.6819 7.19236C12.9531 7.34882 13.1658 7.58954 13.2876 7.87794L14.7396 11.2586C14.8355 11.4778 14.8751 11.7174 14.8549 11.9558C14.8347 12.1943 14.7554 12.4238 14.624 12.6238L13.5116 14.3141C14.0044 15.2454 14.7674 16.0059 15.7003 16.4956L17.369 15.3832C17.5697 15.2507 17.8001 15.1701 18.0397 15.1486C18.2793 15.1272 18.5204 15.1656 18.7414 15.2604L22.1221 16.7124C22.4105 16.8342 22.6512 17.0469 22.8076 17.3181C22.9641 17.5893 23.0277 17.9042 22.9889 18.2149C22.8554 19.2606 22.3453 20.2217 21.5541 20.9185C20.763 21.6152 19.7451 21.9997 18.6909 22ZM11.7851 8.76644C11.2041 8.89194 10.6835 9.21274 10.3102 9.6754C9.93696 10.1381 9.73347 10.7147 9.73365 11.3091C9.73557 13.6841 10.6799 15.9613 12.3593 17.6407C14.0387 19.3201 16.3159 20.2644 18.6909 20.2663C19.2853 20.2665 19.8619 20.063 20.3246 19.6898C20.7873 19.3165 21.1081 18.7959 21.2336 18.2149L18.1997 16.9146L16.5238 18.0343C16.3154 18.1722 16.0749 18.2539 15.8256 18.2717C15.5763 18.2894 15.3266 18.2424 15.1008 18.1354C13.6986 17.4564 12.5644 16.3272 11.8791 14.9281C11.7688 14.7035 11.7195 14.4538 11.736 14.2041C11.7525 13.9544 11.8342 13.7133 11.973 13.5051L13.0854 11.8003L11.7851 8.76644Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_ii_1481_1502"
          x="-0.5"
          y="-2"
          width="31"
          height="34"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1481_1502" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.722774 0 0 0 0 0.864931 0 0 0 0 0.945833 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_1481_1502"
            result="effect2_innerShadow_1481_1502"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1481_1502"
          x1="15.5429"
          y1="-6.92308"
          x2="15.5429"
          y2="35.1923"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#83D2FF" />
          <stop offset="0.409375" stopColor="#1C98DD" />
          <stop offset="0.742708" stopColor="#1C52DD" />
          <stop offset="1" stopColor="#055CBB" />
        </linearGradient>
      </defs>
    </SVGIconBase>
  );
};

export default PhoneIconV2;
