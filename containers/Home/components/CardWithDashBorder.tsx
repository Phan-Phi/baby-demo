import React from "react";
import { isTablet } from "react-device-detect";

import { Box, BoxProps, styled } from "@mui/material";

const CardWithDashBorder = (props: BoxProps) => {
  return <StyledContainer {...props} />;
};

export default CardWithDashBorder;

const StyledContainer = styled(Box)(({ theme }) => {
  return {
    padding: 32,
    position: "relative",
    backgroundImage: `url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1%" y="1%" width="98%" height="98%" rx="30" fill="%23fff" stroke="%231C98DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="15 15"/></svg>')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      padding: "15px 18px",
      backgroundImage: `url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1%" y="1%" width="98%" height="98%" rx="10" fill="%23fff" stroke="%231C98DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6"/></svg>')`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 25px",
    },
    ...(isTablet && {
      padding: "15px 18px",
      backgroundImage: `url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1%" y="1%" width="98%" height="98%" rx="10" fill="%23fff" stroke="%231C98DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6"/></svg>')`,
    }),
  };
});
