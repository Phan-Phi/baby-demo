import { useMedia } from "@/hooks";
import { RedFishSVG, Image, Headline } from "@/components";

import React, { useRef } from "react";
import { useHoverDirty } from "react-use";
import { isTablet } from "react-device-detect";
import { Box, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

interface CourseCardProps {
  step: string;
  src: string;
  titleSVG?: JSX.Element;
  title: string;
  course?: string;
}

interface TextWrapperIconProps {
  isLocale: boolean;
}

const CourseCard = (props: CourseCardProps) => {
  const { course, title, titleSVG, src, step } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHoverDirty(ref);
  const { isMdUp } = useMedia();
  const { locale } = useRouter();

  return (
    <Container justifyContent="center" alignItems="center">
      <IconWrapper>
        <RedFishSVG />
        <StyledStep>
          <Typography variant="title1" color="white">
            {step}
          </Typography>
        </StyledStep>
      </IconWrapper>

      <ImageWrapper overflow="hidden" ref={ref}>
        <Box
          sx={
            isHovering
              ? {
                  transform: "scale(1.2)",
                }
              : undefined
          }
          className="inner-image-wrapper"
        >
          <Image src={src} alt={course} />
        </Box>
      </ImageWrapper>

      {isMdUp ? (
        <TextWrapperIcon isLocale={locale === "en" ? true : false}>
          {titleSVG}
        </TextWrapperIcon>
      ) : (
        <TextWrapper>
          <Headline
            title={title}
            backgroundVariant="gradientBlue"
            display="block"
            textAlign="center"
          />
        </TextWrapper>
      )}
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    rowGap: 12,
    [theme.breakpoints.down("md")]: {
      rowGap: 0,
    },
  };
});

const IconWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: "clamp(0px, 10.46vh, 113px)",
    aspectRatio: "113 / 71",
    height: "clamp(0px, 6.57vh, 71px)",
    marginBottom: 16,
    [theme.breakpoints.down("md")]: {
      width: "11.86vw",
      height: "7.51vw",
      aspectRatio: "88.23 / 55.88",
      marginBottom: "-5.5%",
      zIndex: 2,
    },
    [theme.breakpoints.down("sm")]: {
      width: "23.53vw",
      height: "14.9vw",
    },
  };
});

const StyledStep = styled(Box)(() => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-25%, -50%)",
    display: "flex",
    alignItems: "center",
  };
});

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    border: "4px solid #FF6E4B",
    borderRadius: 20,

    [theme.breakpoints.down("md")]: {
      border: "2px solid #FF6E4B",
      borderRadius: 10,
    },

    ["& .inner-image-wrapper"]: {
      width: "clamp(0px, 37.04vh, 400px)",
      height: "clamp(0px, 24.63vh, 266px)",
      aspectRatio: "400 / 266",
      position: "relative",
      transition: "500ms",
      overflow: "hidden",
      zIndex: 1,
      ["& img"]: {
        objectFit: "cover",
      },
      [theme.breakpoints.down("md")]: {
        width: "47.28vw",
        height: "31.18vw",
        aspectRatio: "351.75 / 232",
        borderRadius: 10,
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100vw - 32px)",
        height: "calc(100% * 232 / 352)",
        aspectRatio: "352 / 232",
      },
      ...(isTablet && {
        width: "clamp(0px, 40.32vh, 300px)",
        height: "clamp(0px, 26.6vh, 197.88px)",
        // width: "clamp(0px, 47.28vh, 351.75px)",
        // height: "clamp(0px, 31.18vh, 232px)",
      }),
    },

    ...(isTablet && {
      border: "2px solid #FF6E4B",
      borderRadius: 10,
    }),
  };
});

const TextWrapperIcon = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLocale",
})<TextWrapperIconProps>(({ theme, isLocale }) => {
  return {
    width: "100%",

    "& svg": {
      width: "100%",
      height: isLocale ? "clamp(0px,2.4vh,96px)" : "clamp(0px,8vh,96px)",

      [theme.breakpoints.down("md")]: {
        height: "56px",
      },
    },

    "& .lastHomeCourse": {
      width: "100%",
      height: "clamp(0px,7.1vh,96px)",
    },
    // justifyContent: "center",
    // alignItems: "center",
    // maxWidth: "80%",
    // [theme.breakpoints.down("md")]: {
    //   maxWidth: "100%",
    //   marginTop: 16,
    // },
    // ["& > span"]: {
    //   ...theme.typography.title1,
    //   [theme.breakpoints.down("md")]: theme.typography.m_title1,
    //   ...(isTablet && theme.typography.m_title1),
    // },
  };
});
const TextWrapper = styled(Stack)(({ theme }) => {
  return {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "80%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      marginTop: 16,
    },
    ["& > span"]: {
      ...theme.typography.title1,
      [theme.breakpoints.down("md")]: theme.typography.m_title1,
      ...(isTablet && theme.typography.m_title1),
    },
  };
});

export default CourseCard;
