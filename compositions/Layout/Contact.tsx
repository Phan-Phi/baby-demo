import React, { MouseEventHandler, useCallback, useMemo } from "react";
import { Box, Stack, styled } from "@mui/material";

import { Image } from "@/components";
import { useSetting } from "@/hooks";

const Contact = () => {
  const setting = useSetting();

  const { contact_icon } = setting;

  const onClickHandler: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    e.preventDefault();

    const { key, value } = e.currentTarget.dataset;

    if (!value) return;

    if (key === "link") {
      window.open(value, "_blank");
    }

    if (key === "tel") {
      window.open(value, "_self");
    }
  }, []);

  const renderContactIcon = useMemo(() => {
    if (contact_icon == undefined) return;

    return contact_icon.map((el: any, idx: number) => {
      const { value } = el;

      return (
        <StyledImageWrapper
          key={idx}
          onClick={onClickHandler}
          data-value={value.hasOwnProperty("tel") ? `tel:${value.tel}` : value.link}
          data-key={value.hasOwnProperty("tel") ? "tel" : "link"}
          className={value.hasOwnProperty("tel") ? "tel" : "link"}
        >
          <Image src={value.icon} alt="" />
        </StyledImageWrapper>
      );
    });
  }, [contact_icon, onClickHandler]);

  return <StyledIconBlockRight>{renderContactIcon}</StyledIconBlockRight>;
};

const StyledIconBlockRight = styled(Stack)(({ theme }) => {
  return {
    position: "fixed",
    bottom: 50,
    right: 50,
    zIndex: 80,

    flexDirection: "row",
    alignItems: "center",
    gap: "30px",
    [theme.breakpoints.between("md", "lg")]: {
      bottom: 20,
      right: 70,
      gap: "16px",
    },
    [theme.breakpoints.down("md")]: {
      bottom: 30,
      right: 30,

      flexDirection: "column",
      padding: "20px 8px",
      gap: 16,

      border: "1px solid #83D2FF",
      boxShadow: "-1px 1px 4px rgba(1, 35, 73, 0.2)",
      backdropFilter: "blur(10px)",
      borderRadius: "30px",

      background: theme.palette.gradientColor.gradientBlue30,
    },
    [theme.breakpoints.down("sm")]: {
      right: 12,
    },
  };
});

const StyledImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: 50,
    height: 50,
    cursor: "pointer",
    transition: "200ms",

    ["&:hover"]: {
      transform: "scale(1.1)",
    },

    ["&.tel"]: {
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },

    ["& img"]: {
      objectFit: "contain",
    },

    [theme.breakpoints.down("md")]: {
      width: 35,
      height: 35,
    },

    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
    },
  };
});

export default Contact;
