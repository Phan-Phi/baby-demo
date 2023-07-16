import { SVGProps } from "react";

const WaveSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg id="background-footer" viewBox="0 0 1920 320" fill="none" {...props}>
    <path
      d="M688 59.5003C448.757 214.157 219 -17.9993 0 33.0005V320.124H1920V68.5005C1771.27 109.503 927.243 -95.1562 688 59.5003Z"
      fill="#1C98DD"
    />

    <circle className="footer-anchor-1" cx="600" cy="100" r="8" fill="none" />
    <circle className="footer-anchor-2" cx="750" cy="100" r="8" fill="none" />
  </svg>
);
export default WaveSVG;
