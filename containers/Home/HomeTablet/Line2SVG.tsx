import * as React from "react";
import { SVGProps } from "react";

const Line2SVGOnTablet = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 250 625" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M249 1.5C249 30.5 238.001 46.5 182.5 88C77.2343 166.712 -19.6187 257.564 4.5 356.5C29 457 243.5 467.5 158 519.5C89.6003 561.1 81.6667 602.593 88.5001 623.76"
        stroke="#1C98DD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="8 8"
      />

      <circle className="anchor-10" cx="-28" cy="149.5" r="4" fill="none" />
      <circle className="anchor-11" cx="-31.65" cy="330" r="4" fill="none" />
      <circle className="anchor-12" cx="136.35" cy="464" r="4" fill="none" />
      <circle className="anchor-13" cx="52.35" cy="598" r="4" fill="none" />
    </svg>
  );
};
export default Line2SVGOnTablet;
