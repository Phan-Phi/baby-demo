import * as React from "react";
import { SVGProps } from "react";
const SubBackgroundSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 649 1648" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask
      id="mask0_1473_3923"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
    >
      <path
        d="M30.1925 318.5C114.906 -31 590.686 -43.4192 827.499 51.5001L827.499 1532.5C736.331 1514.15 496.961 1545.61 406.061 1608.77C315.16 1671.94 6.71288 1686.06 58.4991 1422C68.051 1373.29 199.113 1204.86 90.9346 922.499C-33.8609 596.762 -2.82023 454.698 30.1925 318.5Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_1473_3923)">
      <path
        d="M15.499 314C85.3054 25.9996 590.687 -52.9195 827.5 41.9999L809 1544.5C717.832 1526.15 496.96 1545.61 406.06 1608.77C315.16 1671.94 23.2123 1689.56 74.9985 1425.5C84.5505 1376.79 189.677 1194.86 81.4985 912.499C-43.297 586.762 -15.1625 440.5 15.499 314Z"
        fill="white"
        stroke="#055CBB"
        strokeWidth={40}
      />
    </g>
  </svg>
);
export default SubBackgroundSVG;
