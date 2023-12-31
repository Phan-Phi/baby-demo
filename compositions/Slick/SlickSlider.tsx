import Slider, { Settings } from "react-slick";
import { Box, styled, BoxProps } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface StyledWrapperProps extends BoxProps {
  variant: string;
}

const createSettings = (variant: string) => {
  if (variant == "simple") {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
  } else {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            draggable: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 650,
          settings: {
            draggable: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            draggable: false,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }
};

export default function SlickSlider({
  children,
  props,
  variant = "simple",
  refSlick,
}: {
  children: React.ReactNode;
  props?: Settings;
  variant?: "simple" | "multiple";
  refSlick?: any;
}) {
  return (
    <StyledWrapper variant={variant}>
      <Slider {...createSettings(variant)} ref={refSlick} {...props}>
        {children}
      </Slider>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "variant";
  },
})<StyledWrapperProps>(({ theme, variant }) => {
  return {
    "& .slick-slide": {
      padding: variant == "multiple" ? "0.6rem" : 0,
    },
    "& .MuiSvgIcon-root": {
      width: "45px",
      height: "45px",
      zIndex: 10,
      [theme.breakpoints.down("sm")]: {
        width: "30px",
        height: "30px",
      },
    },

    "& .slick-next": {
      top: "45%",
    },

    "&  .slick-active button": {
      paddingTop: "3px !important",
    },
    "&  button::before": {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderRadius: "10px !important",
      opacity: "1 !important",
    },
    "&  li": {
      margin: "0 !important",
    },

    "&  .slick-dots": {
      display: "flex !important",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.625rem",

      left: "50%",
      transform: "translateX(-50%)",

      "& li.slick-active button:before": {
        opacity: ".75",
        color: "transparent",
      },

      "& li": {
        width: "20px",
        height: "20px",
        padding: "0 0.5rem",
        position: "relative",

        "& button": {
          padding: 0,
          width: "15px",
          height: "15px",
        },
      },

      "& .slick-active button::before": {
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        opacity: "1 !important",
        fontSize: "0.7rem",
        borderRadius: "10px !important",
      },

      "& .slick-active": {
        // border: `1px solid ${theme.palette.primary.main} !important`,
        borderRadius: "1rem !important",
      },

      "& button::before": {
        fontSize: "0.7rem",
        color: "transparent",

        width: "12px",
        height: "12px",
        lineHeight: "15px",

        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
  };
});
