import React from "react";
import { useMeasure } from "react-use";
import { isTablet } from "react-device-detect";
import { Box, Typography, styled } from "@mui/material";

import Line2SVG from "./Line2SVG";
import { MethodBlock } from "@/interfaces";
import { Image, Headline } from "@/components";
import { PlacementContainer } from "@/compositions";
import CardWithFish from "../components/CardWithFish";
import { useRouter } from "next/router";

interface Props {
  methodTitle: string;
  methodSubtitle: string;
  methodBlocks: MethodBlock[];
}

interface PropsContentCard {
  title: string;
  subTitle: string;
}

const Section2Content = ({ methodTitle, methodSubtitle, methodBlocks }: Props) => {
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box position="relative" ref={measureRef}>
      <Line2SVG />

      <PlacementContainer
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        selector=".anchor-3"
      >
        <Box
          position="relative"
          width={"clamp(0px, 39.63vh, 428px)"}
          height={"clamp(0px, 25.19vh, 272px)"}
        >
          <Image src="/fish-2.png" alt="fish-2s" />
        </Box>
      </PlacementContainer>

      <PlacementContainer
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        selector=".anchor-7"
      >
        <ContentCard title={methodTitle} subTitle={methodSubtitle} />
      </PlacementContainer>

      <PlacementContainer
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        selector=".anchor-4"
      >
        <CardWithFish
          Icon={
            <Box
              position="relative"
              height={"clamp(0px, 12.04vh, 130px)"}
              width={"clamp(0px, 12.04vh, 130px)"}
            >
              <Image src={methodBlocks[0].value.image} alt="" />
            </Box>
          }
          description={methodBlocks[0].value.content}
          title={methodBlocks[0].value.title}
          backgroundVariant="gradientOrange"
        />
      </PlacementContainer>

      <PlacementContainer
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        selector=".anchor-5"
      >
        <CardWithFish
          Icon={
            <Box
              position="relative"
              height={"clamp(0px, 12.04vh, 130px)"}
              width={"clamp(0px, 12.04vh, 130px)"}
            >
              <Image src={methodBlocks[1].value.image} alt="" />
            </Box>
          }
          description={methodBlocks[1].value.content}
          title={methodBlocks[1].value.title}
          backgroundVariant="gradientOrange"
        />
      </PlacementContainer>

      <PlacementContainer
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        selector=".anchor-6"
      >
        <CardWithFish
          Icon={
            <Box
              position="relative"
              height={"clamp(0px, 12.04vh, 130px)"}
              width={"clamp(0px, 12.04vh, 130px)"}
            >
              <Image src={methodBlocks[2].value.image} alt="" />
            </Box>
          }
          description={methodBlocks[2].value.content}
          title={methodBlocks[2].value.title}
          backgroundVariant="gradientOrange"
        />
      </PlacementContainer>
    </Box>
  );
};

const ContentCard = ({ title, subTitle }: PropsContentCard) => {
  const { locale } = useRouter();
  return (
    <ContentCardWrapper isLocale={locale === "en" ? true : false}>
      <Box className="card-content">
        {locale === "en" ? (
          <>
            <Headline
              variant={isTablet ? "m_title1" : "h2"}
              title={"THE MEANING OF"}
              backgroundVariant={"gradientOrange"}
              textAlign="center"
              lineHeight={1}
            />
            <Headline
              className="HeadlineEn2"
              variant={isTablet ? "m_title1" : "h2"}
              title={"PROPER SWIMMING"}
              backgroundVariant={"gradientOrange"}
              marginBottom={1}
              textAlign="center"
              lineHeight={1}
            />
          </>
        ) : (
          <Headline
            variant={isTablet ? "m_title1" : "h2"}
            title={title}
            backgroundVariant={"gradientOrange"}
            marginBottom={isTablet ? 1 : undefined}
            textAlign={isTablet ? "center" : undefined}
          />
        )}

        <Typography color="secondary" variant={isTablet ? "m_body1" : undefined}>
          {subTitle}
        </Typography>
      </Box>
    </ContentCardWrapper>
  );
};
interface ContentCardWrapperProps {
  isLocale: boolean;
}

const ContentCardWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLocale",
})<ContentCardWrapperProps>(({ theme, isLocale }) => {
  return {
    width: "clamp(0px, 76.39vh, 825px)",
    height: "clamp(0px, 31.57vh, 341px)",
    aspectRatio: "825 / 341",
    position: "relative",
    backgroundImage: `url('data:image/svg+xml,<svg viewBox="0 0 825 341" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 52C2 24.3858 24.3858 2 52 2L773.5 2C801.114 2 823.5 24.3858 823.5 52V204C823.5 231.614 801.117 254.015 773.505 254.353C711.922 255.107 642.26 256.807 595.038 256.807C574.845 256.807 489.086 316.58 446.887 337.148C434.693 343.091 427.838 336.463 434.414 324.598C448.635 298.941 475.925 257.415 461.192 256.807C285.448 254.2 255.831 254.014 52.1183 254.001C24.5041 253.999 2 231.614 2 204V52Z" fill="%23FFF" stroke="%231C98DD" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="15 15" /></svg>')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    ["& .card-content"]: {
      position: "absolute",
      top: isLocale ? "7%" : "10.23%",
      bottom: "35.08%",
      left: "7.8%",
      right: "7.8%",

      "& .HeadlineEn2": {
        [theme.breakpoints.up("lg")]: {
          marginBottom: "1rem",
        },
      },
    },

    [theme.breakpoints.between("md", "lg")]: {
      width: "clamp(0px, 52.39vh, 762px)",
      height: " clamp(0px, 26.60vh, 268px)",
      backgroundImage: `url('data:image/svg+xml,<svg viewBox="0 0 358 183" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11C1 5.47715 5.47715 1 11 1L347 1C352.523 1 357 5.47715 357 11V125.104C357 130.627 352.521 135.101 346.999 135.155C320.402 135.417 295.388 136.598 272 136.598C262.534 136.598 219.826 173.814 203.722 181.587C200.978 182.912 198.943 181.225 200 178.367C204.39 166.502 221.385 136.972 213.997 136.598C134.579 135.152 110.885 135.106 11.0021 135.104C5.47921 135.104 1 130.627 1 125.104V11Z" fill="%23FFF" stroke="%231C98DD" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="10 10"/></svg>')`,
    },
  };
});

export default Section2Content;
