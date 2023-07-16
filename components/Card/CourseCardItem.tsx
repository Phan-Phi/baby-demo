import { memo } from "react";
import { Box, Typography, styled, useTheme } from "@mui/material";

import { Image } from "@/components";
import { SUB_COURSE_ITEM } from "@/interfaces/responseSchema/courses/courseDetail";
import RenderHTML from "@/compositions/Render/RenderHTML";

interface CourseCardItemProps {
  data: SUB_COURSE_ITEM;
  schedule: any;
  note: string;
  isRow: boolean;
}

const CourseCardItem2 = (props: CourseCardItemProps) => {
  const { data, schedule, note, isRow } = props;

  const theme = useTheme();
  const { value } = data;
  const { description, image, name } = value;

  return (
    <Container isRow={isRow}>
      <ImageWrapper isRow={isRow}>
        <Image src={image} alt="" style={{ objectFit: "cover" }} />
      </ImageWrapper>

      <StyledHeadingWrapper
        variant="title2"
        className={name ? "active" : ""}
        color={theme.palette.primary.main}
      >
        {name}
      </StyledHeadingWrapper>

      <StyledContactWrapper className={schedule.length > 0 || note ? "active" : ""}>
        <Box className={"note"} gridColumn={"span 2"} display={note ? "block" : "none"}>
          <Typography variant={"body2"}>{note}</Typography>
        </Box>
        {schedule}
      </StyledContactWrapper>

      <StyledRenderHTML isRow={isRow} data={description} />
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isRow",
})<Pick<CourseCardItemProps, "isRow">>(({ isRow, theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: "0.7fr 1.3fr",
    gridTemplateRows: "auto auto 55%",
    gridColumnGap: 40,

    [theme.breakpoints.down("lg")]: {
      gridColumnGap: 20,
    },

    [theme.breakpoints.between("xs", "md")]: {
      gridColumnGap: 15,
      gridTemplateRows: "none",
      gridTemplateColumns: "0.9fr 1.1fr",

      gridRowGap: isRow ? "20px" : "unset",
    },

    [theme.breakpoints.down("sm")]: {
      gridRowGap: isRow ? "15px" : "unset",
    },

    ["& p"]: {
      ...theme.typography.body2,
      margin: 0,
      textAlign: "justify",

      [theme.breakpoints.down("lg")]: {
        ...theme.typography.m_body1,
      },

      [theme.breakpoints.down("sm")]: {
        ...theme.typography.title3,
      },
    },
  };
});

const ImageWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isRow",
})<Pick<CourseCardItemProps, "isRow">>(({ isRow, theme }) => {
  return {
    gridRow: "span 3",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",

    aspectRatio: "4 / 2.65",
    border: "4px solid #FF6E4B",

    [theme.breakpoints.between("xs", "md")]: {
      gridColumn: isRow ? "span 2" : "unset",

      border: "2px solid #FF6E4B",
      borderRadius: "10px",
    },
  };
});

const StyledHeadingWrapper = styled(Typography)(({ theme }) => {
  return {
    display: "none",
    marginBottom: theme.spacing(1),

    "&.active": {
      display: "block",
    },

    [theme.breakpoints.between("xs", "lg")]: {
      textAlign: "center",
      gridArea: "1",
      gridColumn: "span 2",
    },

    [theme.breakpoints.down("lg")]: {
      ...theme.typography.body1,
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.body2,
    },
  };
});

const StyledRenderHTML = styled(RenderHTML, {
  shouldForwardProp: (propName) => propName !== "isRow",
})<Pick<CourseCardItemProps, "isRow">>(({ isRow, theme }) => {
  return {
    textAlign: "justify",
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("lg")]: {
      ...theme.typography.m_body1,
    },
    [theme.breakpoints.down("md")]: {
      gridColumn: isRow ? "span 2" : "unset",
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_body2,
    },

    "& p": {
      [theme.breakpoints.down("lg")]: {
        ...theme.typography.m_body1,
      },

      [theme.breakpoints.down("sm")]: {
        ...theme.typography.m_body2,
      },
    },
  };
});

const StyledContactWrapper = styled(Box)(({ theme }) => {
  return {
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: 8,
    padding: 8,
    columnGap: 5,
    maxWidth: 500,

    display: "none",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",

    borderRadius: "10px",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,

    [theme.breakpoints.down("lg")]: {
      padding: "8px 15px",
      marginBottom: 10,
    },

    [theme.breakpoints.down("md")]: {
      gridArea: "2 / 1",
      gridColumn: "span 2",

      margin: "0 auto 8px",
      justifyContent: "center",
      textAlign: "center",

      padding: "8px 35px",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
      padding: "8px",
      justifyItems: "center",
    },

    "&.active": {
      display: "grid",
      justifyItems: "start",
    },

    ["& p"]: {
      color: theme.palette.common.white,

      [theme.breakpoints.down("md")]: {
        ...theme.typography.body2,
      },

      [theme.breakpoints.down("sm")]: {
        ...theme.typography.m_body2,
      },
    },
  };
});

export default memo(CourseCardItem2);
