import { Box, BoxProps, Typography, styled } from "@mui/material";

import LifebuoySVG from "./Svg/LifebuoySVG";

const NavigationComponent = (props: BoxProps) => {
  const { children, ...restProps } = props;

  return (
    <StyledBox {...restProps}>
      <LifebuoySVG />
      <Typography className="navigation-text" variant="menuText" color="#055CBB">
        {children}
      </Typography>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",
    display: "flex",
    columnGap: 8,
    alignItems: "center",

    ["& .navigation-text"]: {
      transition: "300ms",
      transform: "translateX(-12px)",
    },

    ["&.is-active .navigation-text"]: {
      color: theme.palette.primary.main,
    },

    ["& svg"]: {
      width: "clamp(0px, 2.22vh, 24px)",
      height: "clamp(0px, 2.22vh, 24px)",
      visibility: "hidden",
      opacity: 0,
      transition: "300ms",

      [theme.breakpoints.down("md")]: {
        width: "clamp(0px, 2.15vw, 16px)",
        height: "clamp(0px, 2.15vw, 16px)",
      },
    },

    ["&:hover"]: {
      ["& svg"]: {
        visibility: "visible",
        opacity: 1,
      },

      ["& .navigation-text"]: {
        transform: "translateX(0)",
        color: theme.palette.primary.main,
      },
    },

    ["&.is-active"]: {
      ["& svg"]: {
        visibility: "visible",
        opacity: 1,
      },

      ["& .navigation-text"]: {
        transform: "translateX(0)",
        color: theme.palette.primary.main,
      },
    },

    [theme.breakpoints.down("md")]: {
      ["& .navigation-text"]: {
        ...theme.typography.body2,
      },
    },
  };
});

export default NavigationComponent;
