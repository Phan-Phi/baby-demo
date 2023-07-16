import React, { useMemo } from "react";
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

  const { isSmDown, isMdDown } = useMedia();

  const data = get(initData, "[0].items[0]");

  const renderContent = useMemo(() => {
    if (data == undefined) return null;

    if (isSmDown) return <HomeMobile {...props} />;

    if (isMdDown) {
      return <HomeTablet {...props} />;
    }

    return <HomeDesktop {...props} />;
  }, [data, props, isMdDown, isSmDown]);

  if (data == undefined) return null;

  const { meta } = data;

  return (
    <Container id="home-container">
      <SEO {...getSeoObject(meta)} />
      {renderContent}
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
