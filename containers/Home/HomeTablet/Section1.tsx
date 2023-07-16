import React from "react";
import { useMeasure } from "react-use";
import { Box, Typography, styled } from "@mui/material";

import Line1SVGOnTablet from "./Line1SVG";
import { PlacementContainer } from "@/compositions";
import CardWithFish from "../components/CardWithFish";
import { Headline, Image, RedFishSVG } from "@/components";
import { IntroductionBlock, MethodBlock } from "@/interfaces";
import CardWithDashBorder from "../components/CardWithDashBorder";
import { useRouter } from "next/router";

interface Props {
  IntroductionBlocks: IntroductionBlock[];
  MethodBlocks: MethodBlock[];
  MethodSubtitle: string;
  MethodTitle: string;
}
interface StyledContentCard2Props {
  isLocale: boolean;
}

const Section1OnTablet = ({
  MethodBlocks,
  MethodSubtitle,
  IntroductionBlocks,
  MethodTitle,
}: Props) => {
  const { locale } = useRouter();

  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box position="relative" ref={measureRef}>
      <Line1SVGOnTablet />
      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-2"
      >
        <StyledContentCard>
          <Typography
            variant="m_body1"
            color="secondary.main"
            component="p"
            textAlign="justify"
          >
            {IntroductionBlocks[0].value}
          </Typography>
        </StyledContentCard>
      </PlacementContainer>
      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-3"
      >
        <StyledContentCard>
          <Typography
            variant="m_body1"
            color="secondary.main"
            component="p"
            textAlign="justify"
          >
            {IntroductionBlocks[1].value}
          </Typography>
        </StyledContentCard>
      </PlacementContainer>
      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-4"
      >
        <StyledContentCard>
          <Typography
            variant="m_body1"
            color="secondary.main"
            component="p"
            textAlign="justify"
          >
            {IntroductionBlocks[2].value}
          </Typography>
        </StyledContentCard>
      </PlacementContainer>
      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-5"
      >
        <StyledContentCard2 isLocale={locale === "en" ? true : false}>
          <Box className="card-content">
            {locale === "en" ? (
              <>
                <Headline
                  variant="m_title1"
                  title={"THE MEANING OF"}
                  backgroundVariant="gradientOrange"
                  textAlign="center"
                  textTransform="uppercase"
                  lineHeight={1}
                />
                <Headline
                  variant="m_title1"
                  title={"PROPER SWIMMING"}
                  backgroundVariant="gradientOrange"
                  textAlign="center"
                  textTransform="uppercase"
                  lineHeight={1}
                  marginBottom={1}
                />
              </>
            ) : (
              <Headline
                variant="m_title1"
                title={MethodTitle}
                backgroundVariant="gradientOrange"
                textAlign="center"
                textTransform="uppercase"
              />
            )}

            <Typography
              variant="m_body1"
              color="secondary.main"
              component="p"
              textAlign="justify"
            >
              {MethodSubtitle}
            </Typography>
          </Box>
        </StyledContentCard2>
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-6"
      >
        <Box position="relative" width="21.91vw" height="13.84vw">
          <Image src="/fish-2.png" alt="fish-2s" />
        </Box>
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-7"
      >
        <CardWithFish
          Icon={
            <Box position="relative" width={"8.33vw"} height="8.33vw">
              <Image src={MethodBlocks[0].value.image} alt="" />
              {/* <RedFishSVG /> */}
            </Box>
          }
          description={MethodBlocks[0].value.content}
          title={MethodBlocks[0].value.title}
          backgroundVariant="gradientOrange"
        />
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-8"
      >
        <CardWithFish
          Icon={
            <Box position="relative" width={"8.33vw"} height="8.33vw">
              <Image src={MethodBlocks[1].value.image} alt="" />
            </Box>
          }
          description={MethodBlocks[1].value.content}
          title={MethodBlocks[1].value.title}
          backgroundVariant="gradientOrange"
        />
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-9"
      >
        <CardWithFish
          Icon={
            <Box position="relative" width={"8.33vw"} height="8.33vw">
              <Image src={MethodBlocks[2].value.image} alt="" />
              {/* <RedFishSVG /> */}
            </Box>
          }
          description={MethodBlocks[2].value.content}
          title={MethodBlocks[2].value.title}
          backgroundVariant="gradientOrange"
        />
      </PlacementContainer>
    </Box>
  );
};

const StyledContentCard = styled(CardWithDashBorder)(() => {
  return {
    width: 336,
    maxWidth: 336,
  };
});

const StyledContentCard2 = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLocale",
})<StyledContentCard2Props>(({ isLocale }) => {
  return {
    width: "52.12vw",
    height: "26.6vw",
    aspectRatio: "358 / 183",
    position: "relative",
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 358 183' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 11C1 5.47715 5.47715 1 11 1L347 1C352.523 1 357 5.47715 357 11V125.104C357 130.627 352.521 135.101 346.999 135.155C320.402 135.417 295.388 136.598 272 136.598C262.534 136.598 219.826 173.814 203.722 181.587C200.978 182.912 198.943 181.225 200 178.367C204.39 166.502 221.385 136.972 213.997 136.598C134.579 135.152 110.885 135.106 11.0021 135.104C5.47921 135.104 1 130.627 1 125.104V11Z' fill='white' stroke='%231C98DD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/%3E%3C/svg%3E%0A")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    ["& .card-content"]: {
      position: "absolute",
      top: isLocale ? "12%" : "13.19%",
      bottom: isLocale ? "29%" : "33%",
      left: "6.75%",
      right: "6.75%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      rowGap: isLocale ? 0 : 11,
    },
  };
});

export default Section1OnTablet;
