// library
import { memo } from "react";
import { Stack, StackProps, styled } from "@mui/material";

// custom function
import { Headline } from "@/components";
import RenderHTML from "@/compositions/Render/RenderHTML";

interface HeadingCourseTabProps extends StackProps {
  title: string;
  description: string;
}

const HeadingCourseTab = (props: HeadingCourseTabProps) => {
  const { title, description, ...restProps } = props;

  return (
    <Contaner className={description ? "active" : ""} {...restProps}>
      <StyledCourseHeading variant="h2" backgroundVariant="gradientBlue" title={title} />

      <StyledRenderHtml data={description} />
    </Contaner>
  );
};

const Contaner = styled(Stack)(({ theme }) => {
  return {
    alignItems: "center",
    margin: "52px 0 60px",

    [theme.breakpoints.down("lg")]: {
      margin: "34px 0 50px",
    },

    [theme.breakpoints.down("md")]: {
      gap: 2,
    },

    [theme.breakpoints.down("sm")]: {
      margin: "24px 0 20px",
      gap: 4,
    },

    ["&.active"]: {
      gap: 50,

      [theme.breakpoints.down("sm")]: {
        gap: 20,
      },
    },
  };
});

const StyledCourseHeading = styled(Headline)(({ theme }) => {
  return {
    textAlign: "center",

    [theme.breakpoints.between("md", "lg")]: {
      ...theme.typography.title1,
      lineHeight: 1.45,
      fontSize: 36,
    },
    [theme.breakpoints.down("md")]: {
      ...theme.typography.title1,
      fontSize: 36,
      lineHeight: 1.45,
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_title1,
    },
  };
});

const StyledRenderHtml = styled(RenderHTML)(({ theme }) => {
  return {
    maxWidth: "60%",

    "& > ul": {
      margin: 0,
      padding: 0,

      ["& > li"]: {
        ...theme.typography.body1,

        color: theme.palette.secondary.main,

        [theme.breakpoints.down("lg")]: {
          ...theme.typography.m_body1,
        },

        [theme.breakpoints.down("md")]: {
          ...theme.typography.m_body1,
        },

        [theme.breakpoints.down("sm")]: {
          ...theme.typography.title3,
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      maxWidth: "70%",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  };
});

export default memo(HeadingCourseTab);
