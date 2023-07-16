import React from "react";
import { Box } from "@mui/material";
import { useMeasure } from "react-use";

import Line3SVG from "./Line3SVG";
import { Image, Headline } from "@/components";

import { ValueBlock } from "@/interfaces";
import { PlacementContainer } from "@/compositions";
import CardWithFish from "../components/CardWithFish";
import { useIntl } from "@/hooks";

interface Props {
  data: ValueBlock[];
}

const Section3Content = ({ data }: Props) => {
  const { messages } = useIntl();
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box position="relative" ref={measureRef}>
      <Line3SVG />
      <PlacementContainer
        selector=".anchor-8"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Box
          position="relative"
          width={"clamp(0px, 29.72vh, 321px)"}
          height={"clamp(0px, 21.39vh, 231px)"}
          sx={{
            transform: "rotate(12.46deg)",
          }}
        >
          <Image src="/fish-3.png" alt="fish-3" />
        </Box>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-9"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <CardWithFish
          Icon={
            <Box
              position="relative"
              height={"clamp(0px, 12.04vh, 130px)"}
              width={"clamp(0px, 12.04vh, 130px)"}
            >
              <Image src={data[0].value.image} alt="" />
            </Box>
          }
          description={data[0].value.content}
          title={data[0].value.title}
        />
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-10"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <CardWithFish
          Icon={
            <Box
              position="relative"
              height={"clamp(0px, 12.04vh, 130px)"}
              width={"clamp(0px, 12.04vh, 130px)"}
            >
              <Image src={data[1].value.image} alt="" />
            </Box>
          }
          description={data[1].value.content}
          title={data[1].value.title}
        />
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-11"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <CardWithFish
          Icon={
            <Box
              position="relative"
              height={"clamp(0px, 12.04vh, 130px)"}
              width={"clamp(0px, 12.04vh, 130px)"}
            >
              <Image src={data[2].value.image} alt="" />
            </Box>
          }
          description={data[2].value.content}
          title={data[2].value.title}
        />
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-11a"
      >
        <Headline
          title={messages["home.section3.title1"]}
          backgroundVariant="gradientOrange"
          variant={"h2"}
        />
      </PlacementContainer>
      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-11b"
      >
        <Headline
          title={messages["home.section3.title2"]}
          backgroundVariant="gradientOrange"
          variant={"h2"}
        />
      </PlacementContainer>
    </Box>
  );
};

export default Section3Content;
