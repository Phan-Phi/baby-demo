import { Typography, TypographyProps, styled, useTheme } from "@mui/material";

type BackgroundVariantType =
  | "gradientBlue"
  | "gradientOrange"
  | "gradientBlue30"
  | "gradientWhite50";

interface HeadlineProps extends TypographyProps {
  title: string;
  backgroundVariant?: BackgroundVariantType;
}

const Headline = (props: HeadlineProps) => {
  const { title, backgroundVariant = "gradientBlue", ...restProps } = props;
  const theme = useTheme();
  return (
    <StyledTypography
      variant="menuText"
      display="block"
      textTransform="uppercase"
      color={theme.palette.secondaryColor.darkBlue}
      backgroundVariant={backgroundVariant}
      {...restProps}
    >
      {title}
    </StyledTypography>
  );
};

const StyledTypography = styled(Typography, {
  shouldForwardProp: (propName) => propName !== "backgroundVariant",
})<{ backgroundVariant: BackgroundVariantType }>(({ backgroundVariant, theme }) => {
  return {
    backgroundImage: theme.palette.gradientColor[`${backgroundVariant}`],
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };
});

export default Headline;
