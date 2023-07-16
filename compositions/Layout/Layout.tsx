import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Stack, Typography, styled } from "@mui/material";
import { Fragment, ReactNode, useEffect, useState } from "react";

import Footer from "./Footer";
import { useMedia } from "@/hooks";
import { Header } from "@/compositions";

const BacktoTop = dynamic(() => import("./BacktoTop"));
const Contact = dynamic(() => import("./Contact"));

import { ContactFormModalProvider } from "@/contexts";
import LoadingScreen from "../LoadingScreen";
import { Box } from "@/components";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const router = useRouter();
  const { isSmDown } = useMedia();
  const [fadeOut, setFadeOut] = useState(false);
  const { asPath } = useRouter();

  const date = new Date();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      document.body.style.overflow = "unset";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Fragment>
      <ContactFormModalProvider>
        <LoadingScreen fadeOut={fadeOut} />
        <StyledWrapper>
          {router.asPath !== "/" && <Header />}
          {children}
          {(isSmDown || router.asPath !== "/") && <Footer />}
        </StyledWrapper>
      </ContactFormModalProvider>
      <BacktoTop />
      <Contact />

      {asPath === "/" && (
        <FooterWrapper>
          <Typography variant="MontserratText">
            Copyright © {date.getFullYear()} BABY FISH. All rights reserved
          </Typography>
        </FooterWrapper>
      )}
    </Fragment>
  );
}

const StyledWrapper = styled(Stack)(() => {
  return {
    minHeight: "100vh",
    justifyContent: "space-between",
  };
});

const FooterWrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    bottom: 40,
    left: 100,
    color: "#AFAFAF",
    whiteSpace: "nowrap",
    textDecoration: "underline",

    [theme.breakpoints.between("md", "lg")]: {
      bottom: 20,
      left: 220,
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  };
});
