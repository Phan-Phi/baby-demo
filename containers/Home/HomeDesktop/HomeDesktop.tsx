import gsap from "gsap";
import { get } from "lodash";
import { useRouter } from "next/router";
import { useWindowSize } from "react-use";
import { isTablet } from "react-device-detect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import Section1Content from "./Section1";
import Section2Content from "./Section2";
import Section3Content from "./Section3";
import Section4Content from "./Section4";
import Section5Content from "./Section5";

import FAQ from "./FAQ";
import Teacher from "./Teacher";
import Background from "./Background";
import TeacherDecor from "./TeacherDecor";
import SubBackground1SVG from "./SubBackground1SVG";
import SubBackground2SVG from "./SubBackground2SVG";

import { useIntl } from "@/hooks";
import { Headline } from "@/components";
import { VerticalHeaderAtHome } from "@/compositions";
import { FaqPage } from "@/interfaces/responseSchema/faq";
import { HomePage } from "@/interfaces/responseSchema/home";
import { DetailCousePage, IPage, ListingCousePage, responseSchema } from "@/interfaces";

import Video from "../components/Video";
import Method from "../components/Method";
import Testimonial from "../components/Testimonial";
import GetYoutubeThumbnail from "@/compositions/GetYoutubeThumbnail";
import ModalVideo from "@/compositions/Modal/ModalVideo";

export type HomePageProps = IPage<
  [
    responseSchema<HomePage>,
    responseSchema<ListingCousePage>,
    responseSchema<DetailCousePage>,
    responseSchema<FaqPage>
  ]
>;

const HomeDesktop = ({ initData }: HomePageProps) => {
  const data = get(initData, "[0].items[0]");
  const dataListingCourse = initData[1].items[0];
  const dataDetailCourse = initData[2].items;
  const dataFAQ = initData[3].items[0];

  const date = new Date();
  const { messages } = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { locale } = router;
  const { height: windowHeight, width: windowWidth } = useWindowSize();

  useLayoutEffect(() => {
    if (isTablet) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const ctx = gsap.context(() => {
      const containerEl = containerRef.current;
      const contentEl = contentRef.current;

      if (!containerEl) return;

      const lastEl = containerEl.querySelector<HTMLDivElement>("#tro-giup");

      if (!lastEl) return;

      const { x: maxWidth } = lastEl.getBoundingClientRect();

      const offsetLeft = windowWidth > 2000 ? -(maxWidth - windowHeight / 2) : -maxWidth;

      const maxScroll = windowWidth > 2000 ? maxWidth - windowHeight / 2 : maxWidth;

      gsap.to(contentEl, {
        x: offsetLeft,
        ease: "none",
        scrollTrigger: {
          trigger: containerEl,
          scrub: 1.5,
          pin: true,
          end: `+=${maxScroll}`,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [windowHeight, windowWidth]);

  if (data == undefined) return null;

  const {
    introduction_blocks,
    method_title,
    method_subtitle,
    method_blocks,
    compare_method_blocks,
    value_blocks,
    founder_blocks,
    review_blocks,
    youtube_link,
  } = data;

  return (
    <ContentWrapper id="container" ref={containerRef}>
      <Box ref={contentRef} minHeight="100vh" height="100%">
        {/* <FooterWrapper>
          <Typography variant="MontserratText">
            Copyright © {date.getFullYear()} BABY FISH. All rights reserved
          </Typography>
        </FooterWrapper> */}

        <Line1SVGWrapper>
          <Section1Content data={introduction_blocks} />
        </Line1SVGWrapper>

        <SubBackground1SVGWrapper>
          <SubBackground1SVG />

          <Line2SVGWrapper>
            <Section2Content
              methodBlocks={method_blocks}
              methodSubtitle={method_subtitle}
              methodTitle={method_title}
            />
          </Line2SVGWrapper>

          <MethodWrapper>
            <Method data={compare_method_blocks} />
            <Stack position="relative" alignItems="center" top="clamp(0px, 4.44vh, 48px)">
              <Headline
                title={messages["home.method.title1"]}
                backgroundVariant="gradientOrange"
                variant={isTablet ? "m_title2" : "title1"}
              />
              <Headline
                title={
                  locale === "en"
                    ? `${messages["home.method.title2"]} ${messages["home.method.title3"]}`
                    : `${messages["home.method.title4"]} ${messages["home.method.title2"]} ${messages["home.method.title3"]}`
                }
                backgroundVariant="gradientOrange"
                variant={isTablet ? "m_title2" : "title1"}
              />
            </Stack>
          </MethodWrapper>

          <Line3SVGWrapper>
            <Section3Content data={value_blocks} />
          </Line3SVGWrapper>

          <VideoWrapper>
            <ModalVideo linkVideo={youtube_link} />
            {/* <Video data={youtube_link} /> */}
          </VideoWrapper>
        </SubBackground1SVGWrapper>

        <TestimonialWrapper>
          <Testimonial data={review_blocks} />
        </TestimonialWrapper>

        <StopPointSection4 id="gioi-thieu" />
        <Line4SVGWrapper>
          <Section4Content data={founder_blocks} />
        </Line4SVGWrapper>

        <TeacherWrapper>
          <Teacher />
        </TeacherWrapper>

        <TeacherDecorWrapper>
          <TeacherDecor />
        </TeacherDecorWrapper>

        <StopPointSection5 id="khoa-hoc" />
        <SubBackground2SVGWrapper>
          <SubBackground2SVG />
          <Line5SVGWrapper>
            <Section5Content
              detailCourse={dataDetailCourse}
              listingCourse={dataListingCourse}
            />
          </Line5SVGWrapper>
        </SubBackground2SVGWrapper>

        <FAQ data={dataFAQ} />
      </Box>

      <HeaderVerticalWrapper>
        <VerticalHeaderAtHome />
      </HeaderVerticalWrapper>

      <Background />
    </ContentWrapper>
  );
};

export default HomeDesktop;

const ContentWrapper = styled(Box)(({ theme }) => {
  return {
    overflow: "hidden",
    flexWrap: "nowrap",
    display: "flex",
  };
});

const HeaderVerticalWrapper = styled(Box)(() => {
  return {
    position: "fixed",
    top: "50%",
    left: "3%",
    transform: "translate(0, -50%)",
    zIndex: 2,
    height: "clamp(0px, 75.93vh, 820px)",
    ...(isTablet && {
      height: "85vh",
    }),
  };
});

const FooterWrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    bottom: 40,
    left: 100,
    color: "#AFAFAF",
    textDecoration: "underline",
    whiteSpace: "nowrap",
    [theme.breakpoints.between("md", "lg")]: {
      bottom: 20,
    },
  };
});

const Line1SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: "35.65%",
    left: "clamp(0px, 12.27vh, 132.5px)",
    width: "clamp(0px, 280.19vh, 3026px)",
  };
});

const SubBackground1SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    width: "clamp(0px, 768.52vh, 8300px)",
    left: "clamp(0px, 283.33vh, 3060px)",
  };
});

const Line2SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "1%",
    width: "clamp(0px, 148.15vh, 1600px)",
    top: "clamp(0px, 22.04vh, 238px)",
  };
});

const MethodWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 240.74vh, 2600px)",
    width: "clamp(0px, 166.67vh, 1800px)",
    top: "clamp(0px, 14.63vh, 158px)",
  };
});

const Line3SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 407.41vh, 4400px)",
    top: "45%",
    transform: "translate(0, -50%)",
    width: "clamp(0px, 199.07vh, 2150px)",
  };
});

const VideoWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 699.07vh, 7550px)",
    top: "50%",
    transform: "translate(0, -50%)",
    width: "clamp(0px, 77.04vh, 832px)",
    height: "clamp(0px, 51.67vh, 558px)",
    cursor: "pointer",
  };
});

const TestimonialWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 1087.96vh, 11750px)",
    top: "50%",
    transform: "translate(0, -50%)",
    width: "clamp(0px, 88.89vh, 960px)",
    height: "clamp(0px, 46.3vh, 500px)",
  };
});

const StopPointSection4 = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 1182.68vh, 12773px)",
  };
});

const Line4SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 1240.74vh, 13400px)",
    top: "clamp(0px, 34.91vh, 377px)",
    width: "clamp(0px, 527.78vh, 5700px)",
  };
});

const TeacherWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 1435.19vh, 15500px)",
    bottom: 0,
  };
});

const TeacherDecorWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 1722.22vh, 18600px)",
    bottom: 0,
  };
});

const SubBackground2SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    left: "clamp(0px, 1851.85vh, 20000px)",
    width: "clamp(0px, 305.56vh, 3300px)",
  };
});

const StopPointSection5 = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    left: "clamp(0px, 1802.03vh, 19462px)",
  };
});
const Line5SVGWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "5%",
    top: "clamp(0px, 31.02vh, 335px)",
    width: "clamp(0px, 246.85vh, 2666px)",
  };
});
