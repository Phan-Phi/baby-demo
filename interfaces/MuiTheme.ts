declare module "@mui/material/styles/createTypography" {
  interface Typography {
    title1?: TypographyStyle;
    title2?: TypographyStyle;
    title3?: TypographyStyle;
    m_h1?: TypographyStyle;
    m_h2?: TypographyStyle;
    m_title1?: TypographyStyle;
    m_title2?: TypographyStyle;
    m_body1?: TypographyStyle;
    m_body2?: TypographyStyle;
    smButton?: TypographyStyle;
    menuText?: TypographyStyle;
    MontserratText?: TypographyStyle;
    MontserratText2?: TypographyStyle;
    TextICielThin?: TypographyStyle;
    H1Twin?: TypographyStyle;
  }

  interface TypographyOptions {
    title1?: TypographyStyle;
    title2?: TypographyStyle;
    title3?: TypographyStyle;
    m_h1?: TypographyStyle;
    m_h2?: TypographyStyle;
    m_title1?: TypographyStyle;
    m_title2?: TypographyStyle;
    m_body1?: TypographyStyle;
    m_body2?: TypographyStyle;
    smButton?: TypographyStyle;
    menuText?: TypographyStyle;
    MontserratText?: TypographyStyle;
    MontserratText2?: TypographyStyle;
    TextICielThin?: TypographyStyle;
    H1Twin?: TypographyStyle;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    m_h1: true;
    m_h2: true;
    m_title1: true;
    m_title2: true;
    m_body1: true;
    m_body2: true;
    smButton: true;
    menuText: true;
    MontserratText: true;
    MontserratText2: true;
    TextICielThin: true;
    H1Twin: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    brandColor: {
      blue: string;
      orange: string;
    };
    secondaryColor: {
      lightBlue: string;
      darkBlue: string;
      background: string;
    };
    gradientColor: {
      gradientOrange: string;
      gradientBlue: string;
      gradientBlue30: string;
      gradientWhite50: string;
    };
  }

  interface PaletteOptions {
    brandColor: {
      blue: string;
      orange: string;
    };
    secondaryColor: {
      lightBlue: string;
      darkBlue: string;
      background: string;
    };
    gradientColor: {
      gradientOrange: string;
      gradientBlue: string;
      gradientBlue30: string;
      gradientWhite50: string;
    };
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/Select" {
  interface SelectClasses {
    root: string;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    sm_horizontal: true;
  }
}

export {};
