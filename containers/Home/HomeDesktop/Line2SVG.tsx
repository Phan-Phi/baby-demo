import { SVGProps } from "react";

const Line2SVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 1595 491" fill="none" {...props}>
      <path
        d="M0.5 471C143.333 519.833 683.9 474.9 839.5 260.5C997.713 42.5 1056.5 -3.00001 1229 2.99999"
        stroke="#FF6E4B"
        strokeWidth={3}
        strokeLinejoin="round"
        strokeDasharray="15 15"
      />

      <path
        d="M801.5 303C1161 145.5 1271.5 209.774 1593 211"
        stroke="#FF6E4B"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="15 15"
      />

      <path
        d="M794 309.5C886.5 274.5 1012.6 434.4 1305 418"
        stroke="#FF6E4B"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="15 15"
      />

      <circle className="anchor-3" cx="-186.5" cy="332.5" r="8" fill="none" />
      <circle className="anchor-4" cx="1144" cy="-72.5" r="8" fill="none" />
      <circle className="anchor-5" cx="1541" cy="137.5" r="8" fill="none" />
      <circle className="anchor-6" cx="1263.5" cy="337.5" r="8" fill="none" />
      <circle className="anchor-7" cx="-232.5" cy="0" r="8" fill="none" />
    </svg>
  );
};
export default Line2SVG;
