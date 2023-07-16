import { Box, Drawer, Typography, styled } from "@mui/material";
import {
  Fragment,
  MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/router";
import { useIntl, useToggle } from "@/hooks";
import { Image, MenuLine } from "@/components";
import { SelectLanguage } from "@/compositions";

import imageLogo from "@/public/fish-5.png";
import MenuIcon from "@/components/Icons/Menu";
import ellipse from "@/public/image/Ellipse.png";
import { ContactFormModalContext } from "@/contexts";

const VerticalHeaderOnMobile = () => {
  const router = useRouter();

  const { messages } = useIntl();

  const [state, setState] = useState<string>(router.asPath);

  const { toggleOn: toggleFormContactOn } = useContext(ContactFormModalContext);

  const {
    toggleOff: toggleMenuOff,
    toggleOn: toggleMenuOn,
    on: isOpenMenu,
  } = useToggle();

  useEffect(() => {
    setState(router.asPath);
  }, [router.asPath]);

  const onGotoHandler: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const path = e.currentTarget.dataset.id;

      toggleMenuOff();
      path && router.push(path);
    },
    [router, toggleMenuOff]
  );

  const onGotoHandlerAtHome: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.preventDefault();

      const sectionId = e.currentTarget.dataset.id;

      if (!sectionId) return;

      const el = document.querySelector<HTMLDivElement>(`#${sectionId}`);

      if (!el) return;

      toggleMenuOff();

      window.scrollTo({
        behavior: "smooth",
        top: sectionId === "khoa-hoc" ? el.offsetTop - 80 : el.offsetTop,
      });

      setState(sectionId);
    },
    [toggleMenuOff]
  );

  const onToggleFormContactOnHandler = useCallback(() => {
    toggleFormContactOn();
    toggleMenuOff();
  }, [toggleFormContactOn, toggleMenuOff]);

  const renderMenu = useMemo(() => {
    if (router.pathname === "/") {
      return (
        <Fragment>
          <NavigationItem
            dataId="gioi-thieu"
            onClick={onGotoHandlerAtHome}
            selectedId={state}
          >
            {messages["header.introduce"]}
          </NavigationItem>
          <NavigationItem
            dataId="khoa-hoc"
            onClick={onGotoHandlerAtHome}
            selectedId={state}
          >
            {messages["header.course"]}
          </NavigationItem>
          <NavigationItem
            dataId="tro-giup"
            onClick={onGotoHandlerAtHome}
            selectedId={state}
          >
            {messages["header.faqs"]}
          </NavigationItem>
          <NavigationItem onClick={onToggleFormContactOnHandler} selectedId={state}>
            {messages["header.contact"]}
          </NavigationItem>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <NavigationItem dataId="/khoa-hoc" onClick={onGotoHandler} selectedId={state}>
          {messages["header.course"]}
        </NavigationItem>
        <NavigationItem dataId="/thu-vien" onClick={onGotoHandler} selectedId={state}>
          {messages["header.gallery"]}
        </NavigationItem>
        <NavigationItem dataId="/tro-giup" onClick={onGotoHandler} selectedId={state}>
          {messages["header.faqs"]}
        </NavigationItem>
        <NavigationItem onClick={onToggleFormContactOnHandler} selectedId={state}>
          {messages["header.contact"]}
        </NavigationItem>
      </Fragment>
    );
  }, [
    router.pathname,
    onGotoHandler,
    onToggleFormContactOnHandler,
    onGotoHandlerAtHome,
    state,
  ]);

  return (
    <Container>
      <StyledMenuTitleBlock onClick={toggleMenuOn}>
        {/* <Typography variant="m_title2">MENU</Typography> */}
        <MenuIcon />
        <Box className="svg-wrapper">
          <MenuLine />
        </Box>
      </StyledMenuTitleBlock>

      <StyledImageWrapper data-id="/" onClick={onGotoHandler}>
        <Box className="image-layout">
          <Box className="image-wrapper">
            <Image src={imageLogo} alt="" />
          </Box>
        </Box>
      </StyledImageWrapper>

      <StyledDrawer anchor="left" open={isOpenMenu} onClose={toggleMenuOff}>
        <Box className="drawer-wrapper">{renderMenu}</Box>
      </StyledDrawer>

      <SelectLanguageWrapper>
        <SelectLanguage />
      </SelectLanguageWrapper>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    padding: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: theme.palette.secondaryColor.lightBlue,

    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",

    backdropFilter: "blur(5px)",
    boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",

    height: 155,

    ["&::after"]: {
      content: '""',
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: -1,

      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,

      backgroundImage: "url(/header-background-horizontal.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0% 50%",

      filter: "contrast(1.1)",
      opacity: 0.6,
    },
  };
});

const StyledMenuTitleBlock = styled(Box)(() => {
  return {
    // background:
    //   "linear-gradient(180deg, #83D2FF -23.08%, #1C98DD 34.39%, #1C52DD 81.19%, #055CBB 117.31%)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    // width: "81px",
    ["& svg"]: {
      width: "59px",
    },
    ["& .svg-wrapper"]: {
      marginTop: -6,
    },
  };
});

const SelectLanguageWrapper = styled(Box)(() => {
  return {
    marginBottom: 12,
  };
});

const StyledImageWrapper = styled(Box)(() => {
  return {
    cursor: "pointer",
    ["& .image-layout"]: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: "35.2vw",
      transform: "translate(-50%, 20%)",
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

const StyledDrawer = styled(Drawer)(() => {
  return {
    ["& .MuiDrawer-paper"]: {
      height: "fit-content",
      maxHeight: "17rem",
      top: 155 + 20,
      padding: "24px 32px 24px 16px",
      boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",
      background:
        "linear-gradient(180deg, rgba(186, 230, 255, 0.5) 22.19%, rgba(98, 178, 223, 0.5) 100%)",
      backdropFilter: "blur(10px)",

      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      borderWidth: "1.5px 1.5px 1.5px 0px",
      borderStyle: "solid",
      borderColor: "#83D2FF",
    },

    ["& .drawer-wrapper"]: {
      display: "flex",
      flexDirection: "column",
      rowGap: 40,
    },
  };
});

interface NavigationItemProps {
  children?: React.ReactNode;
  dataId?: any;
  selectedId?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const NavigationItem = (props: NavigationItemProps) => {
  const { children, dataId, selectedId, onClick } = props;

  return (
    <StyledNavigationItem
      data-id={dataId}
      onClick={onClick}
      className={selectedId?.includes(dataId) ? "is-active" : undefined}
    >
      <Box>
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12.7525 24C12.2524 24 11.7522 24 11.2521 24C11.1845 23.9858 11.1168 23.968 11.0492 23.9591C10.5402 23.8843 10.0258 23.8398 9.52388 23.7348C7.44147 23.2987 5.60469 22.3589 4.0242 20.9367C1.97205 19.0908 0.685235 16.8089 0.188662 14.0891C0.10679 13.6459 0.0622941 13.1955 0 12.7488C0 12.2486 0 11.7484 0 11.2482C0.0124588 11.1877 0.0338168 11.1272 0.0391563 11.0667C0.231378 8.64057 1.0768 6.46188 2.60389 4.56976C4.90877 1.71646 7.90779 0.164315 11.5796 0.0112367C14.5252 -0.111582 17.1807 0.773067 19.4696 2.63314C22.3885 5.00408 23.9227 8.09234 23.9975 11.8605C24.0509 14.5145 23.2606 16.9281 21.6819 19.0606C19.7739 21.6397 17.2305 23.231 14.0696 23.8167C13.6335 23.8968 13.1921 23.9413 12.7525 24ZM18.003 11.9976C18.003 8.70109 15.303 6.00086 12.0067 5.9973C8.71049 5.99374 6.00515 8.69219 5.99981 11.9869C5.99447 15.2923 8.70337 18.0015 12.0067 17.9997C15.3048 17.9961 18.0048 15.2923 18.003 11.9976ZM16.96 2.69188C13.6388 1.10058 10.3622 1.10058 7.04813 2.69366C7.81346 3.51067 8.55743 4.30454 9.2747 5.06815C11.1186 4.29564 12.9145 4.29564 14.7299 5.06993C15.4561 4.29386 16.1929 3.51067 16.96 2.69188ZM21.2975 16.9424C23.0417 13.5604 22.805 9.62134 21.148 7.08487C21.1337 7.09021 21.1159 7.09199 21.107 7.10089C20.404 7.80042 19.6992 8.49995 19.0033 9.2066C18.9623 9.24754 18.9588 9.3579 18.9819 9.4202C19.0531 9.62668 19.1652 9.81892 19.2222 10.0272C19.6671 11.6131 19.6244 13.1724 18.9285 14.7174C19.701 15.4436 20.4894 16.1859 21.2975 16.9424ZM2.71602 7.04037C0.975348 10.4152 1.18893 14.3507 2.84239 16.8925C3.57924 16.1521 4.32143 15.4098 5.06006 14.6676C4.97285 14.4504 4.85716 14.2172 4.78419 13.9716C4.34457 12.48 4.42644 10.9955 4.87674 9.52166C4.93013 9.34544 4.90877 9.24398 4.77885 9.1176C4.2182 8.57293 3.67001 8.01758 3.12004 7.464C2.98834 7.33229 2.86375 7.19523 2.71602 7.04037ZM7.05169 21.298C8.98103 22.2556 10.9798 22.6632 13.0924 22.4425C14.4647 22.3001 15.7479 21.8783 16.9173 21.1645C16.1644 20.408 15.4276 19.6675 14.6836 18.9199C14.5839 18.968 14.4736 19.025 14.3597 19.0748C14.2386 19.1264 14.1141 19.178 13.9877 19.2154C12.4784 19.6569 10.9816 19.5679 9.49006 19.1229C9.40641 19.0979 9.27114 19.0908 9.2213 19.1389C8.50225 19.842 7.7921 20.5575 7.05169 21.298Z" />
        </svg>
      </Box>
      <Typography display="block" fontSize="18px" lineHeight="20px" color="#055CBB">
        {children}
      </Typography>
    </StyledNavigationItem>
  );
};

const StyledNavigationItem = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    columnGap: 8,
    cursor: "pointer",

    ["& svg"]: {
      width: 18,
      height: 18,
      fill: "#055CBB",
    },

    ["&.is-active"]: {
      "& .MuiTypography-root": {
        color: theme.palette.primary.main,
      },

      ["& svg"]: {
        fill: theme.palette.primary.main,
      },
    },
  };
});

export default VerticalHeaderOnMobile;
