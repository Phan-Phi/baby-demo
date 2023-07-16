import React from "react";
import { useRouter } from "next/router";
import { Box, BoxProps, Typography, styled } from "@mui/material";

import { Headline, Image } from "@/components";
import { COLOR_TEXT_GRADIENT_ORANGES } from "@/constants";
import { isTablet } from "react-device-detect";
import { useIntl } from "@/hooks";

const Teacher = () => {
  const router = useRouter();
  const { locale } = router;
  const { messages } = useIntl();

  return (
    <Box position="relative">
      <Box
        position="relative"
        width={"clamp(0px, 63.89vh, 690px)"}
        height={"clamp(0px, 94.44vh, 1020px)"}
      >
        <Image src="/teacher.png" alt="teacher" />
      </Box>
      <FishWrapper
        position="absolute"
        top="35%"
        left="-5%"
        width={"clamp(0px, 24.07vh, 260px)"}
        height={"clamp(0px, 27.78vh, 300px)"}
      >
        <Image src="/fish-6.png" alt="decor" />
      </FishWrapper>
      <WrapperFounder
        isEn={locale === "en" ? true : false}
        // left={locale === "en" ? "-8%" : "-30%"}
      >
        <Headline
          className="founder"
          variant={"h2"}
          backgroundVariant="gradientOrange"
          title={messages["home.section4.founder"]}
          textTransform="uppercase"
        />
      </WrapperFounder>

      <Box position="absolute" top="25%" left="87.5%">
        <Name variant="h1">{messages["home.section4.name"]}</Name>
      </Box>

      <WrapperContent>
        <Typography
          variant={isTablet ? "m_body1" : "title2"}
          color="secondary"
          textAlign="justify"
          display="block"
        >
          {messages["home.section4.teacherContent1"]}{" "}
          <span style={{ color: "#FF6E4B" }}>Infant Aquatics</span>{" "}
          {messages["home.section4.teacherContent2"]}
        </Typography>
      </WrapperContent>
    </Box>
  );
};

export default Teacher;

interface WrapperFounderProps extends BoxProps {
  isEn: boolean;
}

const WrapperFounder = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLocale",
})<WrapperFounderProps>(({ theme, isEn }) => {
  return {
    position: "absolute",
    top: "20%",
    left: isEn ? "-3%" : "-27%",

    "& .founder": {
      [theme.breakpoints.between("md", "lg")]: {
        paddingLeft: "3rem",
        fontSize: "36px",
        lineHeight: "1.5",
      },
    },

    [theme.breakpoints.between("md", "lg")]: {
      left: isEn ? "-3%" : "-23%",
    },
  };
});

const WrapperContent = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "50%",
    left: "87.5%",
    width: "clamp(0px, 87vh, 900px)",

    [theme.breakpoints.between("md", "lg")]: {
      width: "clamp(0px, 63.33vh, 900px)",
    },
  };
});

const Name = styled(Typography)(({ theme }) => {
  return {
    ...COLOR_TEXT_GRADIENT_ORANGES,
    whiteSpace: "nowrap",
    lineHeight: "8.5rem",
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "55px",
      lineHeight: "1.5",
    },
  };
});

const FishWrapper = styled(Box)(() => {
  return {
    "@keyframes desktop-fish-jump-effect-at-teacher": {
      "0%, 100%": {
        transform: "translate(0, 0)",
      },
      "50%": {
        transform: "translate(0, -25px) rotateZ(-8deg)",
      },
    },
    animation: `desktop-fish-jump-effect-at-teacher 2000ms infinite`,
  };
});
