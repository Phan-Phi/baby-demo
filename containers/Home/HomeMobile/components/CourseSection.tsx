import React from "react";
import { useRouter } from "next/router";
import { Box, Stack, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import CourseCard from "../../components/CourseCard";
import { DetailCousePage, ListingCousePage } from "@/interfaces";
import { BtnSeeMoreSmall, Headline, Image, Link } from "@/components";
import { TITLE_HOME_METHOD_EN, TITLE_HOME_METHOD_VI } from "@/constants";

interface CourseSectionProps {
  listingCourse: ListingCousePage;
  detailCourse: DetailCousePage[];
}

const CourseSection = (props: CourseSectionProps) => {
  const { detailCourse, listingCourse } = props;

  const router = useRouter();
  const { messages } = useIntl();

  return (
    <Container>
      {/* <Box id="khoa-hoc">asdasd</Box> */}
      <HeaderWrapper>
        <ImageWrapper>
          <Image src="/fish-7.png" alt="" />
        </ImageWrapper>

        <Box position="absolute" top="40.47%" right="4.27%" textAlign="right">
          <Headline
            title={listingCourse.title}
            variant="m_h1"
            textTransform="uppercase"
            backgroundVariant="gradientOrange"
            className="headline-1"
            marginBottom="1.5rem"
            width="230px"
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
      </HeaderWrapper>

      <Stack spacing={4}>
        <Link href="/khoa-hoc?child_of=0">
          <CourseCard
            step="1"
            src={`${detailCourse[0].image}`}
            title={
              router.locale === "en"
                ? `${TITLE_HOME_METHOD_EN[0]}`
                : `${TITLE_HOME_METHOD_VI[0]}`
            }
          />
        </Link>

        <Link href="/khoa-hoc?child_of=1">
          <CourseCard
            step="2"
            src={`${detailCourse[1].image}`}
            title={
              router.locale === "en"
                ? `${TITLE_HOME_METHOD_EN[1]}`
                : `${TITLE_HOME_METHOD_VI[1]}`
            }
          />
        </Link>

        <Link href="/khoa-hoc?child_of=2">
          <CourseCard
            step="3"
            src={`${detailCourse[2].image}`}
            title={
              router.locale === "en"
                ? `${TITLE_HOME_METHOD_EN[2]}`
                : `${TITLE_HOME_METHOD_VI[2]}`
            }
          />
        </Link>

        <Link href="/khoa-hoc?child_of=3">
          <CourseCard
            step="4"
            src={`${detailCourse[3].image}`}
            title={
              router.locale === "en"
                ? `${TITLE_HOME_METHOD_EN[3]}`
                : `${TITLE_HOME_METHOD_VI[3]}`
            }
          />
        </Link>
      </Stack>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='375' height='1912' viewBox='0 0 375 1912' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_1013_2576' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-230' y='0' width='767' height='1912'%3E%3Cpath d='M-229.031 260.615C-245.251 -131.426 274.329 4.72636 536.146 121.808L461 1796.5C360.205 1773.87 222 1779.5 133 1848.5C43.9995 1917.5 -113.755 2001.22 -56.5005 1675.5C-45.94 1615.42 -37.5005 1294.5 -37.5005 1055.5C-37.5005 630.679 -211.713 679.203 -229.031 260.615Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1013_2576)'%3E%3Cpath d='M-100.001 223C-139.272 -168.386 424.457 42.6404 505.499 135.5L439 1809C85.9995 1695.5 17.4995 2122.5 -112.501 1779.5C-201.823 1543.83 -78.01 1276.4 -82.8406 1037.36C-91.4271 612.467 -58.4648 636.951 -100.001 223Z' fill='white' stroke='%23055CBB' stroke-width='40'/%3E%3C/g%3E%3C/svg%3E%0A")`,
    width: "100%",
    height: "calc(100vw * 1912 / 375)",
    aspectRatio: "375 / 1912",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginTop: "-12%",
    position: "relative",
  };
});

const HeaderWrapper = styled(Box)(() => {
  return {
    position: "relative",
    height: "85vw",
    marginBottom: "2.5rem",
  };
});

const ImageWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "35.73vw",
    height: "36.53vw",
    aspectRatio: "134 / 137",
    zIndex: 2,
    top: "55%",
    left: "8.53%",
  };
});

export default CourseSection;
