import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import { Headline } from "@/components";
import { isTablet } from "react-device-detect";

interface CardWithFishProps {
  Icon: React.ReactNode;
  description: string;
  title: string;
  backgroundVariant?: React.ComponentProps<typeof Headline>["backgroundVariant"];
}

const CardWithFish = (props: CardWithFishProps) => {
  const { Icon, description, title, backgroundVariant } = props;
  return (
    <Container>
      <Box position="relative">{Icon}</Box>

      <ContentWrapper spacing={1}>
        <StyledHeadline title={title} backgroundVariant={backgroundVariant} />
        <StyledDescription>{description}</StyledDescription>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    columnGap: 16,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      // paddingBottom: "4rem",
    },
  };
});

const ContentWrapper = styled(Stack)(({ theme }) => {
  return {
    flexGrow: 1,
    width: "clamp(0px, 55.55vh, 600px)",

    [theme.breakpoints.between("md", "lg")]: {
      width: "clamp(0px, 61.1vh, 660px)",
    },
    [theme.breakpoints.down("md")]: {
      width: "47.04vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
      alignItems: "center",
    },
    ...(isTablet && {
      width: "clamp(0px, 53.7vh, 580px)",
    }),
  };
});

const StyledHeadline = styled(Headline)(({ theme }) => {
  return {
    ...theme.typography.title1,
    [theme.breakpoints.between("md", "lg")]: {
      lineHeight: 1.45,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
    },
    // ...(isTablet && theme.typography.m_title1),

    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "23px",
    // },
  };
});

const StyledDescription = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.body1,
    textAlign: "justify",
    [theme.breakpoints.down("md")]: theme.typography.m_body1,
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.secondary.main,
      maxWidth: "80%",
      textAlign: "center",
    },
    ...(isTablet && theme.typography.m_body1),
  };
});

export default CardWithFish;
