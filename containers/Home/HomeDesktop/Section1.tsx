import { useMeasure } from "react-use";
import React, { useMemo } from "react";
import { isTablet } from "react-device-detect";
import { Box, Stack, Typography, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import Line1SVG from "./Line1SVG";
import { Headline } from "@/components";
import { IntroductionBlock } from "@/interfaces";
import { PlacementContainer } from "@/compositions";
import CardWithDashBorder from "../components/CardWithDashBorder";

interface Props {
  data: IntroductionBlock[];
}

const Section1Content = ({ data }: Props) => {
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  const { messages } = useIntl();

  const renderContentCard = useMemo(() => {
    return data.map((el, idx) => {
      return (
        <CardWrapper className={`card-${idx}`} key={idx}>
          <Typography
            variant={isTablet ? "m_body1" : undefined}
            color="secondary"
            textAlign={"justify"}
            display="block"
          >
            {el.value}
          </Typography>
        </CardWrapper>
      );
    });
  }, [data]);

  return (
    <Box position="relative" ref={measureRef}>
      <Line1SVG />

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-2"
      >
        <Stack spacing={3}>{renderContentCard}</Stack>
      </PlacementContainer>

      <HeadlineWrapper>
        <Headline
          title={messages["home.section1.title1"]}
          backgroundVariant={"gradientOrange"}
          variant={isTablet ? "m_h2" : "h2"}
        />
        <Headline
          title={messages["home.section1.title2"]}
          backgroundVariant={"gradientOrange"}
          variant={isTablet ? "m_h2" : "h2"}
        />
        <Headline
          title={messages["home.section1.title3"]}
          backgroundVariant={"gradientOrange"}
          variant={isTablet ? "m_h2" : "h2"}
        />
      </HeadlineWrapper>
    </Box>
  );
};

const CardWrapper = styled(CardWithDashBorder)(() => {
  return {
    width: "clamp(0px, 55.74vh, 602px)",
    ["&.card-0"]: {
      transform: "translateX(-30%)",
    },
    ["&.card-2"]: {
      transform: "translateX(60%)",
    },
    ...(isTablet && {
      width: "clamp(0px, 45.16vh, 336px)",
    }),
  };
});

const HeadlineWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: "clamp(0px, 21.02vh, 227px)",
    width: "clamp(0px, 90vh, 960px)",
    top: "-10%",

    display: "flex",
    flexDirection: "column",

    "& span": {
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "36px",
        lineHeight: "1.4",
      },
    },

    [theme.breakpoints.between("md", "lg")]: {
      rowGap: 10,
    },
    ...(isTablet && {
      rowGap: 20,
    }),
  };
});

export default Section1Content;
