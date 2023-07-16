import { MouseEventHandler, useEffect, useRef } from "react";
import { Box, BoxProps, Stack, Typography, styled } from "@mui/material";

import { CourseDetail } from "@/interfaces/responseSchema/courses/courseDetail";

interface CoursePaginationProps extends BoxProps {
  courseDetailItem: Array<CourseDetail>;
  handleChangePrevCourse: MouseEventHandler<HTMLDivElement> | undefined;
  handleChangeNextCourse: MouseEventHandler<HTMLDivElement> | undefined;
  parseCurrentIndex: number;
}

interface StyledButtonProps {
  leftAnimation: string;
}

const CoursePagination = (props: CoursePaginationProps) => {
  const btnPrev = useRef<any>();
  const btnNext = useRef<any>();

  const {
    courseDetailItem,
    handleChangePrevCourse,
    handleChangeNextCourse,
    parseCurrentIndex,
    ...restProps
  } = props;

  const showSubtitle = (currentIndex: number): string => {
    const courseDetailLength = courseDetailItem.length - 1;

    if (currentIndex < 0) return courseDetailItem[courseDetailLength].subtitle;
    if (currentIndex > courseDetailLength) return courseDetailItem[0].subtitle;

    return courseDetailItem[currentIndex].subtitle;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    btnNext.current.classList.remove("active");
    btnPrev.current.classList.remove("active");
  }, [parseCurrentIndex]);

  return (
    <Container {...restProps}>
      <StyledButton
        ref={btnPrev}
        leftAnimation={"-10px"}
        onClick={handleChangePrevCourse}
        onMouseEnter={() => {
          btnPrev.current.classList.add("active");
        }}
        onMouseLeave={() => {
          btnPrev.current.classList.remove("active");
        }}
      >
        <StyledFishIcon />

        <StyledSubtitle>{showSubtitle(parseCurrentIndex - 1)}</StyledSubtitle>
      </StyledButton>

      <StyledButton
        className="btnNext"
        ref={btnNext}
        onMouseEnter={() => {
          btnNext.current.classList.add("active");
        }}
        onMouseLeave={() => {
          btnNext.current.classList.remove("active");
        }}
        leftAnimation={"10px"}
        onClick={handleChangeNextCourse}
      >
        <StyledFishIcon
          sx={{
            transform: "scaleX(-1)",
          }}
        />
        <StyledSubtitle>{showSubtitle(parseCurrentIndex + 1)}</StyledSubtitle>
      </StyledButton>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyContent: "space-between",
  };
});

const StyledButton = styled(Stack, {
  shouldForwardProp: (propName) => propName !== "leftAnimation",
})<StyledButtonProps>(({ leftAnimation, theme }) => {
  return {
    position: "relative",

    width: "fit-content",
    alignItems: "flex-end",
    gap: "10px",

    transition: "all linear 0.2s",

    cursor: "pointer",

    ["&:first-of-type"]: {
      flexDirection: "row",
      justifySelf: "flex-start",
    },

    ["&:last-child"]: {
      flexDirection: "row-reverse",
      justifySelf: "flex-end",
      textAlign: "right",
    },

    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },

    "&.active": {
      transform: `translateX(${leftAnimation})`,

      "& > .MuiTypography-root": {
        backgroundImage: theme.palette.gradientColor.gradientOrange,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
      },

      "& > .MuiBox-root": {
        background: "url(/image/gallery/iconFishGallery2.png)",
        width: "50px",
        height: "31px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down("md")]: {
          width: 30,
          height: 20,
        },

        [theme.breakpoints.down("sm")]: {
          minWidth: 25,
          width: 25,
          height: 15,
        },
      },
    },
  };
});

const StyledFishIcon = styled(Box)(({ theme }) => {
  return {
    backgroundImage: "url(/image/gallery/iconFishGallery.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: 50,
    height: 31,

    [theme.breakpoints.down("md")]: {
      width: 30,
      height: 20,
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: 25,
      width: 25,
      height: 15,
    },
  };
});

const StyledSubtitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      ...theme.typography.body2,
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_body1,
    },
  };
});

export default CoursePagination;
