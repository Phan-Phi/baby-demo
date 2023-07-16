import { SvgIconProps } from "@mui/material";
import SVGIconBase from "./SVGIconBase";

const ClockIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M24.6364 13C24.6364 19.3515 19.4878 24.5 13.1364 24.5C6.78489 24.5 1.63635 19.3515 1.63635 13C1.63635 6.64854 6.78489 1.5 13.1364 1.5C19.4878 1.5 24.6364 6.64854 24.6364 13Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M13.1414 5.5V13.0063L18.4407 18.3063"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </SVGIconBase>
  );
};

export default ClockIcon;
