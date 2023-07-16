// library
import { get } from "lodash";
import { useMeasure, useWindowSize } from "react-use";
import { Box, Container, styled } from "@mui/material";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";

// custom function
import SEO from "@/components/SEO";
import { getSeoObject } from "@/libs";
import { useMedia } from "@/hooks";
import FAQLineSVG from "./components/LineSVG";
import {
  BackgroundPattern,
  Headline,
  Image,
  MobileSubTitleFaqEn,
  MobileSubTitleFaqVi,
  SubTitleFaq,
} from "@/components";
import { FaqPageProps } from "@/pages/tro-giup";
import fish1 from "@/public/image/fish1ForFaq.png";
import FaqList from "@/containers/Faq/components/FaqList";
import { FAQ_ITEM } from "@/interfaces/responseSchema/faq";
import { PlacementContainer } from "@/compositions";
import { useRouter } from "next/router";

interface SubTitleProps {
  isLocale?: boolean;
}

const Faq = (props: FaqPageProps) => {
  const { initData } = props;

  const { locale } = useRouter();
  const { isMdUp, isMdDown, isSmDown, isSmUp, isLgDown } = useMedia();
  const { width: windowWidth } = useWindowSize();
  const [measureRef, { height }] = useMeasure<HTMLDivElement>();

  const faqItems = get(initData[0], "items[0]");
  const dataSEO = get(initData[0], "items[0].meta");

  const [expanded, setExpanded] = useState<string>("-1");

  useEffect(() => {
    const listLinkElement = document.querySelectorAll("a");

    if (listLinkElement) {
      listLinkElement.forEach((linkElement) => {
        linkElement.setAttribute("target", "_blank");
      });
    }
  }, []);

  const handleChangeAccordion = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "-1");
    },
    []
  );

  const renderFaqItem = useMemo(() => {
    if (faqItems == undefined) return null;

    if (faqItems.faqs == undefined) return null;

    return faqItems.faqs.map((el: FAQ_ITEM, idx: number) => {
      return (
        <FaqList
          data={el}
          handleChangeAccordion={handleChangeAccordion}
          expanded={expanded}
          key={idx}
          idx={idx}
        />
      );
    });
  }, [faqItems, expanded]);

  const renderTitle = useMemo(() => {
    return (
      <HeadlineWrapper>
        <Box className="image-wrapper">
          <Image src={faqItems.image} alt="" />
        </Box>
        <Box className="text-wrapper">
          <Headline
            className="title"
            title={faqItems.title}
            backgroundVariant="gradientOrange"
            sx={{
              textTransform: "unset",
              paddingBottom: "5px",
            }}
          />

          {isSmDown && (
            <SubTitle isLocale={locale === "vi" ? true : false}>
              {locale === "vi" ? <MobileSubTitleFaqVi /> : <MobileSubTitleFaqEn />}
            </SubTitle>
          )}

          {isSmUp && (
            <SubTitle>
              <SubTitleFaq />
            </SubTitle>
          )}

          {/* <Headline className="sub-title" title={faqItems.subtitle} /> */}
        </Box>
      </HeadlineWrapper>
    );
  }, [faqItems, isSmUp, isSmDown, locale]);

  const renderLineSVG = useMemo(() => {
    if (isMdDown) return null;

    return (
      <LineWrapper>
        <Box position="relative">
          <FAQLineSVG />

          <PlacementContainer
            selector=".faq-fish-1"
            containerWidth={Math.min((1550 * windowWidth) / 1920, 1550)}
            containerHeight={
              isLgDown
                ? Math.min((2200 * windowWidth) / 1920, 2200)
                : Math.min((2348 * windowWidth) / 1920, 2348)
            }
          >
            {renderTitle}
          </PlacementContainer>
        </Box>
      </LineWrapper>
    );
  }, [isMdDown, isLgDown, windowWidth, renderTitle]);

  const calculateHeight = useMemo(() => {
    if (isMdUp) return height + 700 + 100;
    return "unset";
  }, [isMdUp, height]);

  return (
    <Fragment>
      <Wrapper position="relative" height={calculateHeight}>
        <SEO {...getSeoObject(dataSEO)} />

        {renderLineSVG}

        {isMdDown && <Container>{renderTitle}</Container>}

        <ContentWrapper ref={measureRef}>
          <Container maxWidth="md">{renderFaqItem}</Container>
        </ContentWrapper>
      </Wrapper>
      <StyledBackGroundPattern />
    </Fragment>
  );
};

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      minHeight: 2500,
    },
  };
});

const StyledBackGroundPattern = styled(BackgroundPattern)(({ theme }) => {
  return {
    position: "fixed",
    zIndex: -1,
    backgroundColor: theme.palette.secondaryColor.background,
  };
});

const LineWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: "clamp(0px, 25.68vw, 493px)",
    width: "clamp(0px, 80.76vw, 1685px)",
    aspectRatio: "1685 / 2348",
    left: "50%",
    transform: "translateX(-50%)",

    // left: "clamp(0px, 8.54vw, 163.91px)",
  };
});

const ContentWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    top: "clamp(0px, 36.46vw, 700px)",

    [theme.breakpoints.down("md")]: {
      top: "unset",
      maxWidth: "83%",
      marginLeft: "auto",
      paddingBottom: 150,
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      paddingBottom: 50,
    },
  };
});

const SubTitle = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLocale",
})<SubTitleProps>(({ theme, isLocale }) => {
  return {
    "& .MuiSvgIcon-root": {
      width: "auto",
      height: "clamp(0px, 9.25vh,100px)",

      [theme.breakpoints.down("md")]: {
        height: "clamp(0px, 6.5vh,70px)",
      },

      [theme.breakpoints.down("sm")]: {
        height: isLocale ? "7.1vh" : "4.6vh",
      },
    },
  };
});

const HeadlineWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    ["& .image-wrapper"]: {
      position: "relative",
      width: "clamp(0px, 20.83vw, 400px)",
      aspectRatio: "400 /322",

      ["& img"]: {
        objectFit: "contain",
      },
      // [theme.breakpoints.between("md", "lg")]: {
      //   width: "148px",
      //   height: "135px",
      // },
      [theme.breakpoints.down("md")]: {
        width: "clamp(0px, 19.48vw, 144.96px)",
        aspectRatio: "144.96 / 117",

        animation: `desktop-fish-move-horizontal-effect-at-faq 2000ms infinite`,

        "@keyframes desktop-fish-move-horizontal-effect-at-faq": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(15px, 0)",
          },
        },
      },
      [theme.breakpoints.down("sm")]: {
        width: "119px",
        height: "120px",
      },
    },

    ["& .text-wrapper"]: {
      display: "flex",
      flexDirection: "column",
      rowGap: 8,

      position: "absolute",
      width: "clamp(0px, 44.27vw, 850px)",
      left: "100%",
      marginLeft: "clamp(0px, 2.08vw, 40px)",
      top: "50%",
      transform: "translateY(-50%)",

      ["& .title"]: {
        ...theme.typography.h1,

        [theme.breakpoints.down("md")]: theme.typography.h2,
        [theme.breakpoints.down("sm")]: theme.typography.m_h2,
      },
      ["& .sub-title"]: {
        ...theme.typography.title1,
        textTransform: "unset",
        [theme.breakpoints.down("md")]: theme.typography.m_title2,
        [theme.breakpoints.down("sm")]: theme.typography.m_body1,
      },

      [theme.breakpoints.down("md")]: {
        position: "relative",
        left: "unset",
        top: "unset",
        transform: "unset",
        width: "fit-content",
      },

      [theme.breakpoints.down("sm")]: {
        maxWidth: "60%",
      },
    },

    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      marginTop: 100,
      marginBottom: 72,
      gap: 12,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "14rem",
      marginBottom: 30,
    },
  };
});

export default Faq;
