import React, { useEffect } from "react";
import { isTablet } from "react-device-detect";
import { Typography, styled } from "@mui/material";

import { Box } from "@/components";
import { COLOR_TEXT_GRADIENT_BLUE } from "@/constants";

interface Props {
  data: string;
}

export default function Review({ data }: Props) {
  useEffect(() => {
    const element = document.getElementById("scroller") as any;
    element.scrollTop = 0;
  });

  return (
    <Reviews id="scroller">
      <Typography className="content">{data}</Typography>
    </Reviews>
  );
}

const Reviews = styled(Box)(({ theme }) => {
  return {
    height: "clamp(0px, 39.89vh, 420px)",
    overflowY: "auto",
    paddingRight: "1rem",
    "&::-webkit-scrollbar": {
      width: "1rem",
      height: "1rem",
    },
    "&::-webkit-scrollbar-thumb": {
      background: COLOR_TEXT_GRADIENT_BLUE,
      borderRadius: "1rem",
    },
    "&::-webkit-scrollbar-track": {
      background:
        "linear-gradient(180deg, rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",
      borderRadius: "1rem",
    },

    [theme.breakpoints.down("md")]: {
      paddingRight: "0.5rem",
      height: "27.08vw",
      "&::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
      },

      "& p": {
        lineHeight: "21px !important",
      },
    },

    [theme.breakpoints.down("sm")]: {
      paddingRight: "1rem",
      width: "100%",
      height: "calc(100% * 195 / 326)",
      aspectRatio: "326 / 186",
    },

    ["& .content"]: {
      textAlign: "right",
      color: "#5A5A5A",
      ...theme.typography.body1,
      [theme.breakpoints.down("md")]: {
        textAlign: "justify",
        ...theme.typography.m_body1,
      },
      ...(isTablet && {
        ...theme.typography.m_body1,
        textAlign: "justify",
      }),
    },
  };
});
