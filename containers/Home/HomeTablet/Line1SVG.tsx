import { useMeasure } from "react-use";
import { useEffect, useRef, SVGProps } from "react";
import { Box, Typography, styled } from "@mui/material";

import { setPosition } from "@/libs";
import { Image } from "@/components";
import { useIntl } from "@/hooks";

const Line1SVGOnTablet = (props: SVGProps<SVGSVGElement>) => {
  const fishRef = useRef<HTMLDivElement>();
  const { messages } = useIntl();
  const [containerRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  useEffect(() => {
    const fishEl = fishRef.current;

    if (!fishEl) return;

    const actualXPos = (130 / 359) * containerWidth;
    const actualYPos = (-10 / 1485) * containerHeight;

    setPosition(fishEl, `${actualXPos}`, `${actualYPos}`);
  }, [containerWidth, containerHeight]);

  return (
    <Box position="relative" ref={containerRef}>
      <svg
        viewBox="0 0 359 1485"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M125 0.5C125 50.5 178.3 156 255.5 228C352 318 -30.3352 505.752 193.5 700C367.5 851 422.5 1036.5 262.5 1074C117.348 1108.02 141.506 1118.25 97.0006 1205.5C46.5 1304.5 11.0004 1302.5 3.00013 1344C-4.55553 1383.19 14.5002 1530.5 186 1469.5"
          stroke="#1C98DD"
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeDasharray="8 8"
        />
        <circle className="anchor-1" cx="130" cy="0" r="4" fill="none" />
        <circle className="anchor-2" cx="136" cy="167" r="4" fill="none" />
        <circle className="anchor-3" cx="-31.5" cy="417" r="4" fill="none" />
        <circle className="anchor-4" cx="52" cy="627.5" r="4" fill="none" />
        <circle className="anchor-5" cx="122" cy="820" r="4" fill="none" />
        <circle className="anchor-6" cx="139" cy="1019" r="4" fill="none" />
        <circle className="anchor-7" cx="56.5" cy="1197" r="4" fill="none" />
        <circle className="anchor-8" cx="-27.5" cy="1319" r="4" fill="none" />
        <circle className="anchor-9" cx="135.5 " cy="1435" r="4" fill="none" />
      </svg>

      <ImageWrapper ref={fishRef}>
        <Box position="relative" width="14.65vw" className="fish">
          <Image src="/fish-1-new.png" alt="fish-1" />
        </Box>
        <Box className="text-with-arrow">
          <svg viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.3"
              d="M0.258465 0.307724C0.42269 0.1122 0.631702 0.0144376 0.885505 0.0144376C1.13931 0.0144376 1.34832 0.1122 1.51255 0.307725L5.00606 4.44039L8.49958 0.307725C8.6638 0.112201 8.86894 0.00981691 9.11498 0.000573965C9.36101 -0.00866898 9.57391 0.0937148 9.75366 0.307725C9.91789 0.503249 10 0.752098 10 1.05427C10 1.35644 9.91789 1.60529 9.75366 1.80082L5.6331 6.7067C5.54353 6.81334 5.44648 6.88907 5.34198 6.93386C5.23747 6.97865 5.1255 7.00069 5.00606 6.99998C4.88663 6.99998 4.77465 6.97758 4.67015 6.93279C4.56564 6.888 4.4686 6.81263 4.37902 6.7067L0.258465 1.80082C0.0942392 1.60529 0.00824445 1.36107 0.000481559 1.06813C-0.00728134 0.775204 0.0787124 0.521735 0.258465 0.307724Z"
              fill="#1C98DD"
            />
            <path
              opacity="0.5"
              d="M0.258465 7.30772C0.42269 7.1122 0.631702 7.01444 0.885505 7.01444C1.13931 7.01444 1.34832 7.1122 1.51255 7.30772L5.00606 11.4404L8.49958 7.30772C8.6638 7.1122 8.86894 7.00982 9.11498 7.00057C9.36101 6.99133 9.57391 7.09371 9.75366 7.30772C9.91789 7.50325 10 7.7521 10 8.05427C10 8.35644 9.91789 8.60529 9.75366 8.80082L5.6331 13.7067C5.54353 13.8133 5.44648 13.8891 5.34198 13.9339C5.23747 13.9787 5.1255 14.0007 5.00606 14C4.88663 14 4.77465 13.9776 4.67015 13.9328C4.56564 13.888 4.4686 13.8126 4.37902 13.7067L0.258465 8.80082C0.0942392 8.60529 0.00824445 8.36107 0.000481559 8.06813C-0.00728134 7.7752 0.0787124 7.52173 0.258465 7.30772Z"
              fill="#1C98DD"
            />
            <path
              d="M0.258465 14.3077C0.42269 14.1122 0.631702 14.0144 0.885505 14.0144C1.13931 14.0144 1.34832 14.1122 1.51255 14.3077L5.00606 18.4404L8.49958 14.3077C8.6638 14.1122 8.86894 14.0098 9.11498 14.0006C9.36101 13.9913 9.57391 14.0937 9.75366 14.3077C9.91789 14.5032 10 14.7521 10 15.0543C10 15.3564 9.91789 15.6053 9.75366 15.8008L5.6331 20.7067C5.54353 20.8133 5.44648 20.8891 5.34198 20.9339C5.23747 20.9787 5.1255 21.0007 5.00606 21C4.88663 21 4.77465 20.9776 4.67015 20.9328C4.56564 20.888 4.4686 20.8126 4.37902 20.7067L0.258465 15.8008C0.0942392 15.6053 0.00824445 15.3611 0.000481559 15.0681C-0.00728134 14.7752 0.0787124 14.5217 0.258465 14.3077Z"
              fill="#1C98DD"
            />
          </svg>

          <Typography color="secondary.main" variant="m_body2">
            {messages["scroll.more"]}
          </Typography>
        </Box>
      </ImageWrapper>
    </Box>
  );
};

const ImageWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    ["& .fish"]: {
      width: "12.65vw",
      height: "15.86vw",
      aspectRatio: "109 / 118",

      ["& img"]: {
        objectFit: "contain",
      },

      transform: "translate(0, 0) rotateZ(40deg)",

      "@keyframes tablet-fish-move-effect": {
        "0%, 100%": {
          transform: "translate(0, 0) rotateZ(40deg)",
        },
        "50%": {
          transform: "translate(20px, 40px) rotateZ(30deg)",
        },
      },
      animation: `tablet-fish-move-effect 2000ms infinite`,
    },
    ["& .text-with-arrow"]: {
      "@keyframes tablet-more-info-effect": {
        "0%, 100%": {
          transform: "translate(0, 0)",
        },
        "50%": {
          transform: "translate(0, 50px)",
        },
      },
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 12,
      position: "absolute",
      top: "25%",
      left: "140%",
      minWidth: 300,
      animation: `tablet-more-info-effect 2000ms infinite`,
      ["& svg"]: {
        width: 12,
        height: 25.2,
      },
    },
  };
});

export default Line1SVGOnTablet;
