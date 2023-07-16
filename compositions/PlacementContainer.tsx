import { Box, styled } from "@mui/material";
import React, { useEffect, useRef } from "react";

import { getPosition, setPosition } from "@/libs";

interface PlacementContainerProps {
  selector: string;
  containerWidth: number;
  containerHeight: number;
  children?: React.ReactNode;
}

const PlacementContainer = (props: PlacementContainerProps) => {
  const { containerWidth, containerHeight, children, selector } = props;

  const contentCardRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const targetEl = contentCardRef.current;
    const anchor = document.querySelector(selector);

    if (!targetEl || !anchor) return;

    const parentNode = anchor.parentNode as SVGSVGElement | undefined;

    const { xPos, yPos, parentHeight, parentWidth } = getPosition(anchor, parentNode);

    if (xPos && yPos && parentHeight && parentWidth) {
      const actualXPosition = (parseInt(xPos) / parentWidth) * containerWidth;
      const actualYPosistion = (parseInt(yPos) / parentHeight) * containerHeight;

      setPosition(targetEl, actualXPosition, actualYPosistion);
      targetEl.style.transform = "unset";
    }
  }, [containerWidth, containerHeight, selector]);

  return <Wrapper ref={contentCardRef}>{children}</Wrapper>;
};

const Wrapper = styled(Box)(({ theme }) => {
  return {
    "& .courseTitle": {
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "55px",
        lineHeight: "1.45",
        textAlign: "left",
      },
    },
  };
});

export default PlacementContainer;
