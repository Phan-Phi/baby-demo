import { ReactNode } from "react";

import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  styled,
  Divider,
  AccordionProps as MuiAccordionProps,
} from "@mui/material";

import MinusIcon from "./Icons/MinusIcon";
import PlusIcon from "./Icons/PlusIcon";
import RenderHTML from "@/compositions/Render/RenderHTML";

interface AccordionProps extends Omit<MuiAccordionProps, "children"> {
  expanded: boolean;
  heading: ReactNode;
  title: string;
  content: string;
}

export default function Accordion(props: AccordionProps) {
  const { expanded, heading, title, content, ...restProps } = props;

  return (
    <StyledMuiAccordion className="accordion" expanded={expanded} {...restProps}>
      <StyledAccordionSummary
        className="accordion__summary"
        expandIcon={expanded ? <MinusIcon /> : <PlusIcon />}
      >
        <StyledHeading className="accordion__heading">{heading}</StyledHeading>

        <StyledTitleAccordionSummary className="accordion__title">
          {title}
        </StyledTitleAccordionSummary>
      </StyledAccordionSummary>
      <StyledDivider className="accordion__divider" />

      <StyledAccordionDetails className="accordion__details">
        <StyledContent className="accordion__content" data={content} />
      </StyledAccordionDetails>
    </StyledMuiAccordion>
  );
}

const StyledMuiAccordion = styled(MuiAccordion)(({ theme }) => {
  return {
    [":before"]: {
      display: "none",
    },

    margin: "15px 0 !important",

    [theme.breakpoints.down("md")]: {
      margin: "12px 0 !important",
    },

    [theme.breakpoints.down("sm")]: {
      margin: "7px 0 !important",
    },

    [".accordion__summary"]: {
      gap: 80,
      padding: "32px 110px !important",

      [theme.breakpoints.down("md")]: {
        gap: 20,
        padding: "19px 30px 10px 45px !important",
      },

      [theme.breakpoints.down("sm")]: {
        gap: 16,
        padding: "19px 20px 10px 25px !important",
      },
    },

    ["&:nth-of-type(n+10) .accordion__summary"]: {
      padding: "32px 110px 32px 80px !important",

      [theme.breakpoints.down("md")]: {
        padding: "19px 30px 10px 30px !important",
      },

      [theme.breakpoints.down("sm")]: {
        padding: "19px 20px 10px 10px !important",
      },
    },
  };
});

const StyledHeading = styled(Typography)(({ theme }) => {
  return {
    flexShrink: 0,

    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
  };
});

const StyledDivider = styled(Divider)(({ theme }) => {
  return {
    position: "relative",
    bottom: 0,

    width: "calc(100% - 140px)",
    height: "2px",
    margin: "0 auto",

    background: theme.palette.secondaryColor.darkBlue,

    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 60px)",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "1px",
    },
  };
});

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => {
  return {
    ".MuiAccordionSummary-content": {
      alignItems: "center",
      columnGap: 70,
      margin: "0px !important",

      [theme.breakpoints.down("md")]: {
        columnGap: 20,
      },

      [theme.breakpoints.down("sm")]: {
        columnGap: 30,
      },
    },

    "& svg": {
      width: 20,
      height: 20,

      [theme.breakpoints.down("md")]: {
        width: 13,
        height: 13,
      },
    },
  };
});

const StyledTitleAccordionSummary = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    width: "100%",

    [theme.breakpoints.down("md")]: {
      ...theme.typography.body2,
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_body2,
    },
  };
});

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => {
  return {
    padding: "30px 70px",

    [theme.breakpoints.down("md")]: {
      padding: "10px 30px 20px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10px 26px 20px",
    },
  };
});

const StyledContent = styled(RenderHTML)(({ theme }) => {
  return {
    textAlign: "justify",
    "& p": {
      color: theme.palette.secondaryColor.darkBlue,
      margin: 0,
    },
    "& i ,h1,h2,h3,blockquote": {
      color: theme.palette.secondaryColor.darkBlue,
    },
  };
});
