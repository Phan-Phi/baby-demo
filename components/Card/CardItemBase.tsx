import { ReactNode } from "react";

import { styled } from "@mui/material";

import BoxWithShadow, { BoxWithShadowProps } from "@/components/Box/BoxWithShadow";

interface CardItemBaseProps extends BoxWithShadowProps {
  children: ReactNode;
}

const CardItemBase = (props: CardItemBaseProps) => {
  const { children } = props;
  return <StyledBox {...props}>{children}</StyledBox>;
};

const StyledBox = styled(BoxWithShadow)(() => {
  return {
    borderRadius: 20,
  };
});

export default CardItemBase;
