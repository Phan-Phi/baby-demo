import React, { useMemo } from "react";
import { useMeasure } from "react-use";

import { Box, Typography, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import { useRouter } from "next/router";
import Line5SVGOnTablet from "./Line5SVG";
import { PlacementContainer } from "@/compositions";
import { Headline, Image, Stack, SubTitleFaq } from "@/components";
import { FAQ_ITEM, FaqPage } from "@/interfaces/responseSchema/faq";
import BtnSeeMoreSmall from "@/components/Buttton/BtnSeeMoreSmall";

interface Props {
  data: FaqPage;
}

const Section5OnTablet = ({ data }: Props) => {
  const router = useRouter();
  const { messages } = useIntl();

  const { subtitle, title, faqs } = data;

  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  const renderQuestion = useMemo(() => {
    if (faqs === undefined) return;

    const dataQuestion = faqs.filter((el: FAQ_ITEM) => el.value.is_on_homepage === true);
    return dataQuestion.map((el: FAQ_ITEM, idx: number) => {
      return (
        <Box component={"li"} key={idx}>
          {el.value.question}
        </Box>
      );
    });
  }, [faqs]);

  return (
    <Box position="relative" ref={measureRef}>
      <Line5SVGOnTablet />
      <PlacementContainer
        selector=".anchor-27"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <ImageWrapper>
          <Image src="/fish-8.png" alt="" />
        </ImageWrapper>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-28"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Stack position="relative" width="44.35vw" spacing={2.5}>
          <Headline
            title={title}
            backgroundVariant="gradientOrange"
            textTransform="unset"
            variant="m_h2"
          />

          <SubTitleSVG>
            <SubTitleFaq />
          </SubTitleSVG>
          {/* <Headline
            textTransform="unset"
            title={subtitle}
            backgroundVariant="gradientBlue"
            variant="m_title2"
          /> */}
          {/* <Typography variant="m_body1" color="primary.main">
            Làm thế nào trẻ có thể học bơi được khi còn quá nhỏ?
          </Typography> */}

          <WrapperUl component={"ul"} margin="0">
            {renderQuestion}

            <Box component={"li"}>...</Box>
          </WrapperUl>

          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/tro-giup");
            }}
          >
            <BtnSeeMoreSmall title={messages["seeMore"]} />
          </Box>
        </Stack>
      </PlacementContainer>
    </Box>
  );
};

const ImageWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "24.72vw",
    height: "19.92vw",
    aspectRatio: "183.92 / 148.17",

    "@keyframes tablet-fish-move-effect-at-faq": {
      "0%, 100%": {
        transform: "translateX(0)",
      },
      "50%": {
        transform: "translate(30px)",
      },
    },
    animation: `tablet-fish-move-effect-at-faq 2000ms infinite`,
  };
});

const WrapperUl = styled(Box)(({ theme }) => {
  return {
    padding: "0 0 0 1rem",
    "& li": {
      ...theme.typography.m_body1,
      color: theme.palette.brandColor.orange,
      marginBottom: "0.3rem",
    },
  };
});

const SubTitleSVG = styled(Box)(() => {
  return {
    marginTop: "20px !important",

    "& svg": {
      width: "auto",
      height: "clamp(0px,6.5vh,50px)",
    },
  };
});

export default Section5OnTablet;
