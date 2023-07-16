import {
  Box,
  BoxProps,
  ListItemProps,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import { MouseEventHandler } from "react";
import { useWindowSize } from "react-use";

import LifebuoySVGBlue2 from "../Svg/LifebuoySVGBlue";
import { COLOR_TEXT_GRADIENT_BLUES } from "@/constants";

interface NavigationsComponentProps extends Omit<ListItemProps, "onClick"> {
  title: string;
  path?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  selectedId?: string;
}

interface TextProps extends TypographyProps {
  heightWindow: number;
}

interface StyledButtonProps extends BoxProps {
  heightWindow: number;
}

const BtnSeeMoreClone = (props: NavigationsComponentProps) => {
  const { title, path = "", onClick, id, selectedId, ...restProps } = props;
  const { width, height } = useWindowSize();

  return (
    <StyledButton heightWindow={height} className="btn_seeMore">
      <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
        <LifebuoySVGBlue heightWindow={height} />

        <Text heightWindow={height} variant="title1">
          {title}
        </Text>
        <TextOverley heightWindow={height} variant="title1">
          {title}
        </TextOverley>
      </Stack>
    </StyledButton>
  );
};

const StyledButton = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "heightWindow";
  },
})<StyledButtonProps>(({ theme, heightWindow }) => {
  return {
    // minWidth: heightWindow < 800 ? "267px" : "308px",
    // width: "308px  !important",
    background:
      "linear-gradient(180deg, rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",
    backdropFilter: "blur(10px)",
    border: `2px solid #83D2FF`,
    padding: "1rem 2rem",
    borderRadius: "1.8rem",
    display: "inline-block",
    boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",
    cursor: "pointer",

    "& .MuiStack-root": {
      position: "relative",
      justifyContent: "flex-start !important",
    },

    "& svg": {
      opacity: 0,
      transition: "all .5s ease",
    },

    "&:hover svg": {
      opacity: 1,
    },

    "&:hover .MuiTypography-root": {
      left: "61%",
    },

    [theme.breakpoints.down("xl")]: {
      // width: "275px !important",
    },
  };
});

const Text = styled(Typography, {
  shouldForwardProp: (propName) => {
    return propName !== "heightWindow";
  },
})<TextProps>(({ theme, heightWindow }) => {
  return {
    ...COLOR_TEXT_GRADIENT_BLUES,
    // fontSize: heightWindow < 800 ? "1.8rem !important" : "2.25rem !important",
    fontSize: "2.25rem !important",
    lineHeight: "48px !important",
    fontWeight: 900,
    position: "absolute",
    width: "max-content",
    left: "50%",
    transform: "translate(-50%)",
    transition: "all .5s ease",
    textTransform: "uppercase",

    [theme.breakpoints.down("xl")]: {
      fontSize: "1.8rem !important",
    },
  };
});

const TextOverley = styled(Typography, {
  shouldForwardProp: (propName) => {
    return propName !== "heightWindow";
  },
})<TextProps>(({ theme, heightWindow }) => {
  return {
    // fontSize: heightWindow < 800 ? "1.8rem !important" : "2.25rem !important",
    fontSize: "2.25rem !important",
    width: "max-content",
    lineHeight: "0",
    fontWeight: 900,
    opacity: 0,
    textTransform: "uppercase",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.8rem !important",
    },
  };
});

const LifebuoySVGBlue = styled(LifebuoySVGBlue2, {
  shouldForwardProp: (propName) => {
    return propName !== "heightWindow";
  },
})<TextProps>(({ theme, heightWindow }) => {
  return {
    width: 40,
    height: 40,
  };
});

export default BtnSeeMoreClone;
