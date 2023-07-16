// library
import React, { Fragment, useMemo } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

// custom function
import { CalendarIcon, ClockIcon, CourseCardItem, Image, Spacing } from "@/components";
import { SUB_COURSE_ITEM } from "@/interfaces/responseSchema/courses/courseDetail";
import { useMedia } from "@/hooks";
import { FounderBlocks, Schedule } from "@/interfaces";

interface CourseItemProps {
  data: SUB_COURSE_ITEM;
  subImages: Array<FounderBlocks>;
  currentTab: number;
}

const CourseItem = (props: CourseItemProps) => {
  const { data, subImages, currentTab } = props;
  const { value } = data;
  const { schedule } = value;

  const { isSmDown } = useMedia();

  const renderSchedule = useMemo(() => {
    if (typeof schedule == "undefined") return null;

    return schedule.map((el: Schedule, idx: number) => {
      return <ScheduleComponent duration={el.duration} key={idx} weekday={el.weekday} />;
    });
  }, [schedule]);

  const renderSubImage = useMemo(() => {
    if (typeof subImages == "undefined") return null;

    return subImages.map((el: any, idx: number) => {
      return (
        <StyledImageWrapper key={idx}>
          <Image src={el.value} style={{ objectFit: "cover" }} />
        </StyledImageWrapper>
      );
    });
  }, [subImages]);

  return (
    <Fragment>
      <Stack gap={8}>
        <CourseCardItem
          data={data}
          note={value.note}
          schedule={renderSchedule}
          isRow={currentTab === 3}
        />
      </Stack>

      <StyledRenderSubImageWrapper className={subImages.length > 0 ? "active" : ""}>
        {renderSubImage}
      </StyledRenderSubImageWrapper>

      <Spacing spacing={isSmDown ? 3 : 5} />
    </Fragment>
  );
};

const ScheduleComponent = (props: Schedule) => {
  const { duration, weekday } = props;
  return (
    <Fragment>
      <StyledMenuItemBlock>
        <Stack className={duration !== "" ? "active" : ""}>
          <ClockIcon />
          <Typography variant="body2">{duration}</Typography>
        </Stack>
      </StyledMenuItemBlock>

      <StyledMenuItemBlock>
        <Stack className={weekday !== "" ? "active" : ""}>
          <CalendarIcon />
          <Typography variant="body2">{weekday}</Typography>
        </Stack>
      </StyledMenuItemBlock>
    </Fragment>
  );
};

const StyledMenuItemBlock = styled(Box)(({ theme }) => {
  return {
    "& > div": {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,

      display: "none",

      "&.active": {
        display: "flex",
      },

      [theme.breakpoints.down("lg")]: {
        gap: 5,
      },
    },

    ["& svg"]: {
      [theme.breakpoints.down("md")]: {
        width: 20,
        height: 20,
      },
      [theme.breakpoints.down("sm")]: {
        width: 15,
        height: 15,
      },
    },

    ["& p"]: {
      color: theme.palette.background.default,
      textAlign: "left",

      [theme.breakpoints.down("lg")]: {
        ...theme.typography.m_body1,
      },

      [theme.breakpoints.down("sm")]: {
        ...theme.typography.title3,
      },
    },
  };
});

const StyledRenderSubImageWrapper = styled(Box)(({ theme }) => {
  return {
    display: "none",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "50px",
    marginTop: theme.spacing(12),

    ["&.active"]: {
      display: "grid",
    },

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      gap: "20px",
      marginTop: theme.spacing(3),
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  };
});

const StyledImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",

    aspectRatio: "4 / 2.65",

    borderRadius: "20px",
    overflow: "hidden",
    border: "4px solid #FF6E4B",

    [theme.breakpoints.between("xs", "md")]: {
      borderRadius: "10px",
      border: "2px solid #FF6E4B",
    },
  };
});

export default CourseItem;
