import { get } from "lodash";
import { Fragment } from "react";
import { Box, Container, styled } from "@mui/material";

import { useRouter } from "next/router";
import Method from "../components/Method";
import HomeValue from "./components/HomeValue";
import HomeFounder from "./components/HomeFounder";
import IntroductionMobile from "./components/IntroductionMobile";
import { BackgroundPattern, Spacing, Headline } from "@/components";

import { useIntl } from "@/hooks";
import { HomePageProps } from "../Home";
import { HeaderOnMobile } from "@/compositions";
import FaqSection from "./components/FaqSection";
import Testimonial from "../components/Testimonial";
import CourseSection from "./components/CourseSection";
import ModalVideo from "@/compositions/Modal/ModalVideo";

export default function HomeMobile(props: HomePageProps) {
  const { initData } = props;
  const { messages } = useIntl();
  const router = useRouter();
  const { locale } = router;
  const data = get(initData, "[0].items[0]");
  const dataListingCourse = initData[1].items[0];
  const dataDetailCourse = initData[2].items;

  if (data == undefined) return null;

  const {
    founder_blocks,
    value_blocks,
    review_blocks,
    compare_method_blocks,
    youtube_link,
  } = data;

  return (
    <Fragment>
      <HeaderWrapper>
        <HeaderOnMobile />
      </HeaderWrapper>

      <Container>
        <Spacing spacing={25} />

        {/* <IntroductionMobile data={data} /> */}

        <Spacing spacing={6} />

        {/* <Box textAlign="center" paddingBottom={4}>
          <Headline
            title={
              locale === "en"
                ? `${messages["home.method.title1"]}`
                : `${messages["home.method.title1"]} ${messages["home.method.title4"]}`
            }
            variant="m_title2"
            backgroundVariant="gradientOrange"
            textTransform="uppercase"
            fontSize={"18px"}
          />
          <Headline
            title={messages["home.method.title2"]}
            variant="m_title2"
            backgroundVariant="gradientOrange"
            textTransform="uppercase"
            fontSize={"18px"}
          />

          <Headline
            title={messages["home.method.title3"]}
            variant="m_title2"
            backgroundVariant="gradientOrange"
            textTransform="uppercase"
            fontSize={"18px"}
          />
        </Box> */}

        {/* <Method data={compare_method_blocks} /> */}

        {/* <HomeValue data={value_blocks} youtubeLink={youtube_link} /> */}

        <ModalVideo linkVideo={youtube_link} />

        <Spacing spacing={12.5} />
        {/* <Testimonial data={review_blocks} /> */}

        <Box id="gioi-thieu"></Box>
        <Spacing spacing={25} />

        {/* <HomeFounder data={founder_blocks} /> */}
      </Container>
      <Box id="khoa-hoc" marginTop="-20px"></Box>
      {/* <CourseSection detailCourse={dataDetailCourse} listingCourse={dataListingCourse} /> */}

      {/* <FaqSection /> */}
      <BackgroundWrapper />
    </Fragment>
  );
}

const BackgroundWrapper = styled(BackgroundPattern)(({ theme }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: theme.palette.secondaryColor.background,
  };
});

const HeaderWrapper = styled(Box)(() => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 99,
    width: "100%",
  };
});
