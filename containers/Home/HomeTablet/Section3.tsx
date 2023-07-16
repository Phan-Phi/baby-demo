import { Box, Stack, Typography, styled } from "@mui/material";

import { Headline, Image } from "@/components";
import AboutCard from "../components/AboutCard";
import { PlacementContainer } from "@/compositions";

import { useIntl } from "@/hooks";
import { useMeasure } from "react-use";
import Line3SVGOnTablet from "./Line3SVG";
import { FounderBlocks } from "@/interfaces";

interface Props {
  data: FounderBlocks[];
}

const Section3OnTablet = (props: Props) => {
  const { data } = props;

  const { messages } = useIntl();
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box ref={measureRef}>
      <Line3SVGOnTablet />

      <PlacementContainer
        selector=".anchor-14"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Box width="42.47vw">
          <Box position="relative" width="42.47vw" height="33.87vw">
            <Image src="/fish-5.png" alt="fish-5" />
          </Box>
          <Stack alignItems="center">
            <Headline
              variant="m_title1"
              backgroundVariant="gradientBlue"
              title={messages["home.section4.title1"]}
              textTransform="unset"
            />
            <Headline
              variant="m_title1"
              backgroundVariant="gradientOrange"
              title={messages["home.section4.title2"]}
              textTransform="unset"
              marginBottom={1}
            />

            <Typography
              width={"48.52vh"}
              color="secondary"
              textAlign="center"
              variant="m_body1"
            >
              {messages["home.section4.content1"]}
            </Typography>
          </Stack>
        </Box>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-15"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <AboutCard
          src={`${data[0].value}`}
          rightContent={
            <Typography display="block" variant="m_body1" color="secondary.main">
              {messages["home.section4.subContent1"]}
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
          src={`${data[1].value}`}
          leftContent={
            <Typography display="block" variant="m_body1" color="secondary.main">
              {messages["home.section4.subContent2"]}
            </Typography>
          }
        />
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-17"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <ImageWrapper>
          <Box className="founder">
            <Headline
              variant="m_title1"
              title={messages["home.section4.founder"]}
              backgroundVariant="gradientOrange"
            />
          </Box>
          <Image src="/teacher-tablet.png" alt="decor" />
          <Box className="founder-name">
            <Headline
              lineHeight="1.5"
              variant="m_h2"
              title={messages["home.section4.name"]}
              backgroundVariant="gradientOrange"
            />
          </Box>
          <Box className="founder-description">
            <Typography variant="m_body1" color="secondary.main" display="block">
              {messages["home.section4.teacherContent1"]}{" "}
              <Typography variant="m_body1" color="primary.main">
                Infant Aquatics
              </Typography>{" "}
              {messages["home.section4.teacherContent2"]}
            </Typography>
          </Box>
          <Box className="founder-fish">
            <Image src="/fish-6.png" alt="decor" />
          </Box>
        </ImageWrapper>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-18"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <AboutCard
          src={`${data[2].value}`}
          rightContent={
            <Typography display="block" variant="m_body1" color="secondary.main">
              {messages["home.section4.subContent3"]}
            </Typography>
          }
        />
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-19"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <AboutCard src={`${data[3].value}`}>
          <Box position="absolute" top="100%" left={0} width="40.32vw">
            <Box component="ul" textAlign="justify">
              <Box component="li" paddingBottom={2} color="secondary.main">
                <Typography display="block" variant="m_body1" color="secondary.main">
                  {messages["home.section4.subContent4"]}
                </Typography>
              </Box>

              <Box component="li" color="secondary.main">
                <Typography variant="m_body1" color="secondary.main" display="block">
                  {messages["home.section4.subContent5"]}
                </Typography>
              </Box>
            </Box>
          </Box>
        </AboutCard>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-20"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Box position="relative" width="53.76vw" height="69.89vw">
          <Image src="/teacher-decor-tablet.png" alt="" />
        </Box>
      </PlacementContainer>
    </Box>
  );
};

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: "53.76vw",
    height: "67.47vw",
    aspectRatio: "400 / 502",

    ["& img"]: {
      objectFit: "contain",
    },
    ["& .founder"]: {
      position: "absolute",
      top: "-3.98%",
      transform: "translate(-50%,-100%)",
      left: "50%",
    },
    ["& .founder-name"]: {
      position: "absolute",
      background: theme.palette.gradientColor.gradientBlue30,
      padding: "8px 32px",
      border: "1px solid #83D2FF",
      borderRadius: 10,
      top: "98.2%",
      left: "50%",
      // width: "47vw",
      width: "fit-content",
      whiteSpace: "nowrap",
      transform: "translate(-50%, 0)",
      backdropFilter: "blur(5px)",

      ["& span"]: {
        textAlign: "center",
      },
    },
    ["& .founder-description"]: {
      position: "absolute",
      top: "114%",
      left: "50%",
      transform: "translate(-50%, 0)",
      width: "53.76vw",
      textAlign: "center",
    },

    ["& .founder-fish"]: {
      position: "absolute",
      width: "17.34vw",
      height: "20.3vw",
      aspectRatio: "129 / 151",
      top: "23.25%",
      left: "4.75%",

      "@keyframes tablet-fish-jump-effect-at-teacher": {
        "0%, 100%": {
          transform: "translate(0, 0)",
        },
        "50%": {
          transform: "translate(0, -35px) rotateZ(-8deg)",
        },
      },
      animation: `tablet-fish-jump-effect-at-teacher 2000ms infinite`,
    },
  };
});

export default Section3OnTablet;
