import { useRouter } from "next/router";
import { useUpdateEffect } from "react-use";
import { Box, styled } from "@mui/material";
import { MouseEventHandler, useCallback, useContext, useState } from "react";

import { Image } from "@/components";
import { SelectLanguage } from "@/compositions";
import NavigationsComponent from "@/components/NavigationsComponent";

// image
import imageLogo from "@/public/fish-5.png";
import ellipse from "@/public/image/Ellipse.png";
import { ContactFormModalContext } from "@/contexts";
import { useIntl } from "@/hooks";

const HorizontalHeader = () => {
  const router = useRouter();
  const { messages } = useIntl();
  const { toggleOn } = useContext(ContactFormModalContext);
  const [selectedId, setSelectedId] = useState<string>(() => {
    return router.pathname.slice(1);
  });

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
            <Image src={imageLogo} alt="" />
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
    background:
      "linear-gradient(180deg,rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",
    position: "relative",
    border: `1.5px solid ${theme.palette.secondaryColor.lightBlue}`,
    height: "100%",
    borderRadius: 20,
    // padding: "clamp(0px, 1.25vw, 24px) clamp(0px, 5.21vw, 100px)",
    padding: "clamp(0px, 1.25vw, 24px) 130px",
    boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",

    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    ["&::after"]: {
      content: '""',
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage: "url(/header-background-horizontal.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0% 50%",
      zIndex: -1,
      borderRadius: 20,
      filter: "contrast(1.1)",
      opacity: 0.6,
    },
  };
});

const StyledImageWrapper = styled(Box)(() => {
  return {
    position: "relative",
    margin: "0 clamp(0px, 2.96vh, 32px)",
    width: "clamp(0px, 6.25vw, 120px)",
    cursor: "pointer",
    ["& .image-layout"]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "clamp(0px, 8.13vw, 156px)",
      transform: "translate(-50%, -50%)",
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
  };
});

const LanguageSectionWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: "translateY(-50%)",
  };
});

export default HorizontalHeader;
