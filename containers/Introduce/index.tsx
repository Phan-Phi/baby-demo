import { BackgroundPattern } from "@/components";
import { styled, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import MenuItemForHeaderVerticalTablet from "@/compositions/Layout/components/VerticalHeader";

const Introduce = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <StyledBackGroundPattern />
      <MenuItemForHeaderVerticalTablet />
    </Fragment>
  );
};

const StyledBackGroundPattern = styled(BackgroundPattern)(() => {
  return {
    position: "fixed",
    inset: 0,
    zIndex: -1,
  };
});
export default Introduce;
