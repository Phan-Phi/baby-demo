import { Box, Typography, styled } from "@mui/material";

import logo from "@/public/image/logo.png";
import ellipse from "@/public/image/Ellipse.png";

import { BackgroundPattern, Image } from "@/components";

interface LoadingScreenProps {
  fadeOut: boolean;
}

const LoadingScreen = (props: LoadingScreenProps) => {
  const { fadeOut } = props;

  return (
    <Container fadeOut={fadeOut}>
      <ContentWrapper>
        <StyledImageWrapper>
          <Box className="image-wrapper">
            <Image priority loading="eager" src={logo} alt="" />
          </Box>
        </StyledImageWrapper>
        <BarFishWrapper>
          <SlideBar />
          <SlideFishWrapper className="image-wrapper">
            <Image priority loading="eager" src="/loading-fish.png" alt="" />
          </SlideFishWrapper>
        </BarFishWrapper>

        <LoadingTextWrapper>
          <Typography variant="body2" color="secondary.main">
            Loading ...
          </Typography>
        </LoadingTextWrapper>
      </ContentWrapper>

      <BackgroundPattern />
    </Container>
  );
};

const ContentWrapper = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    rowGap: 24,
  };
});

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "fadeOut",
})<{ fadeOut: boolean }>(({ fadeOut, theme }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    maxHeight: "-webkit-fill-available",
    zIndex: 1001,
    backgroundColor: theme.palette.secondaryColor.background,
    userSelect: "none",
    pointerEvents: "none",
    transition: "500ms",
    opacity: fadeOut ? 0 : 1,
  };
});

const StyledImageWrapper = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",

    width: "clamp(0px, 20.37vh, 200px)",
    height: "clamp(0px, 20.37vh, 200px)",

    ["& .image-wrapper"]: {
      margin: "0 auto",
      backgroundImage: `url(${ellipse.src})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      position: "relative",
      aspectRatio: "1 / 1",
      width: "clamp(0px, 20.37vh, 200px)",
      height: "clamp(0px, 20.37vh, 200px)",

      ["& > img"]: {
        objectFit: "contain",
        transition: "transform linear 0.2s",
      },

      [theme.breakpoints.down("md")]: {
        width: "20vw",
        height: "20vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "30vw",
        height: "30vw",
      },
    },

    [theme.breakpoints.down("md")]: {
      width: "20vw",
      height: "20vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
      height: "30vw",
    },
  };
});

const BarFishWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    marginTop: 24,

    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  };
});

const SlideBar = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: "clamp(0px, 67.82vh, 666px)",
    height: 40,
    background:
      "  linear-gradient(180deg, rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",

    borderRadius: 40,
    border: "4px solid #83D2FF",
    overflow: "hidden",
    ["&::after"]: {
      "@keyframes progressive-effect": {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },

      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(0deg, #83D2FF -23.08%, #1C98DD 34.39%, #1C52DD 81.19%, #055CBB 117.31%)",
      borderRadius: 40,
      transformOrigin: "left center",
      transform: "translateX(-100%)",
      animation: `progressive-effect 2000ms infinite`,
    },

    [theme.breakpoints.down("md")]: {
      width: "67.82vw",
      height: 30,
    },
  };
});

const SlideFishWrapper = styled(Box)(({ theme }) => {
  return {
    "@keyframes fish-slide-effect": {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(clamp(0px, 61.1vh, 600px))",
      },
    },
    position: "absolute",
    width: "clamp(0px, 11.71vh, 115px)",
    height: "clamp(0px, 7.43vh, 73px)",
    top: "-34%",
    left: "-5.7%",
    animation: `fish-slide-effect 2000ms infinite`,

    [theme.breakpoints.down("md")]: {
      "@keyframes tablet-fish-slide-effect": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(61.1vw)",
        },
      },
      width: "11.71vw",
      height: "7.43vw",
      top: "-70%",
      animation: `tablet-fish-slide-effect 2000ms infinite`,
    },
    [theme.breakpoints.down("sm")]: {
      width: "23.42vw",
      height: "14.86vw",
    },
  };
});

const LoadingTextWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
  };
});

export default LoadingScreen;
