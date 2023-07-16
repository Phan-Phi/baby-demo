import { get } from "lodash";
import { useMeasure } from "react-use";
import { useRouter } from "next/router";
import { Container, Grid, Tab, styled } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  IPage,
  responseSchema,
  GalleryDetailPage,
  GalleryListingPage,
} from "@/interfaces";
import { useMedia } from "@/hooks";
import { getSeoObject } from "@/libs";
import fish1 from "@/public/fish-9.png";
import { imageFishGallery } from "@/constants";

import CourseTitle from "@/components/CourseTitle";
import GalleryVideo from "./components/GalleryVideo";
import GalleryImage from "./components/GalleryImage";
import BackgroundTab from "./components/BackgroundTab";
import ItemCardFish from "@/components/Card/ItemCardFish";
import {
  Box,
  SEO,
  Tabs,
  TabPanel,
  SubTitleGalleryEn,
  BackgroundPattern,
  SubTitleGalleryVi,
} from "@/components";

interface PropsWrapperContainerTab {
  widthWrapper: number;
}

export type GalleryProps = IPage<
  [responseSchema<GalleryListingPage>, responseSchema<GalleryDetailPage>]
>;

const Gallery = ({ initData }: GalleryProps) => {
  const dataListing = get(initData, "[0].items[0]");
  const dataSEO = get(initData, "[0].items[0].meta");
  const dataDetail = get(initData, "[1].items");

  const router = useRouter();
  const { isMdDown, isLgDown, isLgUp } = useMedia();

  const [currentTab, setCurrentTab] = useState<number>(initData[1].items[0].id);

  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const [refWrapper, { width: widthWrapper }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    setCurrentTab(initData[1].items[0].id);
  }, [dataDetail, router.locale]);

  const onChangeTabHandler = useCallback(
    (e: React.SyntheticEvent, value: number): void => {
      setCurrentTab(value);
    },
    []
  );

  const renderTab = useMemo(() => {
    if (dataDetail == undefined) return null;
    const data: GalleryDetailPage[] = dataDetail;

    return (
      <Tabs value={currentTab} onChange={onChangeTabHandler}>
        {data.map((el: GalleryDetailPage, idx: number) => {
          return (
            <Tab
              label={
                <ItemCardFish
                  id={idx}
                  data={imageFishGallery}
                  idTab={currentTab}
                  idItem={el.id}
                />
              }
              key={idx}
              value={el.id}
              disableRipple
            />
          );
        })}
      </Tabs>
    );
  }, [currentTab, dataDetail, onChangeTabHandler, router.locale]);

  const renderTabPanelContent = useMemo(() => {
    if (dataDetail == undefined) return;

    return (
      <TabPanel value={currentTab} index={currentTab}>
        <GalleryVideo data={dataDetail} currentTab={currentTab} />

        <GalleryImage widthForModal={width} data={dataDetail} currentTab={currentTab} />
      </TabPanel>
    );
  }, [currentTab, dataDetail, width, router.locale]);

  return (
    <Wrapper>
      <WrapperContainer>
        <SEO {...getSeoObject(dataSEO)} />
        <StyledBackGroundPattern />

        <WrapperCourseTitle>
          <CourseTitle
            src={fish1}
            data={dataListing}
            subtitle={{ en: <SubTitleGalleryEn />, vi: <SubTitleGalleryVi /> }}
          />
        </WrapperCourseTitle>
      </WrapperContainer>

      <WrapperTab position="relative">
        {isLgUp && <Container>{renderTab}</Container>}

        {isLgDown && (
          <Grid container justifyContent="center">
            {isMdDown && <Grid item xs={12} sm={2} md={4} lg={12}></Grid>}

            <Grid item xs={12} sm={10} md={8} lg={12}>
              <WrapperContainerTab widthWrapper={widthWrapper}>
                {renderTab}
              </WrapperContainerTab>
            </Grid>
          </Grid>
        )}

        <StyledBox>
          <BackgroundTab />
        </StyledBox>
      </WrapperTab>

      <WrapperContainer ref={ref}>
        <Grid container justifyContent="center">
          {isMdDown && <Grid item xs={12} sm={2} md={4.5} lg={12}></Grid>}

          <Grid item xs={12} sm={10} md={7.5} lg={12} ref={refWrapper}>
            <Box>{renderTabPanelContent}</Box>
          </Grid>
        </Grid>
      </WrapperContainer>
    </Wrapper>
  );
};
export default Gallery;

const Wrapper = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.up("md")]: {
      marginBottom: "11rem",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "9.8rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  };
});

const WrapperCourseTitle = styled(Box)(({ theme }) => {
  return {
    "& .MuiTypography-root": {
      textAlign: "left",
    },
  };
});

const WrapperContainer = styled(Container)(({ theme }) => {
  return {
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row !important",
      justifyContent: "center !important",
      gap: "2rem",

      [theme.breakpoints.down("sm")]: {
        display: "block",
        overflow: "scroll",
      },

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  };
});

const StyledBackGroundPattern = styled(BackgroundPattern)(({ theme }) => {
  return {
    position: "fixed",
    inset: 0,
    zIndex: -1,
    backgroundColor: theme.palette.secondaryColor.background,
  };
});

const StyledBox = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "-95%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: -1,
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("lg")]: {
      top: "20%",
    },
    [theme.breakpoints.down("md")]: {
      top: "-12%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-20%",
    },
  };
});

const WrapperTab = styled(Box)(({ theme }) => {
  return {
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row !important",
      justifyContent: "center !important",
      gap: "4rem",
      [theme.breakpoints.between("md", 1100)]: {
        gap: "1.6rem",
      },
      [theme.breakpoints.down("md")]: {
        gap: "1.6rem",
      },
      [theme.breakpoints.down("sm")]: {
        gap: "0",
      },
    },
  };
});

const WrapperContainerTab = styled(Container, {
  shouldForwardProp: (propName) => propName !== "widthWrapper",
})<PropsWrapperContainerTab>(({ theme, widthWrapper }) => {
  return {
    width: widthWrapper,

    [theme.breakpoints.down("sm")]: {
      padding: 0,

      "& .MuiButtonBase-root": {
        padding: "12px 10px",
      },
    },
  };
});
