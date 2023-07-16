import { MouseEventHandler } from "react";
import { Box, ListItemProps, Stack, Typography, styled } from "@mui/material";

import LifebuoySVGBlue2 from "../Svg/LifebuoySVGBlue";
import { COLOR_TEXT_GRADIENT_BLUES } from "@/constants";

interface NavigationsComponentProps extends Omit<ListItemProps, "onClick"> {
  title: string;
  path?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  selectedId?: string;
}

const BtnSeeMoreSmall = (props: NavigationsComponentProps) => {
  const { title, path = "", onClick, id, selectedId, ...restProps } = props;

  return (
    <StyledButton>
      <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
        <LifebuoySVGBlue />
        <Text variant="m_title2">{title}</Text>
      </Stack>
    </StyledButton>
  );
};

const StyledButton = styled(Box)(({ theme }) => {
  return {
    minWidth: "164px",
    background:
      "linear-gradient(180deg, rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",
    backdropFilter: "blur(10px)",
    border: `2px solid #83D2FF`,
    padding: "9.5px 12px",
    borderRadius: "1.8rem",
    display: "inline-block",
    boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",
    cursor: "pointer",

    "& .MuiStack-root": {
      position: "relative",
      justifyContent: "flex-start !important",
    },
  };
});

const Text = styled(Typography)(() => {
  return {
    ...COLOR_TEXT_GRADIENT_BLUES,
    width: "max-content",
    textTransform: "uppercase",
  };
});

const LifebuoySVGBlue = styled(LifebuoySVGBlue2)(() => {
  return {
    width: 25,
    height: 25,
  };
});

export default BtnSeeMoreSmall;
