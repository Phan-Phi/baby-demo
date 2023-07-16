import { SVGProps } from "react";
import { useMeasure } from "react-use";

import { Box, styled } from "@mui/material";

import { Image } from "@/components";
import { PlacementContainer } from "@/compositions";

const FAQLineSVG = (props: SVGProps<SVGSVGElement>) => {
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box position="relative" ref={measureRef}>
      <svg viewBox="0 0 1685 2348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="806.703"
            y1="1.5"
            x2="806.703"
            y2="2346.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFA25E" />
            <stop offset="0.409375" stopColor="#FF6E4B" />
            <stop offset="0.742708" stopColor="#FF4B4B" />
            <stop offset="1" stopColor="#EE4545" />
          </linearGradient>
        </defs>

        <path
          d="M286 1.5C94.5002 1.5 9.00006 265.5 232 367.5C617.247 543.712 1406.33 343.531 1540 720.5C1673.5 1097 -277.139 750.969 36.0001 1306C214 1621.5 1377.5 1238 1663.5 1621.5C1855.63 1879.13 548 1692.5 415 1978C308.6 2206.4 764.667 2318.83 1006 2346.5"
          stroke="url(#paint0_linear_0_1)"
          strokeOpacity="0.5"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeDasharray="15 15"
        />

        <circle className="faq-fish-1" cx="156.09" cy="-243.5" r="8" fill="none" />
        <circle className="faq-fish-2 " cx="1358.09" cy="516.5" r="8" fill="none" />
        <circle className="faq-fish-3" cx="-82.91" cy="1050.5" r="8" fill="none" />
        <circle className="faq-fish-4" cx="1480.09" cy="1665.5" r="8" fill="none" />
      </svg>
      <PlacementContainer
        selector=".faq-fish-2"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <ImageWrapper2>
          <Image src="/faq-fish-2.png" alt="" />
        </ImageWrapper2>
      </PlacementContainer>

      <PlacementContainer
        selector=".faq-fish-3"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <ImageWrapper3>
          <Image src="/faq-fish-3.png" alt="" />
        </ImageWrapper3>
      </PlacementContainer>

      <PlacementContainer
        selector=".faq-fish-4"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <ImageWrapper4>
          <Image src="/faq-fish-4.png" alt="" />
        </ImageWrapper4>
      </PlacementContainer>
    </Box>
  );
};

const ImageWrapper = styled(Box)(() => {
  return {
    pointerEvents: "none",
    userSelect: "none",
    position: "relative",
    ["& img"]: {
      objectFit: "contain",
    },
  };
});

const ImageWrapper2 = styled(ImageWrapper)(() => {
  return {
    width: "clamp(0px, 11.67vw, 224px)",
    aspectRatio: "224 / 205",
    transform: "rotate(15deg)",
  };
});

const ImageWrapper3 = styled(ImageWrapper)(() => {
  return {
    width: "clamp(0px, 9.79vw, 188px)",
    aspectRatio: "188 / 162",
    transform: "rotate(-13deg)",
  };
});

const ImageWrapper4 = styled(ImageWrapper)(() => {
  return {
    width: "clamp(0px, 9.79vw, 225px)",
    aspectRatio: "224 / 143",
    transform: "rotate(-11deg)",
  };
});

export default FAQLineSVG;
