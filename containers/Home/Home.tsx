import React, { useContext, useMemo } from "react";
import { Box, styled } from "@mui/material";
import { isTablet } from "react-device-detect";

import { get } from "lodash";

import { useMedia } from "@/hooks";
import { getSeoObject } from "@/libs";

import SEO from "@/components/SEO";
import HomeTablet from "./HomeTablet/HomeTablet";
import HomeMobile from "./HomeMobile/HomeMobile";
import HomeDesktop from "./HomeDesktop/HomeDesktop";

import { FaqPage } from "@/interfaces/responseSchema/faq";
import { HomePage } from "@/interfaces/responseSchema/home";
import { DetailCousePage, IPage, ListingCousePage, responseSchema } from "@/interfaces";
import ModalVideo from "@/compositions/Modal/ModalVideo";
import { ColorModeContext } from "@/contexts/DeviceContext";
import { useWindowSize } from "react-use";

export type HomePageProps = IPage<
  [
    responseSchema<HomePage>,
    responseSchema<ListingCousePage>,
    responseSchema<DetailCousePage>,
    responseSchema<FaqPage>
  ]
>;

const Home = (props: HomePageProps) => {
  const { initData } = props;
  const { width } = useWindowSize();
  console.log("🚀 ~ file: Home.tsx:34 ~ Home ~ width:", width);
  const { isSmDown, isMdDown, isSm_HoDown, isMdUp } = useMedia();

  const data = get(initData, "[0].items[0]");
  const { currentMode } = useContext(ColorModeContext);

  const renderContent = useMemo(() => {
    if (data == undefined) return null;

    if (width <= 600) return <HomeMobile {...props} />;
    if (currentMode === "trie") {
      return <HomeMobile {...props} />;
    }

    if (isMdDown) {
      return <HomeTablet {...props} />;
    }

    return <HomeDesktop {...props} />;
  }, [data, props, isMdDown, isSmDown, currentMode]);

  if (data == undefined) return null;

  const { meta } = data;

  return (
    <Container id="home-container">
      <SEO {...getSeoObject(meta)} />
      {renderContent}

      {/* {isSm_HoDown && <HomeMobile {...props} />} */}
      {/* {isMdDown && <HomeTablet {...props} />} */}
      {/* {isMdUp && <HomeDesktop {...props} />} */}
    </Container>
  );
};

export default Home;

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    overflow: "hidden",

    [theme.breakpoints.between(900, 1368)]: {
      ...(isTablet && {
        overflow: "scroll hidden",
        height: "-webkit-fill-available",
        maxHeight: "-webkit-fill-available",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        ["&::-webkit-scrollbar"]: {
          display: "none",
        },
      }),
    },
  };
});
