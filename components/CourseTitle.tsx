import { ImageProps } from "next/image";
import { memo, useRef } from "react";
import { useRouter } from "next/router";
import { Box, Grid, StackProps, styled } from "@mui/material";

import { Headline, Image } from "@/components";

interface HeadingProps extends StackProps {
  src: ImageProps["src"];
  data: any;
  subtitle: { en: JSX.Element; vi: JSX.Element };
}

interface SubTitleProps {
  isLocale: boolean;
}

const CourseTitle = (props: HeadingProps) => {
  const { src, data, subtitle } = props;

  const fishRef = useRef<HTMLDivElement>();
  const router = useRouter();

  const routerAsPath = router.asPath.includes("/thu-vien" || "/tro-giup");
  const asPathCourse = router.asPath.includes("/khoa-hoc");

  return (
    <GridStyled container>
      {/* <Grid item lg={0} md={2} sm={routerAsPath ? 0 : 1.5} xs={0}></Grid> */}
      <Grid item lg={12} md={10} sm={routerAsPath ? 0 : 10.5} xs={12}>
        <StyledWrapperHeading {...props} className="courseTitle">
          <ImageWrapper ref={fishRef} className="image-wrapper">
            <Image src={data.image} alt="decorator" />
          </ImageWrapper>

          <StyledHeadingBlock className="courseTitle__content">
            <StyledHeading
              variant={"H1Twin"}
              title={data?.title}
              // backgroundVariant={!!data?.subtitle ? "gradientOrange" : "gradientBlue"}
              backgroundVariant={"gradientOrange"}
              className="heading"
            />

            {asPathCourse ? (
              <SubTitle isLocale={false}>
                {router.locale === "vi" ? subtitle.vi : subtitle.en}
              </SubTitle>
            ) : (
              <SubTitle isLocale={router.locale === "vi" ? true : false}>
                {router.locale === "vi" ? subtitle.vi : subtitle.en}
              </SubTitle>
            )}

            {/* <StyledTitle
              variant="title1"
              title={data?.subtitle}
              backgroundVariant="gradientBlue"
            /> */}
          </StyledHeadingBlock>
        </StyledWrapperHeading>
      </Grid>
    </GridStyled>
  );
};

const GridStyled = styled(Grid)(({ theme }) => {
  return {
    [theme.breakpoints.between("md", "lg")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  };
});

const StyledWrapperHeading = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,

    marginTop: theme.spacing(31),
    marginBottom: theme.spacing(12),

    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(19),
      marginBottom: theme.spacing(5),
    },

    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10.3),
      marginBottom: theme.spacing(5),

      gap: 24,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(28.8),
      marginBottom: theme.spacing(3),

      gap: 10,
    },
  };
});

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: 400,
    height: 322,

    pointerEvents: "none",

    ["& img"]: {
      objectFit: "contain",
    },

    [theme.breakpoints.between("md", "lg")]: {
      width: "clamp(0px, 20.83vw, 400px)",
      height: 210,
    },
    [theme.breakpoints.down("md")]: {
      width: 148,
      height: 135,
    },

    [theme.breakpoints.down("sm")]: {
      width: 119.14,
      height: 125,
    },
  };
});

const StyledHeadingBlock = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      rowGap: 8,
      // paddingBottom: 5,
    },
  };
});

const StyledHeading = styled(Headline)(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      ...theme.typography.h2,
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.title1,
      lineHeight: 1.4,
    },
  };
});

const SubTitle = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLocale",
})<SubTitleProps>(({ theme, isLocale }) => {
  return {
    textAlign: "left",
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

const StyledTitle = styled(Headline)(({ theme }) => {
  return {
    textTransform: "unset",
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("lg")]: {
      ...theme.typography.m_title2,
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_body1,
      textAlign: "left",
      paddingTop: 5,
    },
  };
});

export default memo(CourseTitle);
