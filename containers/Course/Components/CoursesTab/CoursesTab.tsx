// library
import { styled } from "@mui/material";
import React, { Dispatch, Fragment, SetStateAction, useCallback, useMemo } from "react";

// custom function
import { TabPanel } from "@/components";
import { CourseItem, HeadingCourseTab } from "@/containers/Course/Components/CoursesTab";
import {
  CourseDetail,
  SUB_COURSE_ITEM,
} from "@/interfaces/responseSchema/courses/courseDetail";
import CoursePagination from "./CoursePagination";

interface CoursesTabProps {
  courseDetailItem: Array<CourseDetail>;
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
}

const CoursesTab = (props: CoursesTabProps) => {
  const { currentTab, courseDetailItem, setCurrentTab } = props;

  const keyCourseDetailItems = Object.keys(courseDetailItem);
  const parseCurrentIndex = +keyCourseDetailItems[currentTab];
  const selectedCurrentArray = courseDetailItem[parseCurrentIndex];

  const renderCourseItem = useMemo(() => {
    if (typeof selectedCurrentArray.subcourses == "undefined") return null;

    return (
      <TabPanel value={currentTab} index={parseCurrentIndex}>
        {selectedCurrentArray.subcourses.map((el: SUB_COURSE_ITEM, idx: number) => (
          <CourseItem
            currentTab={currentTab}
            subImages={selectedCurrentArray.subimages}
            data={el}
            key={idx}
          />
        ))}
      </TabPanel>
    );
  }, [selectedCurrentArray?.subcourses, currentTab]);

  const handleChangePrevCourse = useCallback(() => {
    if (parseCurrentIndex <= 0) {
      setCurrentTab(courseDetailItem.length - 1);
      // window.scrollTo(0, 0);
    } else {
      setCurrentTab((prev: number) => prev - 1);
      // window.scrollTo(0, 0);
    }
  }, [parseCurrentIndex]);

  const handleChangeNextCourse = useCallback(() => {
    if (parseCurrentIndex >= courseDetailItem.length - 1) {
      setCurrentTab(0);
      // window.scrollTo(0, 0);
    } else {
      setCurrentTab((prev: number) => prev + 1);
      // window.scrollTo(0, 0);
    }
  }, [parseCurrentIndex]);

  return (
    <Fragment>
      <HeadingCourseTab
        description={selectedCurrentArray.description}
        title={selectedCurrentArray.title}
      />

      {renderCourseItem}

      <StyledCoursePagination
        courseDetailItem={courseDetailItem}
        handleChangeNextCourse={handleChangeNextCourse}
        handleChangePrevCourse={handleChangePrevCourse}
        parseCurrentIndex={parseCurrentIndex}
      />
    </Fragment>
  );
};

const StyledCoursePagination = styled(CoursePagination)(({ theme }) => {
  return {
    marginBottom: theme.spacing(18),

    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      marginTop: 0,
    },
  };
});

export default CoursesTab;
