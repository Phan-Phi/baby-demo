import { useMeasure } from "react-use";
import { useRouter } from "next/router";
import { isTablet } from "react-device-detect";
import { Box, Stack, styled } from "@mui/material";

import Line5SVG from "./Line5SVG";
import {
  Link,
  Image,
  Headline,
  HomeCourseIcon1,
  HomeCourseIcon2,
  HomeCourseIcon3,
  HomeCourseIcon4,
  LifebuoySVGBlue,
} from "@/components";
import { PlacementContainer } from "@/compositions";
import CourseCard from "../components/CourseCard";

import { useIntl } from "@/hooks";
import { DetailCousePage, ListingCousePage } from "@/interfaces";
import BtnSeeMoreClone from "@/components/Buttton/BtnSeeMoreClone";

interface Props {
  listingCourse: ListingCousePage;
  detailCourse: DetailCousePage[];
}

const Section5Content = ({ listingCourse, detailCourse }: Props) => {
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();
  const { messages } = useIntl();
  const router = useRouter();

  return (
    <Box position="relative" ref={measureRef}>
      <Line5SVG />
      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-17"
      >
        <Box
          position="relative"
          width={"clamp(0px, 39.72vh, 429px)"}
          height={"clamp(0px, 40.37vh, 436px)"}
        >
          <Image src={listingCourse.image} alt="fish-7" />
        </Box>
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-18"
      >
        <Stack alignItems="center">
          <Box width={"clamp(0px, 82.31vh, 889px)"} textAlign="center">
            <Headline
              className="courseTitle"
              variant={isTablet ? "m_h1" : "h1"}
              title={listingCourse?.title}
              backgroundVariant={"gradientOrange"}
              lineHeight={1.45}
              textAlign="left"
            />
          </Box>
        </Stack>
      </PlacementContainer>

      <Link href="/khoa-hoc?child_of=0">
        <PlacementContainer
          containerWidth={containerWidth}
          containerHeight={containerHeight}
          selector=".anchor-19"
        >
          <CourseCard
            step="1"
            src={`${detailCourse[0].image}`}
            titleSVG={<HomeCourseIcon1 />}
            title={`${detailCourse[0].title}`}
          />
        </PlacementContainer>
      </Link>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-20"
      >
        <Link href="/khoa-hoc?child_of=1">
          <CourseCard
            step="2"
            src={`${detailCourse[1].image}`}
            titleSVG={<HomeCourseIcon2 />}
            title={`${detailCourse[0].title}`}
          />
        </Link>
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-21"
      >
        <Link href="/khoa-hoc?child_of=2">
          <CourseCard
            step="3"
            src={`${detailCourse[2].image}`}
            titleSVG={<HomeCourseIcon3 />}
            title={`${detailCourse[0].title}`}
          />
        </Link>
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-22"
      >
        <Link href="/khoa-hoc?child_of=3">
          <CourseCard
            step="4"
            src={`${detailCourse[3].image}`}
            titleSVG={<HomeCourseIcon4 />}
            title={`${detailCourse[0].title}`}
          />
        </Link>
      </PlacementContainer>

      <PlacementContainer
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        selector=".anchor-23"
      >
        <Box
          onClick={() => {
            router.push("/khoa-hoc");
          }}
        >
          <BtnSeeMoreClone title={messages["seeMore"]} />
        </Box>
      </PlacementContainer>
    </Box>
  );
};

const LifebuoySVGBlue2 = styled(LifebuoySVGBlue)(({ theme }) => {
  return {
    width: 40,
    height: 40,
  };
});

export default Section5Content;
