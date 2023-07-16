// library
import { get } from "lodash";
import { useRouter } from "next/router";
import { Box, Container, Grid, Tab, styled } from "@mui/material";
import { Fragment, ReactNode, SyntheticEvent, useEffect, useMemo, useState } from "react";

// custom function
import { useMedia } from "@/hooks";
import { getSeoObject } from "@/libs";
import { TABITEMS2 } from "@/constants";
import { CoursePageProps } from "@/pages/khoa-hoc";
import courseImage from "@/public/image/Course_image.png";
import { CoursesTab } from "@/containers/Course/Components/CoursesTab";
import { CourseList } from "@/interfaces/responseSchema/courses/courseList";

import SEO from "@/components/SEO";
import ItemCardFish from "@/components/Card/ItemCardFish";
import {
  BackgroundPattern,
  CourseTitle,
  SubTitleCourseEn,
  SubTitleCourseVi,
  Tabs,
} from "@/components";

// image
import linePc from "@/public/image/gallery/galleryLinePC.svg";
import lineTablet from "@/public/image/gallery/galleryLineTabletCourse.svg";

const Course = (props: CoursePageProps) => {
  const { initData } = props;
  const router = useRouter();

  const { isMdDown } = useMedia();

  const [currentTab, setCurrentTab] = useState<number>(0);

  const courseListItem = get(initData[0], "items");
  const courseSEO = get(initData[0], "items[0].meta");
  const courseDetailItem = get(initData[1], "items");

  useEffect(() => {
    if (router.query.child_of == undefined) return;

    setCurrentTab(Number(router.query.child_of));
  }, [router.query]);

  const RenderCourseTitle = useMemo(() => {
    if (typeof courseListItem == "undefined") return null;
    return courseListItem.map(
      (el: CourseList): ReactNode => (
        <CourseTitleWrapper key={el.id}>
          <CourseTitle
            src={courseImage}
            data={el}
            subtitle={{ en: <SubTitleCourseEn />, vi: <SubTitleCourseVi /> }}
          />
        </CourseTitleWrapper>
      )
    );
  }, [courseListItem]);

  const renderTab = useMemo(() => {
    if (typeof courseDetailItem == "undefined") return null;
    return courseDetailItem.map((el, idx: number): ReactNode => {
      return (
        <Tab
          label={
            <ItemCardFish id={idx} data={TABITEMS2} idTab={currentTab} idItem={idx} />
          }
          id={String(el.id)}
          key={el.id}
          disableRipple
        />
      );
    });
  }, [courseDetailItem, currentTab]);

  const handleChangeTabs = (event: SyntheticEvent, newValue: any): void => {
    setCurrentTab(newValue);
  };

  return (
    <Fragment>
      <SEO {...getSeoObject(courseSEO)} />

      <Container>
        <StyledBackGroundPattern />

        {RenderCourseTitle}
      </Container>

      <Box position={"relative"}>
        <Grid container>
          <Grid item lg={0} md={0} sm={2} xs={0}></Grid>

          <Grid item lg={12} md={12} sm={10} xs={12}>
            <StyledTabsWrapper>
              <Tabs value={currentTab} onChange={handleChangeTabs}>
                {renderTab}
              </Tabs>
            </StyledTabsWrapper>
          </Grid>
        </Grid>
        <StyledLine></StyledLine>
      </Box>

      <Grid container justifyContent={"center"}>
        {isMdDown && <Grid item lg={0} md={4} sm={2} xs={0}></Grid>}

        <Grid item lg={12} md={8} sm={10} xs={12}>
          <Container>
            <CoursesTab
              courseDetailItem={courseDetailItem}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </Container>
        </Grid>
      </Grid>
    </Fragment>
  );
};
const CourseTitleWrapper = styled(Box)(({ theme }) => {
  return {
    "& .courseTitle": {
      // alignItems: "flex-start",
      "& .courseTitle__content": {
        textAlign: "left",
        // [theme.breakpoints.up("lg")]: { paddingTop: "0.8rem" },
        // [theme.breakpoints.down("sm")]: { paddingTop: "0.8rem" },
        // "& .heading": {
        //   [theme.breakpoints.down("sm")]: { fontSize: "2.18rem", lineHeight: 1.4 },
        // },
      },
    },
  };
});

const StyledTabsWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",

    borderBottom: 1,

    "& div.MuiTabs-flexContainer": {
      justifyContent: "center",
      flexDirection: "row",
      overflowX: "scroll",
      gap: "3rem",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      [theme.breakpoints.between("md", "lg")]: {
        gap: "1rem",
      },
      [theme.breakpoints.down("md")]: {
        gap: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
        flexWrap: "wrap",
        padding: "0 24px",
        gap: 0,
        "& .MuiButtonBase-root": {
          padding: "16px 8px",
          width: "50%",
        },
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

const StyledLine = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "-100%",
    zIndex: -1,

    width: "100%",
    height: "300px",
    transform: "translateY(10%)",

    backgroundImage: `url(${linePc.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",

    [theme.breakpoints.down("lg")]: {
      top: "-50%",

      height: "63%",

      backgroundImage: `url(${lineTablet.src})`,
      transform: "translateY(70%)",
    },

    [theme.breakpoints.down("md")]: {
      height: "92px",

      backgroundImage: `url(${lineTablet.src})`,
      backgroundSize: "contain",

      transform: "translateY(35%)",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  };
});

export default Course;
