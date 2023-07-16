import { useRouter } from "next/router";
import { Box, styled } from "@mui/material";
import { useUpdateEffect } from "react-use";
import { MouseEventHandler, useCallback, useContext, useState } from "react";

import { ContactFormModalContext } from "@/contexts";

import { Image } from "@/components";
import { SelectLanguage } from "@/compositions";
import NavigationsComponent from "@/components/NavigationsComponent";

import logo from "@/public/image/logo.png";
import ellipse from "@/public/image/Ellipse.png";
import { useIntl } from "@/hooks";

const VerticalHeader = () => {
  const router = useRouter();
  const { messages } = useIntl();
  const { toggleOn } = useContext(ContactFormModalContext);

  const [selectedId, setSelectedId] = useState<string>(router.pathname.slice(1));

  const onGotoHandler: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const path = e.currentTarget.dataset.id;

      path && router.push(path);
    },
    [router]
  );

  useUpdateEffect(() => {
    setSelectedId(router.pathname.slice(1));
  }, [router.pathname]);

  return (
    <Container>
      <NavigationsComponent
        className={selectedId === "khoa-hoc" ? "is-active" : undefined}
        data-id="khoa-hoc"
        onClick={onGotoHandler}
      >
        {messages["header.course"]}
      </NavigationsComponent>

      <NavigationsComponent
        className={selectedId === "thu-vien" ? "is-active" : undefined}
        data-id="thu-vien"
        onClick={onGotoHandler}
      >
        {messages["header.gallery"]}
      </NavigationsComponent>

      <StyledImageWrapper data-id="/" onClick={onGotoHandler}>
        <Box className="image-layout">
          <Box className="image-wrapper">
            <Image src={logo} alt="" />
          </Box>
        </Box>
      </StyledImageWrapper>

      <NavigationsComponent
        className={selectedId === "tro-giup" ? "is-active" : undefined}
        data-id="tro-giup"
        onClick={onGotoHandler}
      >
        {messages["header.faqs"]}
      </NavigationsComponent>

      <NavigationsComponent onClick={toggleOn}>
        {messages["header.contact"]}
      </NavigationsComponent>

      <LanguageSectionWrapper>
        <SelectLanguage />
      </LanguageSectionWrapper>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    border: `1.5px solid ${theme.palette.secondaryColor.lightBlue}`,
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: "6.45vw 1.08vw",
    paddingBottom: "8.06vw",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    ["&::after"]: {
      content: '""',
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: "#FFF",
      backgroundImage: "url(/header-background.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      zIndex: -1,
      filter: "contrast(1.1)",
      opacity: 0.6,
    },

    [theme.breakpoints.down("md")]: {
      ["@media (orientation: landscape)"]: {
        padding: "10vh 2vh",
        paddingTop: "5vh",
      },
    },
  };
});

const StyledImageWrapper = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",

    width: "6.72vw",
    height: "12.9vw",

    ["& .image-layout"]: {
      position: "absolute",
      left: "5%",
      top: "50%",
      width: "17.74vw",
      transform: "translateY(-50%)",

      [theme.breakpoints.down("md")]: {
        ["@media (orientation: landscape)"]: {
          width: "20vh",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
    },
    ["& .image-wrapper"]: {
      margin: "0 auto",
      backgroundImage: `url(${ellipse.src})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      position: "relative",
      aspectRatio: "1 / 1",

      ["& img"]: {
        objectFit: "contain",
        transition: "transform linear 0.2s",
      },
      "&:hover > img": {
        transform: "scale(1.15) !important",
      },
    },

    [theme.breakpoints.down("md")]: {
      ["@media (orientation: landscape)"]: {
        height: "25vh",
      },
    },
  };
});

const LanguageSectionWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    bottom: 12,
    left: "50%",
    transform: "translateX(-50%)",
  };
});

export default VerticalHeader;
