import gsap from "gsap";
import { Box } from "@mui/material";
import { useWindowSize } from "react-use";
import { isTablet } from "react-device-detect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import { BackgroundPattern } from "@/components";

const Background = () => {
  const boxPosRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { height: windowHeight } = useWindowSize();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const boxPosEl = boxPosRef.current;

      const containerEl = containerRef.current;

      if (!boxPosEl || !containerEl) return;

      const lastEl = document.querySelector<HTMLDivElement>("#tro-giup");

      if (!lastEl) return;

      const { x: maxWidth } = lastEl.getBoundingClientRect();

      gsap.set(boxPosEl, {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100vh",
        backgroundColor: "#F3FBFF",
      });

      gsap.set(containerEl, {
        height: "100vh",
        width: maxWidth * 1.5,
      });

      if (isTablet) return;

      gsap.to(containerEl, {
        x: -maxWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerEl,
          scrub: 1.5,
          pin: true,
          end: `+=${maxWidth}`,
        },
      });
    }, boxPosRef);

    return () => {
      ctx.revert();
    };
  }, [windowHeight]);

  return (
    <Box ref={boxPosRef}>
      <Box ref={containerRef} overflow="hidden">
        <BackgroundPattern />
      </Box>
    </Box>
  );
};

export default Background;
