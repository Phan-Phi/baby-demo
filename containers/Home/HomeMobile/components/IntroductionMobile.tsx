import { useMeasure } from "react-use";
import React, { useMemo } from "react";
import { Typography, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import LineSVGOnMobile from "./Line1SVG";
import { Box, Image, Spacing } from "@/components";
import { PlacementContainer } from "@/compositions";
import CardWithFish from "../../components/CardWithFish";
import { COLOR_TEXT_GRADIENT_ORANGES } from "@/constants";
import { HomePage } from "@/interfaces/responseSchema/home";
import { IntroductionBlock, MethodBlock } from "@/interfaces";
import CardWithDashBorder from "../../components/CardWithDashBorder";
import { useRouter } from "next/router";

interface Props {
  data: HomePage;
}

interface KnowToSwimProps {
  title: string;
  subTitle: string;
}

interface KnowToSwimWrapperProps {
  isLocale: boolean;
}

export default function IntroductionMobile({ data }: Props) {
  const [measureRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>();
  const { messages } = useIntl();
  const { locale } = useRouter();

  const { method_subtitle, method_title, introduction_blocks, method_blocks } = data;

  const renderIntroduction = useMemo(() => {
    if (introduction_blocks == undefined) return;

    return introduction_blocks.map((el: IntroductionBlock, idx: number) => {
      const { value } = el;

      return (
        <StyledIntroductionCard key={idx} className={`introduction-card-${idx + 1}`}>
          <CardWithDashBorder>
            <IntroductionTypography variant="m_body1">{value}</IntroductionTypography>
          </CardWithDashBorder>
        </StyledIntroductionCard>
      );
    });
  }, [introduction_blocks]);

  const renderMethod = useMemo(() => {
    if (method_blocks == undefined) return;

    return method_blocks.map((el: MethodBlock, idx: number) => {
      const { value } = el;

      return (
        <Box key={idx} className="wrapperCardWithFish">
          <CardWithFish
            title={value.title}
            description={value.content}
            Icon={
              <Box
                position="relative"
                width={"16.47vw"}
                height={"16.47vw"}
                margin="0 auto"
              >
                <Image src={value.image} alt={value.title} />
              </Box>
            }
            backgroundVariant="gradientOrange"
          />
        </Box>
      );
    });
  }, [method_blocks]);

  return (
    <Box position="relative">
      <Box textAlign="center">
        <Title fontSize=" clamp(0px, 4.09vh, 55px)" variant="m_h1">
          {messages["homeSmartphone.section1.title1"]}
        </Title>
        <Title variant="m_title1">{messages["homeSmartphone.section1.title2"]}</Title>

        {locale === "en" && (
          <Title variant="m_title1">{messages["homeSmartphone.section1.title4"]}</Title>
        )}
        <Title variant="m_title1">{messages["homeSmartphone.section1.title3"]}</Title>
      </Box>

      <Spacing spacing={20} />

      <Box position="relative">
        <Box position="relative" width="41.16vw" left="27.33vw" ref={measureRef}>
          <LineSVGOnMobile />

          <PlacementContainer
            selector=".anchor-1"
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          >
            <ImageWrapper>
              <Box className="fish">
                <Image src="/fish-1-new.png" alt="fish-1" />
              </Box>

              <Box className="text-with-arrow">
                <svg viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.3"
                    d="M0.258465 0.307724C0.42269 0.1122 0.631702 0.0144376 0.885505 0.0144376C1.13931 0.0144376 1.34832 0.1122 1.51255 0.307725L5.00606 4.44039L8.49958 0.307725C8.6638 0.112201 8.86894 0.00981691 9.11498 0.000573965C9.36101 -0.00866898 9.57391 0.0937148 9.75366 0.307725C9.91789 0.503249 10 0.752098 10 1.05427C10 1.35644 9.91789 1.60529 9.75366 1.80082L5.6331 6.7067C5.54353 6.81334 5.44648 6.88907 5.34198 6.93386C5.23747 6.97865 5.1255 7.00069 5.00606 6.99998C4.88663 6.99998 4.77465 6.97758 4.67015 6.93279C4.56564 6.888 4.4686 6.81263 4.37902 6.7067L0.258465 1.80082C0.0942392 1.60529 0.00824445 1.36107 0.000481559 1.06813C-0.00728134 0.775204 0.0787124 0.521735 0.258465 0.307724Z"
                    fill="#1C98DD"
                  />
                  <path
                    opacity="0.5"
                    d="M0.258465 7.30772C0.42269 7.1122 0.631702 7.01444 0.885505 7.01444C1.13931 7.01444 1.34832 7.1122 1.51255 7.30772L5.00606 11.4404L8.49958 7.30772C8.6638 7.1122 8.86894 7.00982 9.11498 7.00057C9.36101 6.99133 9.57391 7.09371 9.75366 7.30772C9.91789 7.50325 10 7.7521 10 8.05427C10 8.35644 9.91789 8.60529 9.75366 8.80082L5.6331 13.7067C5.54353 13.8133 5.44648 13.8891 5.34198 13.9339C5.23747 13.9787 5.1255 14.0007 5.00606 14C4.88663 14 4.77465 13.9776 4.67015 13.9328C4.56564 13.888 4.4686 13.8126 4.37902 13.7067L0.258465 8.80082C0.0942392 8.60529 0.00824445 8.36107 0.000481559 8.06813C-0.00728134 7.7752 0.0787124 7.52173 0.258465 7.30772Z"
                    fill="#1C98DD"
                  />
                  <path
                    d="M0.258465 14.3077C0.42269 14.1122 0.631702 14.0144 0.885505 14.0144C1.13931 14.0144 1.34832 14.1122 1.51255 14.3077L5.00606 18.4404L8.49958 14.3077C8.6638 14.1122 8.86894 14.0098 9.11498 14.0006C9.36101 13.9913 9.57391 14.0937 9.75366 14.3077C9.91789 14.5032 10 14.7521 10 15.0543C10 15.3564 9.91789 15.6053 9.75366 15.8008L5.6331 20.7067C5.54353 20.8133 5.44648 20.8891 5.34198 20.9339C5.23747 20.9787 5.1255 21.0007 5.00606 21C4.88663 21 4.77465 20.9776 4.67015 20.9328C4.56564 20.888 4.4686 20.8126 4.37902 20.7067L0.258465 15.8008C0.0942392 15.6053 0.00824445 15.3611 0.000481559 15.0681C-0.00728134 14.7752 0.0787124 14.5217 0.258465 14.3077Z"
                    fill="#1C98DD"
                  />
                </svg>

                <Typography color="secondary.main" variant="title3">
                  {messages["scroll.more"]}
                </Typography>
              </Box>
            </ImageWrapper>
          </PlacementContainer>
        </Box>

        {renderIntroduction}
        <KnowToSwim title={method_title} subTitle={method_subtitle} />
        <WrapperRenderMethod marginTop={15}>{renderMethod}</WrapperRenderMethod>
      </Box>
    </Box>
  );
}

const Title = styled(Typography)(() => {
  return {
    ...COLOR_TEXT_GRADIENT_ORANGES,

    display: "block",
  };
});

const IntroductionTypography = styled(Typography)(({ theme }) => {
  return {
    display: "block",
    textAlign: "justify",
    color: theme.palette.secondary.main,
  };
});

const KnowToSwim = ({ title, subTitle }: KnowToSwimProps) => {
  const { locale } = useRouter();
  return (
    <KnowToSwimWrapper isLocale={locale === "en" ? true : false}>
      <Box className="content-wrapper" textAlign="center">
        {locale === "en" ? (
          <>
            <Typography className="title" variant="m_title1" lineHeight={1}>
              THE MEANING OF
            </Typography>
            <Typography
              className="title"
              variant="m_title1"
              lineHeight={1}
              marginBottom={1}
            >
              PROPER SWIMMING
            </Typography>
          </>
        ) : (
          <Typography className="title" variant="m_title1">
            {title}
          </Typography>
        )}

        <Typography className="description" variant="m_body1">
          {subTitle}
        </Typography>
      </Box>

      <Box position="absolute" top="45.6vw">
        <Box position="relative" height="27.47vw" width="43.47vw">
          <Image src="/fish-2.png" alt="" />
        </Box>
      </Box>
    </KnowToSwimWrapper>
  );
};

const KnowToSwimWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLocale",
})<KnowToSwimWrapperProps>(({ theme, isLocale }) => {
  return {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 352 183' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 11C1 5.47714 5.47715 1 11 1L341 1C346.523 1 351 5.47715 351 11V125.104C351 130.627 346.529 135.103 341.007 135.152C312.395 135.408 276.74 136.598 253.664 136.598C244.379 136.598 202.558 173.647 186.644 181.534C183.889 182.9 181.841 181.205 182.895 178.318C187.239 166.421 203.892 136.972 196.639 136.598C118.617 135.153 108.194 135.106 11.0082 135.104C5.48535 135.104 1 130.627 1 125.104V11Z' fill='white' stroke='%231C98DD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/%3E%3C/svg%3E%0A")`,
    width: "calc(100vw - 32px)",
    height: "calc(100% * 183 / 352)",
    aspectRatio: "352 / 183",
    backgroundRepeat: "no-repeat",
    position: "relative",
    ["& .content-wrapper"]: {
      position: "absolute",
      top: isLocale ? "6.4%" : "12.5%",
      left: "6.4%",
      right: "6.4%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: isLocale ? 0 : 16,
      ["& .title"]: COLOR_TEXT_GRADIENT_ORANGES,
      ["& .description"]: {
        color: theme.palette.secondary.main,
        textAlign: "justify",

        width: isLocale ? "300px" : "auto",
      },
    },
  };
});

const ImageWrapper = styled(Box)(() => {
  return {
    position: "relative",

    ["& .fish"]: {
      width: "23.07vw",
      height: "31.47vw",
      aspectRatio: "109 / 118",
      position: "relative",

      "@keyframes mobile-fish-move-effect": {
        "0%, 100%": {
          transform: "translate(0, 0) rotateZ(45deg)",
        },
        "50%": {
          transform: "translate(20px, 40px) rotateZ(30deg)",
        },
      },

      animation: `mobile-fish-move-effect 2000ms infinite`,
    },

    ["& .text-with-arrow"]: {
      position: "absolute",
      top: "25%",
      left: "120%",
      width: "40vw",

      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,

      ["& svg"]: {
        width: 12,
        height: 25.2,
      },

      "@keyframes mobile-more-info-effect": {
        "0%, 100%": {
          transform: "translate(0, 0)",
        },
        "50%": {
          transform: "translate(0, 30px)",
        },
      },

      animation: `mobile-more-info-effect 2000ms infinite`,
    },

    ["& img"]: {
      objectFit: "contain",
    },
  };
});

const StyledIntroductionCard = styled(Box)(() => {
  return {
    position: "absolute",
    ["&.introduction-card-1"]: {
      // top: "10%",
      top: "clamp(0px, 38.67vw, 145px)",
    },
    ["&.introduction-card-2"]: {
      // top: "20%",
      top: "clamp(0px, 89.87vw, 337px)",
    },
    ["&.introduction-card-3"]: {
      // top: "30%",
      top: "clamp(0px, 130.4vw, 489px)",
    },
  };
});

const WrapperRenderMethod = styled(Box)(() => {
  return {
    "& .wrapperCardWithFish": {
      paddingBottom: "2.1rem",
    },
  };
});
