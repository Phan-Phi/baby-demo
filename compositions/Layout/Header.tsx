import { Fragment, useMemo } from "react";
import { Box, Container, styled } from "@mui/material";

import { useMedia } from "@/hooks";
import { HorizontalHeader, VerticalHeader, HeaderOnMobile } from "@/compositions";

const Header = () => {
  const { isSmUp, isMdUp, isLgUp } = useMedia();
  //* landscape-primary
  //* portrait-primary 12856 543 185 12128 5463

  const renderHeader = useMemo(() => {
    if (isMdUp) {
      return (
        <HeaderWrapper>
          <Container>
            <HorizontalHeader />
          </Container>
        </HeaderWrapper>
      );
    }

    if (isSmUp) {
      return (
        <HeaderVerticalWrapper>
          <VerticalHeader />
        </HeaderVerticalWrapper>
      );
    }

    return (
      <HeaderMobileWrapper>
        <HeaderOnMobile />
      </HeaderMobileWrapper>
    );
  }, [isSmUp, isMdUp]);

  return <Fragment>{renderHeader}</Fragment>;
};

const HeaderMobileWrapper = styled(Box)(() => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 99,
    width: "100%",
  };
});

const HeaderWrapper = styled(Box)(({ theme }) => {
  return {
    position: "sticky",
    top: 56,
    zIndex: 999,
    height: 0,
  };
});

const HeaderVerticalWrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    height: "50vh",
    zIndex: 99,

    [theme.breakpoints.down("md")]: {
      ["@media (orientation: landscape)"]: {
        height: "90vh",
      },
    },
  };
});

export default Header;
