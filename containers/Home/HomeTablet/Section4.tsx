import { useMeasure } from "react-use";
import { useRouter } from "next/router";
import { Box, styled } from "@mui/material";

import CourseCard from "../components/CourseCard";
import { PlacementContainer } from "@/compositions";
import { BtnSeeMoreSmall, Headline, Image, Link } from "@/components";

import { useIntl } from "@/hooks";
import Line4SVGOnTablet from "./Line4SVG";
import { DetailCousePage, ListingCousePage } from "@/interfaces";
import { TITLE_HOME_METHOD_EN, TITLE_HOME_METHOD_VI } from "@/constants";

interface Props {
  listingCourse: ListingCousePage;
  detailCourse: DetailCousePage[];
}

const Section4OnTablet = (props: Props) => {
  const { detailCourse, listingCourse } = props;

  const router = useRouter();
  const { locale } = router;
  const { messages } = useIntl();

  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();

  return (
    <Box position="relative" ref={measureRef}>
      <Line4SVGOnTablet />

      <PlacementContainer
        selector=".anchor-21"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <ImageWrapper>
          <Image src="/fish-7.png" alt="" />
        </ImageWrapper>
      </PlacementContainer>

      <PlacementContainer
        selector=".anchor-22"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Link href="/khoa-hoc?child_of=0">
          <CourseCard
            step="1"
            src={`${detailCourse[0].image}`}
            title={
              locale === "en"
                ? `${TITLE_HOME_METHOD_EN[0]}`
                : `${TITLE_HOME_METHOD_VI[0]}`
            }
          />
        </Link>
      </PlacementContainer>

      <PlacementContainer
        selector=".anchor-23"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Link href="/khoa-hoc?child_of=1">
          <CourseCard
            step="2"
            src={`${detailCourse[1].image}`}
            title={
              locale === "en"
                ? `${TITLE_HOME_METHOD_EN[1]}`
                : `${TITLE_HOME_METHOD_VI[1]}`
            }
          />
        </Link>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-24"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Link href="/khoa-hoc?child_of=2">
          <CourseCard
            step="3"
            src={`${detailCourse[2].image}`}
            title={
              locale === "en"
                ? `${TITLE_HOME_METHOD_EN[2]}`
                : `${TITLE_HOME_METHOD_VI[2]}`
            }
          />
        </Link>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-25"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Link href="/khoa-hoc?child_of=3">
          <CourseCard
            step="4"
            src={`${detailCourse[3].image}`}
            title={
              locale === "en"
                ? `${TITLE_HOME_METHOD_EN[3]}`
                : `${TITLE_HOME_METHOD_VI[3]}`
            }
          />
        </Link>
      </PlacementContainer>
      <PlacementContainer
        selector=".anchor-26"
        containerWidth={containerWidth}
        containerHeight={containerHeight}
      >
        <Box textAlign="right" width="47.28vw">
          <Headline
            title={listingCourse.title}
            variant="m_h2"
            textTransform="uppercase"
            backgroundVariant="gradientOrange"
            marginBottom="1.5rem"
          />
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/khoa-hoc");
            }}
          >
            <BtnSeeMoreSmall title={messages["seeMore"]} />
          </Box>
        </Box>
      </PlacementContainer>
    </Box>
  );
};

const ImageWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "18.01vw",
    height: "18.41vw",
    aspectRatio: "134 / 137",
    zIndex: 2,
  };
});

export default Section4OnTablet;
