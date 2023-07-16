import React from "react";
import { useMeasure } from "react-use";
import { Box, styled } from "@mui/material";

import Line2SVGOnTablet from "./Line2SVG";
import CardWithFish from "../components/CardWithFish";

import { PlacementContainer } from "@/compositions";
import { BlueFishSVG, Headline, Image } from "@/components";
import { ValueBlock } from "@/interfaces";
import { useIntl } from "@/hooks";
import { useRouter } from "next/router";

interface Props {
  data: ValueBlock[];
}

const Section2OnTablet = ({ data }: Props) => {
  const { messages } = useIntl();
  const router = useRouter();
  const { locale } = router;
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box position="relative" ref={measureRef}>
      <Line2SVGOnTablet />

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-10"
      >
        <HeadlineWrapper>
          <ImageWrapper>
            <Image src="/fish-3.png" alt="decor" />
          </ImageWrapper>
          <Box className="headline-wrapper">
            <Headline
              title={
                locale === "vi"
                  ? messages["home.section3.title5"]
                  : messages["home.section3.title1"]
              }
              variant="m_title1"
              backgroundVariant="gradientOrange"
              textTransform="uppercase"
              paddingBottom={0.5}
            />
            <Headline
              title={
                locale === "vi"
                  ? messages["home.section3.title4"]
                  : messages["home.section3.title2"]
              }
              variant="m_title1"
              backgroundVariant="gradientOrange"
              textTransform="uppercase"
            />
          </Box>
        </HeadlineWrapper>
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-11"
      >
        {/* height={"5.38vw"} */}
        <CardWithFish
          Icon={
            <Box position="relative" width={"8.33vw"} height="8.33vw">
              <Image src={data[0].value.image} alt="" />
              {/* <BlueFishSVG /> */}
            </Box>
          }
          description={data[0].value.content}
          title={data[0].value.title}
        />
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-12"
      >
        <CardWithFish
          Icon={
            <Box position="relative" width={"8.33vw"} height="8.33vw">
              <Image src={data[1].value.image} alt="" />
              {/* <BlueFishSVG /> */}
            </Box>
          }
          description={data[1].value.content}
          title={data[1].value.title}
        />
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-13"
      >
        <CardWithFish
          Icon={
            <Box position="relative" width={"8.33vw"} height="8.33vw">
              <Image src={data[2].value.image} alt="" />
            </Box>
          }
          description={data[2].value.content}
          title={data[2].value.title}
        />
      </PlacementContainer>
    </Box>
  );
};

const ImageWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "19.69vw",
    height: "14.17vw",
    // height: "clamp(0px, 14.17vw, 105.4px)",
    aspectRatio: "146.5 / 105.4",
    transform: "rotate(35deg)",
  };
});

const HeadlineWrapper = styled(Box)(() => {
  return {
    position: "relative",
    ["& .headline-wrapper"]: {
      position: "absolute",
      width: "53.76vw",
      left: "100%",
      top: "0%",
      marginLeft: 18,
    },
  };
});

export default Section2OnTablet;
