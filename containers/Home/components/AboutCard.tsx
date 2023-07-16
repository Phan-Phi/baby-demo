import React from "react";
import { Image } from "@/components";
import { Box, styled } from "@mui/material";
import { isTablet } from "react-device-detect";

const AboutCard = ({
  src,
  leftContent,
  rightContent,
  children,
}: {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  src: string;
  children?: React.ReactNode;
}) => {
  return (
    <Container
      position="relative"
      display="flex"
      alignItems="center"
      justifyItems="center"
    >
      <ImageWrapper>
        <Image src={src} alt="about-us" />
      </ImageWrapper>
      <LeftWrapper>{leftContent}</LeftWrapper>
      <RightWrapper>{rightContent}</RightWrapper>
      {children}
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      rowGap: 20,
    },
  };
});

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    border: "2px solid #FF6E4B",
    overflow: "hidden",
    borderRadius: 20,
    position: "relative",
    width: "clamp(0px, 37.04vh, 400px)",
    height: "clamp(0px, 24.54vh, 265px)",
    aspectRatio: "400 / 265",

    [theme.breakpoints.down("md")]: {
      width: "31.18vw",
      height: "20.7vw",
      borderRadius: 10,
      border: "1.5x solid #FF6E4B",
      aspectRatio: "232 / 154",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "calc(100% * 232 / 352)",
      aspectRatio: "352 / 233",
    },

    ...(isTablet && {
      width: "31.18vh",
      height: "20.7vh",
    }),
  };
});

const LeftWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "4.5%",
    right: "calc(100% + 24px)",
    width: "clamp(0px, 62.5vh, 675px)",
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      width: "40.32vw",
      top: "12.98%",
    },

    [theme.breakpoints.between("md", "lg")]: {
      width: "360px",
    },
    ...(isTablet && {
      width: "clamp(0px, 40.32vh, 300px)",
    }),
  };
});

const RightWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "4.5%",
    left: "calc(100% + 24px)",
    width: "clamp(0px, 62.5vh, 675px)",
    [theme.breakpoints.down("md")]: {
      // width: "40.32vw",
      width: "35vw",
      top: "12.98%",
      textAlign: "justify",
    },
    "& ul": {
      paddingLeft: "1rem",
      margin: 0,
    },
    "& li": {
      color: theme.palette.secondary.main,
      paddingBottom: "2rem",
    },

    ...(isTablet && {
      width: "clamp(0px, 40.32vh, 300px)",
    }),
  };
});

export default AboutCard;
