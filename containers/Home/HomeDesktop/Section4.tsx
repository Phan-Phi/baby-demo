import { useMeasure } from "react-use";
import React, { Fragment } from "react";
import { isTablet } from "react-device-detect";
import { Box, Typography } from "@mui/material";

import Line4SVG from "./Line4SVG";
import { Headline, Image } from "@/components";
import { PlacementContainer } from "@/compositions";

import { useIntl, useMedia } from "@/hooks";
import { FounderBlocks } from "@/interfaces";
import AboutCard from "../components/AboutCard";

interface Props {
  data: FounderBlocks[];
}

const Section4Content = ({ data }: Props) => {
  const { isLgDown } = useMedia();
  const { messages } = useIntl();
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box position="relative" ref={measureRef}>
      <Line4SVG />
      <PlacementContainer
        selector=".anchor-12"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Box
          width={"clamp(0px, 64.81vh, 700px)"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            position="relative"
            width={"clamp(0px, 64.81vh, 700px)"}
            height={"clamp(0px, 51.85vh, 560px)"}
          >
            <Image src="/fish-5.png" alt="fish-5" />
          </Box>

          <Headline
            variant={isTablet ? "m_title1" : "title1"}
            backgroundVariant="gradientBlue"
            title={messages["home.section4.title1"]}
            textTransform="unset"
          />

          <Headline
            variant={isTablet ? "m_title1" : "title1"}
            backgroundVariant="gradientOrange"
            title={messages["home.section4.title2"]}
            textTransform="unset"
          />

          <Box paddingTop={isTablet ? 1 : 2}>
            <Typography
              width={"clamp(0px, 53.7vh, 580px)"}
              color="secondary"
              textAlign="center"
              variant={isTablet ? "m_body1" : undefined}
              display="block"
            >
              {messages["home.section4.content1"]}
            </Typography>
          </Box>
        </Box>
      </PlacementContainer>

      <PlacementContainer
        selector=".anchor-13"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <AboutCard
          src={`${data[0].value}`}
          rightContent={
            <Typography
              variant={isTablet ? "m_body1" : "title2"}
              color="secondary.main"
              display="block"
              textAlign="justify"
            >
              {messages["home.section4.subContent1"]}
            </Typography>
          }
        />
      </PlacementContainer>

      <PlacementContainer
        selector=".anchor-14"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <AboutCard
          src={`${data[1].value}`}
          leftContent={
            <Typography
              variant={isTablet ? "m_body1" : "title2"}
              color="secondary.main"
              display="block"
              textAlign="right"
              paddingTop={3}
            >
              {messages["home.section4.subContent2"]}
            </Typography>
          }
        />
      </PlacementContainer>

      <PlacementContainer
        selector=".anchor-15"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <AboutCard
          src={`${data[2].value}`}
          rightContent={
            <Typography
              variant={isTablet ? "m_body1" : "title2"}
              color="secondary.main"
              display="block"
              textAlign="justify"
            >
              {messages["home.section4.subContent3"]}
            </Typography>
          }
        />
      </PlacementContainer>

      <PlacementContainer
        selector=".anchor-16"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <AboutCard
          src={`${data[3].value}`}
          rightContent={
            <Fragment>
              <Box component="ul">
                <Box component="li" paddingBottom={2} color="primary.main">
                  <Typography
                    variant={isTablet ? "m_body1" : "title2"}
                    color="secondary.main"
                    display="block"
                    textAlign="justify"
                  >
                    {messages["home.section4.subContent4"]}
                  </Typography>
                </Box>

                <Box component="li" color="primary.main">
                  <Typography
                    variant={isTablet ? "m_body1" : "title2"}
                    color="secondary.main"
                    display="block"
                    textAlign="justify"
                  >
                    {messages["home.section4.subContent5"]}
                  </Typography>
                </Box>
              </Box>
            </Fragment>
          }
        />
      </PlacementContainer>
    </Box>
  );
};

export default Section4Content;
