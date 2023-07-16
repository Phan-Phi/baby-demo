import { get } from "lodash";
import { useRouter } from "next/router";
import { Box, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import Section1OnTablet from "./Section1";
import Section2OnTablet from "./Section2";
import Method from "../components/Method";
import SubBackgroundSVG from "./SubBackgroundSVG";
import { BackgroundPattern, Headline, Image } from "@/components";

import { HomePageProps } from "../Home";
import Video from "../components/Video";
import Section3OnTablet from "./Section3";
import Section4OnTablet from "./Section4";
import Section5OnTablet from "./Section5";
import Footer from "@/compositions/Layout/Footer";
import Testimonial from "../components/Testimonial";
import { VerticalHeaderAtHome } from "@/compositions";
import ModalVideo from "@/compositions/Modal/ModalVideo";

const HomeTablet = (props: HomePageProps) => {
  const { initData } = props;
  const { messages } = useIntl();
  const router = useRouter();
  const { locale } = router;

  const data = get(initData, "[0].items[0]");
  const dataListingCourse = initData[1].items[0];
  const dataDetailCourse = initData[2].items;
  const dataFAQ = initData[3].items[0];

  if (data == undefined) return null;

  const {
    introduction_blocks,
    method_subtitle,
    method_title,
    method_blocks,
    compare_method_blocks,
    value_blocks,
    founder_blocks,
    review_blocks,
    youtube_link,
  } = data;

  return (
    <Container>
      <BackgroundWrapper />

      <HeaderWrapper>
        <LogoWrapper>
          <Image src="/fish-5.png" alt="logo" />
        </LogoWrapper>
        <Headline
          variant="m_h1"
          title={messages["homeSmartphone.section1.title1"]}
          backgroundVariant="gradientOrange"
        />
        <Headline
          variant="m_title1"
          title={`${messages["homeSmartphone.section1.title2"]} ${messages["homeSmartphone.section1.title3"]}`}
          backgroundVariant="gradientOrange"
          textAlign="center"
        />
      </HeaderWrapper>

      <Line1SVGWrapper>
        <Section1OnTablet
          IntroductionBlocks={introduction_blocks}
          MethodBlocks={method_blocks}
          MethodSubtitle={method_subtitle}
          MethodTitle={method_title}
        />
      </Line1SVGWrapper>

      <Box position="relative" width="65.05vw" left="23.12%">
        <Box display="flex" flexDirection="column" alignItems="center" paddingBottom={5}>
          <Headline
            variant="m_title2"
            textAlign="center"
            title={
              locale === "en"
                ? `${messages["home.method.title1"]}`
                : `${messages["home.method.title1"]} ${messages["home.method.title4"]}`
            }
            backgroundVariant="gradientOrange"
            whiteSpace="nowrap"
          />
          <Headline
            variant="m_title2"
            textAlign="center"
            title={`${messages["home.method.title2"]} ${messages["home.method.title3"]}`}
            backgroundVariant="gradientOrange"
            whiteSpace="nowrap"
          />
        </Box>

        <Method data={compare_method_blocks} />
      </Box>

      <Line2SVGWrapper>
        <Section2OnTablet data={value_blocks} />
      </Line2SVGWrapper>

      <VideoWrapper>
        <ModalVideo linkVideo={youtube_link} />

        {/* <Video data={youtube_link} /> */}
      </VideoWrapper>

      <TestimonialWrapper>
        <Testimonial data={review_blocks} />
      </TestimonialWrapper>

      <StopPointSection3 id="gioi-thieu" />
      <Line3SVGWrapper>
        <Section3OnTablet data={founder_blocks} />
      </Line3SVGWrapper>

      <SubBackgroundSVGWrapper id="khoa-hoc">
        <SubBackgroundSVG />
        <Line4SVGWrapper>
          <Section4OnTablet
            detailCourse={dataDetailCourse}
            listingCourse={dataListingCourse}
          />
        </Line4SVGWrapper>
      </SubBackgroundSVGWrapper>

      <Line5SVGWrapper id="tro-giup">
        <Section5OnTablet data={dataFAQ} />
      </Line5SVGWrapper>

      <Box marginTop={-12}>
        <Footer />
      </Box>

      <HeaderVerticalWrapper>
        <VerticalHeaderAtHome />
      </HeaderVerticalWrapper>
    </Container>
  );
};

const HeaderVerticalWrapper = styled(Box)(() => {
  return {
    position: "fixed",
    left: 0,
    top: "58%",
    transform: "translateY(-50%)",
    height: "550px",
    zIndex: 99,
  };
});

const HeaderWrapper = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 150,
    paddingTop: 20,
  };
});

const LogoWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "19.89vw",
    height: "19.89vw",
    aspectRatio: "1 / 1",

    ["& img"]: {
      objectFit: "contain",
    },
  };
});

const Line1SVGWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "47.85vw",
    left: "21.64%",
    marginBottom: "clamp(0px, 20.16vw, 150px)",

    // width: "clamp(0px, 47.85vw, 356px)",
    // left: "clamp(0px, 21.64vw, 161px)",
  };
});

const Line2SVGWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "33.33vw",
    left: "22.31%",
    marginBottom: "clamp(0px, 20.16vw, 150px)",

    // width: "clamp(0px, 33.33vw, 248px)",
    // left: "clamp(0px, 22.31vw, 166px)",
  };
});

const StopPointSection3 = styled(Box)(() => {
  return {
    marginBottom: "11rem",
    marginTop: "2rem",
  };
});

const Line3SVGWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "70.56vw",

    left: "24.33%",
    marginBottom: "clamp(0px, 24.19vw, 180px)",

    // width: "clamp(0px, 70.56vw, 525px)",
    // left: "clamp(0px, 24.33vw, 181px)",
    // aspectRatio: "527 / 1933",
  };
});

const SubBackgroundSVGWrapper = styled(Box)(() => {
  return {
    position: "relative",
    left: "13.44%",
    width: "87.23vw",

    // width: "clamp(0px, 87.23vw, 649px)",
    // left: "clamp(0px, 13.44vw, 100px)",
    // right: 0,
    // aspectRatio: "649 / 1648",
  };
});

const VideoWrapper = styled(Box)(() => {
  return {
    position: "relative",
    left: "17.47%",
    width: "76.34vw",
    height: "52.02vw",
    aspectRatio: "568 / 387",
    marginBottom: "clamp(0px, 17.2vw, 128px)",

    // width: "clamp(0px, 76.34vw, 568px)",
    // height: "clamp(0px, 52.02vw, 387px)",
    // left: "clamp(0px, 17.47vw, 130px)",
  };
});

const Line4SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    width: "51.75vw",
    // width: "clamp(0px, 51.75vw, 385px)",
    top: "15%",
    left: "35%",
  };
});

const Line5SVGWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "23.25vw",
    left: "22.98%",
    marginTop: "-7vw",

    // width: "clamp(0px, 23.25vw, 173px)",
    // left: "clamp(0px, 22.98vw, 171px)",
  };
});

const TestimonialWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "59.14vw",
    aspectRatio: "440 / 285",
    left: "26.08%",
    // marginBottom: "clamp(0px, 34.95vw, 260px)",
  };
});

const Container = styled(Box)(() => {
  return {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };
});

const BackgroundWrapper = styled(BackgroundPattern)(({ theme }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: theme.palette.secondaryColor.background,
  };
});

export default HomeTablet;
