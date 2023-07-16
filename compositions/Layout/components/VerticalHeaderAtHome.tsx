import { cloneDeep } from "lodash";
import { useWindowScroll } from "react-use";
import { isTablet, useMobileOrientation } from "react-device-detect";
import { MouseEventHandler, useCallback, useContext, useEffect, useState } from "react";

import { Box, styled } from "@mui/material";

import { Image } from "@/components";
import { SelectLanguage } from "@/compositions";
import { ContactFormModalContext } from "@/contexts";
import NavigationsComponent from "@/components/NavigationsComponent";

// image
import { useIntl, useMedia } from "@/hooks";
import logoImage from "@/public/fish-5.png";
import ellipse from "@/public/image/Ellipse.png";

const OFFSET = 1000;

const defaultTriggerPoint = {
  "gioi-thieu": 0,
  "khoa-hoc": 0,
  "tro-giup": 0,
};

const VerticalHeaderAtHome = () => {
  const { toggleOn } = useContext(ContactFormModalContext);
  const { messages } = useIntl();
  const { isMdUp, isSmUp } = useMedia();
  const { isLandscape } = useMobileOrientation();

  const [selectedId, setSelectedId] = useState<string | undefined>();

  const [triggerPoint, setTriggerPoint] = useState(defaultTriggerPoint);

  const { y } = useWindowScroll();

  const onGotoHandler: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.preventDefault();

      const sectionId = e.currentTarget.dataset.id;

      if (!sectionId) return;

      if (sectionId === "at-top") {
        if (isTablet && isLandscape) {
          const targetEl = document.querySelector<HTMLDivElement>("#home-container");

          if (!targetEl) return;

          targetEl.scrollTo({
            behavior: "smooth",
            left: 0,
          });

          return;
        }

        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });

        return;
      }

      const el = document.querySelector<HTMLDivElement>(`#${sectionId}`);

      if (!el) return;

      if (isTablet && isLandscape) {
        const targetEl = document.querySelector<HTMLDivElement>("#home-container");
        if (!targetEl) return;

        targetEl.scrollTo({
          behavior: "smooth",
          left: el.offsetLeft,
        });

        return;
      }

      if (isMdUp) {
        window.scrollTo({
          behavior: "smooth",
          top: el.offsetLeft,
        });
      } else if (isSmUp) {
        window.scrollTo({
          behavior: "smooth",
          top: el.offsetTop,
        });
      }
    },
    [isMdUp, isSmUp, isLandscape]
  );

  useEffect(() => {
    const faqEl = document.querySelector<HTMLDivElement>("#tro-giup");
    const courseEl = document.querySelector<HTMLDivElement>("#khoa-hoc");
    const introductionEl = document.querySelector<HTMLDivElement>("#gioi-thieu");

    const cloneTriggerPoint = cloneDeep(defaultTriggerPoint);

    if (introductionEl) {
      if (isMdUp) {
        cloneTriggerPoint["gioi-thieu"] = introductionEl.offsetLeft;
      } else if (isSmUp) {
        cloneTriggerPoint["gioi-thieu"] = introductionEl.offsetTop;
      }
    }

    if (courseEl) {
      if (isMdUp) {
        cloneTriggerPoint["khoa-hoc"] = courseEl.offsetLeft;
      } else if (isSmUp) {
        cloneTriggerPoint["khoa-hoc"] = courseEl.offsetTop;
      }
    }

    if (faqEl) {
      if (isMdUp) {
        cloneTriggerPoint["tro-giup"] = faqEl.offsetLeft;
      } else if (isSmUp) {
        cloneTriggerPoint["tro-giup"] = faqEl.offsetTop;
      }
    }

    setTriggerPoint(cloneTriggerPoint);
  }, [isMdUp, isSmUp]);

  const onChangeSelectedIdHandler = useCallback(
    (
      currentPosition: number,
      triggerPoint: typeof defaultTriggerPoint,
      selectedId?: string
    ) => {
      if (currentPosition < triggerPoint["gioi-thieu"] && selectedId != undefined) {
        setSelectedId(undefined);
      }

      if (
        currentPosition > triggerPoint["gioi-thieu"] &&
        currentPosition < triggerPoint["khoa-hoc"] - 1 &&
        selectedId !== "gioi-thieu"
      ) {
        setSelectedId("gioi-thieu");
      }

      if (
        currentPosition >= triggerPoint["khoa-hoc"] - 1 &&
        currentPosition < triggerPoint["tro-giup"] - OFFSET &&
        selectedId !== "khoa-hoc"
      ) {
        setSelectedId("khoa-hoc");
      }

      if (
        isMdUp
          ? currentPosition >= triggerPoint["tro-giup"] - OFFSET
          : currentPosition >= triggerPoint["tro-giup"] - 400 && selectedId !== "tro-giup"
      ) {
        setSelectedId("tro-giup");
      }
    },
    [isMdUp]
  );

  useEffect(() => {
    if (isTablet && isLandscape) return;

    onChangeSelectedIdHandler(y, triggerPoint, selectedId);
  }, [y, selectedId, triggerPoint, onChangeSelectedIdHandler, isLandscape]);

  useEffect(() => {
    if (!isTablet) return;

    const targetEl = document.querySelector<HTMLDivElement>("#home-container");

    if (!targetEl) return;

    const cb = (e: Event) => {
      const event = e.currentTarget as HTMLDivElement;

      const y = event.scrollLeft;

      onChangeSelectedIdHandler(y, triggerPoint, selectedId);
    };

    targetEl.addEventListener("scroll", cb);

    return () => {
      targetEl?.removeEventListener("scroll", cb);
    };
  }, [triggerPoint, selectedId, onChangeSelectedIdHandler]);

  return (
    <Container>
      <NavigationsComponent
        className={selectedId === "gioi-thieu" ? "is-active" : undefined}
        data-id="gioi-thieu"
        onClick={onGotoHandler}
      >
        {messages["header.introduce"]}
      </NavigationsComponent>

      <NavigationsComponent
        className={selectedId === "khoa-hoc" ? "is-active" : undefined}
        data-id="khoa-hoc"
        onClick={onGotoHandler}
      >
        {messages["header.course"]}
      </NavigationsComponent>

      <StyledImageWrapper data-id="at-top" onClick={onGotoHandler}>
        <Box className="image-layout">
          <Box className="image-wrapper">
            <Image src={logoImage} alt="" />
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
    borderRadius: 20,
    padding: "clamp(0px, 8.33vh, 90px) clamp(0px, 1.08vw, 8px)",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      borderRadius: "unset",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      padding: "6.45vw 1.08vw",
      paddingBottom: "8.06vw",
    },

    ["&::after"]: {
      content: '""',
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#FFF",
      backgroundImage: "url(/header-background.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      zIndex: -1,
      filter: "contrast(1.1)",
      opacity: 0.6,
      borderRadius: 20,

      [theme.breakpoints.down("md")]: {
        borderRadius: "unset",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
    },
  };
});

const StyledImageWrapper = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",
    height: "clamp(0px, 16.67vh, 180px)",
    ["& .image-layout"]: {
      width: "clamp(0px, 16.67vh, 180px)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%) scale(1.3)",

      ...(isTablet && {
        transform: "translate(-50%, -50%) scale(1.45)",
      }),

      [theme.breakpoints.down("md")]: {
        width: "17.74vw",
        transform: "translate(0, -50%) scale(1)",
        left: "5%",
      },
    },
    ["& .image-wrapper"]: {
      margin: "0 auto",
      backgroundImage: `url(${ellipse.src})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      position: "relative",
      aspectRatio: "1 / 1",
      width: "clamp(0px, 16.67vh, 180px)",
      height: "clamp(0px, 16.67vh, 180px)",

      [theme.breakpoints.down("md")]: {
        width: "17.74vw",
        height: "17.74vw",
      },

      ["& img"]: {
        objectFit: "contain",
        transition: "transform linear 0.2s",
      },
      "&:hover > img": {
        transform: "scale(1.15) !important",
      },
    },
    [theme.breakpoints.down("md")]: {
      height: "17.74vw",
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

export default VerticalHeaderAtHome;
