import { useWindowScroll } from "react-use";
import { useCallback, useEffect } from "react";
import { Box, Stack, styled } from "@mui/material";

import { useRouter } from "next/router";
import { ArrowTopIcon } from "@/components";
import { useMedia, useToggle } from "@/hooks";

const BacktoTop = () => {
  const { asPath } = useRouter();
  const { y } = useWindowScroll();
  const { isMdDown } = useMedia();
  const { toggleOn, toggleOff, on } = useToggle();

  const handleScrollTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (y < 400 && on) {
      toggleOff();
    } else if (y > 400 && !on) {
      toggleOn();
    }
  }, [y, toggleOff, toggleOn, on]);

  return (
    <Container onClick={handleScrollTop} className={on ? "active" : undefined}>
      <ArrowTopIconBlock display={on ? "none" : "block"}>
        {(asPath !== "/" || isMdDown) && <ArrowTopIcon />}
      </ArrowTopIconBlock>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    bottom: 40,
    left: 40,
    zIndex: 80,
    backdropFilter: "blur(5px)",
    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center",

    transition: "all linear 0.2s",

    opacity: 0,
    scale: "0",

    "&.active": {
      opacity: 1,
      scale: "1",
    },

    "& svg": {
      width: 48,
      height: 48,
      cursor: "pointer",

      [theme.breakpoints.down("sm")]: {
        width: 35,
        height: 35,
      },
    },

    [theme.breakpoints.between("md", "lg")]: {
      bottom: 20,
    },
    [theme.breakpoints.down("md")]: {
      bottom: 30,
      left: 30,
    },

    [theme.breakpoints.down("sm")]: {
      bottom: 20,
      left: 12,
    },
  };
});

const ArrowTopIconBlock = styled(Stack)(({ theme }) => {
  return {
    background: theme.palette.gradientColor.gradientBlue30,
    border: "1px solid #83D2FF",
    boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(5px)",
    borderRadius: 10,
  };
});

export default BacktoTop;
