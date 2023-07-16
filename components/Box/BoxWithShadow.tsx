import { CSSProperties, ReactNode } from "react";

import { Box, BoxProps, styled } from "@mui/material";

export interface BoxWithShadowProps extends BoxProps {
  children: ReactNode;
  backgroundColor?: CSSProperties["backgroundColor"];
  backgroundImage?: CSSProperties["backgroundImage"];
}

const BoxWithShadow = (props: BoxWithShadowProps) => {
  const { children, backgroundColor, backgroundImage } = props;

  return (
    <StyledBox
      {...props}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "backgroundColor" && propName !== "backgroundImage",
})<Pick<BoxWithShadowProps, "backgroundColor" | "backgroundImage">>(
  ({ backgroundColor, backgroundImage }) => {
    return {
      boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",
      backgroundColor: backgroundColor,
      backgroundImage: backgroundImage,
    };
  }
);

export default BoxWithShadow;
