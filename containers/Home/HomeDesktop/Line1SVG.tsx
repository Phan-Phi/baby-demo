import { SVGProps, useEffect, useRef } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Image } from "@/components";
import { setPosition } from "@/libs";
import { useMeasure } from "react-use";
import { useIntl } from "@/hooks";

const Line1SVG = (props: SVGProps<SVGSVGElement>) => {
  const fishRef = useRef<HTMLDivElement>();
  const { messages } = useIntl();
  const [containerRef, { width: containerWidth, height: containerHeight }] = useMeasure();

  useEffect(() => {
    const fishEl = fishRef.current;

    if (!fishEl) return;

    const actualXPos = (550 / 3028) * containerWidth;
    const actualYPos = (350 / 454) * containerHeight;

    setPosition(fishEl, `${actualXPos}`, `${actualYPos}`);
    fishEl.style.transform = "unset";
  }, [containerWidth, containerHeight]);

  return (
    <Box position="relative" ref={containerRef}>
      <svg viewBox="0 0 3028 454" fill="none" {...props}>
        <path
          d="M1.5 171C100.5 118 259 286.616 359 343.5C635 500.5 1017.24 456.607 1165.5 397C1510 258.5 1501.5 178.5 2068.5 195.5C2522.1 209.1 2524 -24.5 3027.5 5.00001"
          stroke="#1C98DD"
          strokeWidth={3}
          strokeLinejoin="round"
          strokeDasharray="15 15"
        />
        <circle className="anchor-1" cx="800" cy="450" r="8" fill="none" />
        <circle className="anchor-2" cx="1667.5" cy="-218" r="8" fill="none" />
      </svg>

      <ImageWrapper ref={fishRef}>
        <Box
          position="relative"
          width={"clamp(0px, 22.22vh, 240px)"}
          height={"clamp(0px, 16.02vh, 173px)"}
          className="fish"
        >
          <Image src="/fish-1.png" alt="fish-1" />
        </Box>
        <Box className="text-with-arrow">
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.646735 19.4831C0.235808 19.1546 0.0303449 18.7366 0.0303449 18.229C0.0303449 17.7214 0.235808 17.3034 0.646735 16.9749L9.33224 9.98787L0.646735 3.00084C0.235808 2.67239 0.020632 2.26213 0.00120637 1.77005C-0.0182193 1.27797 0.196956 0.852178 0.646735 0.492675C1.05766 0.164224 1.58066 0 2.21573 0C2.8508 0 3.3738 0.164224 3.78472 0.492675L14.0953 8.73379C14.3194 8.91294 14.4785 9.10703 14.5727 9.31604C14.6668 9.52506 14.7131 9.749 14.7117 9.98787C14.7117 10.2267 14.6653 10.4507 14.5727 10.6597C14.48 10.8687 14.3209 11.0628 14.0953 11.242L3.78472 19.4831C3.3738 19.8115 2.86051 19.9835 2.24487 19.999C1.62922 20.0146 1.09651 19.8426 0.646735 19.4831ZM15.4401 19.4831C15.0292 19.1546 14.8237 18.7366 14.8237 18.229C14.8237 17.7214 15.0292 17.3034 15.4401 16.9749L24.1256 9.98787L15.4401 3.00084C15.0292 2.67239 14.814 2.26213 14.7946 1.77005C14.7752 1.27797 14.9903 0.852178 15.4401 0.492675C15.851 0.164224 16.374 0 17.0091 0C17.6442 0 18.1672 0.164224 18.5781 0.492675L28.8886 8.73379C29.1128 8.91294 29.2719 9.10703 29.3661 9.31604C29.4602 9.52506 29.5065 9.749 29.505 9.98787C29.505 10.2267 29.458 10.4507 29.3638 10.6597C29.2697 10.8687 29.1113 11.0628 28.8886 11.242L18.5781 19.4831C18.1672 19.8115 17.6539 19.9835 17.0382 19.999C16.4226 20.0146 15.8899 19.8426 15.4401 19.4831Z"
              fill="#1C98DD"
            />
          </svg>

          <Typography color="secondary.main">{messages["scroll.more"]}</Typography>
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
      "@keyframes desktop-fish-move-effect": {
        "0%, 100%": {
          transform: "translate(0, 0) rotateZ(-20deg)",
        },
        "50%": {
          transform: "translate(25px, -5px) rotateZ(-30deg)",
        },
      },
      animation: `desktop-fish-move-effect 2000ms infinite`,
    },
    ["& .text-with-arrow"]: {
      "@keyframes desktop-more-info-effect": {
        "0%, 100%": {
          transform: "translate(0, 0)",
        },
        "50%": {
          transform: "translate(50px, 0px)",
        },
      },
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,
      position: "absolute",
      width: "300px",
      top: 0,
      left: "100%",
      animation: `desktop-more-info-effect 2000ms infinite`,
    },
  };
});

export default Line1SVG;
