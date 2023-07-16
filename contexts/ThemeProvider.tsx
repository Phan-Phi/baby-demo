import {
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { PlusIcon } from "@/components";
import { BOX_SHADOW_ACCORDION } from "@/constants";
import { COMPONENT_STATE, PALETTE_COLOR, PSEUDO_STATE } from "@/configuration";
import { iCielKoni, iCielKoni2, iCielMedium, iCielThin, MontserratFont } from "@/libs";

type OmitProperties = "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing";

const createTypographyProperties = (
  props: {
    fontSize: string | number;
    fontWeight: string | number;
    lineHeight: string | number;
    letterSpacing?: string | number;
    color?: string;
  } & Omit<React.CSSProperties, OmitProperties>
) => {
  const { fontSize, fontWeight, letterSpacing, lineHeight, ...restProps } = props;

  return {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    ...restProps,
  };
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: PALETTE_COLOR.orange,
    },
    secondary: {
      main: PALETTE_COLOR.blue,
    },
    common: {
      white: PALETTE_COLOR.white,
      black: PALETTE_COLOR.black,
    },
    error: {
      main: PALETTE_COLOR.orange,
    },
    brandColor: {
      orange: PALETTE_COLOR.orange,
      blue: PALETTE_COLOR.blue,
    },
    secondaryColor: {
      darkBlue: PALETTE_COLOR.darkBlue,
      lightBlue: PALETTE_COLOR.lightBlue,
      background: PALETTE_COLOR.background,
    },
    gradientColor: {
      gradientOrange: PALETTE_COLOR.gradientOrange,
      gradientBlue: PALETTE_COLOR.gradientBlue,
      gradientBlue30: PALETTE_COLOR.gradientBlue30,
      gradientWhite50: PALETTE_COLOR.gradientWhite50,
    },
  },
  typography: {
    fontFamily: iCielMedium.style.fontFamily,
    H1Twin: createTypographyProperties({
      fontFamily: iCielKoni2.style.fontFamily,
      fontWeight: 900,
      fontSize: "clamp(8.89vh, 8.89vh, 96px)",
      lineHeight: "clamp(11.11vh, 13.11vh, 120px)",
    }),
    h1: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 900,
      fontSize: "clamp(0px, 8.89vh, 96px)",
      lineHeight: "clamp(0px, 11.11vh, 120px)",
    }),
    h2: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 900,
      fontSize: "clamp(0px, 5.93vh, 64px)",
      lineHeight: "clamp(0px, 8.89vh, 96px)",
    }),
    title1: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 900,
      fontSize: "clamp(0px, 3.33vh, 36px)",
      lineHeight: "clamp(0px, 4.44vh, 48px)",
    }),
    title2: createTypographyProperties({
      fontFamily: iCielMedium.style.fontFamily,
      fontWeight: 300,
      fontSize: "clamp(0px, 2.96vh, 32px)",
      lineHeight: "clamp(0px, 3.89vh, 42px)",
    }),
    m_h1: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 900,
      fontSize: "clamp(0px, 5.09vh, 55px)",
      lineHeight: "clamp(0px, 8.8vh, 95px)",
    }),
    m_h2: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 900,
      fontSize: "clamp(0px, 3.33vh, 36px)",
      lineHeight: "clamp(0px, 4.44vh, 48px)",
    }),
    m_title1: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 300,
      fontSize: 25,
      lineHeight: "36px",
    }),
    m_title2: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 900,
      fontSize: 20,
      lineHeight: "32px",
    }),
    title3: createTypographyProperties({
      fontFamily: iCielMedium.style.fontFamily,
      fontWeight: 300,
      fontSize: 12,
      lineHeight: "16px",
    }),
    smButton: createTypographyProperties({
      fontFamily: iCielKoni.style.fontFamily,
      fontWeight: 900,
      fontSize: "clamp(0px, 2.78vh, 30px)",
      lineHeight: "clamp(0px, 4.63vh, 50px)",
    }),
    menuText: createTypographyProperties({
      fontFamily: iCielMedium.style.fontFamily,
      fontWeight: 300,
      fontSize: 25,
      lineHeight: "30px",
    }),
    body1: createTypographyProperties({
      fontFamily: iCielMedium.style.fontFamily,
      fontWeight: 300,
      fontSize: "clamp(0px, 2.04vh, 22px)",
      lineHeight: "clamp(0px, 2.59vh, 28px)",
    }),

    body2: createTypographyProperties({
      fontFamily: iCielMedium.style.fontFamily,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "22px",
    }),
    m_body1: createTypographyProperties({
      fontFamily: iCielMedium.style.fontFamily,
      fontWeight: 300,
      fontSize: 14,
      lineHeight: "20px",
    }),
    m_body2: createTypographyProperties({
      fontFamily: iCielMedium.style.fontFamily,
      fontWeight: 300,
      fontSize: 12,
      lineHeight: "17px",
    }),
    MontserratText: createTypographyProperties({
      fontFamily: MontserratFont.style.fontFamily,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "21.3px",
    }),
    MontserratText2: createTypographyProperties({
      fontFamily: MontserratFont.style.fontFamily,
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "13.4px",
    }),

    TextICielThin: createTypographyProperties({
      fontFamily: iCielThin.style.fontFamily,
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "28px",
    }),
  },
});

const theme = createTheme({
  ...defaultTheme,
  breakpoints: {
    values: {
      xs: 0,
      sm_horizontal: 700,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-m_body1,.MuiTypography-body1": {
            [defaultTheme.breakpoints.between("md", "lg")]: {
              fontSize: 16,
            },
          },
          "&.MuiTypography-body1": {
            [defaultTheme.breakpoints.between("md", "lg")]: {
              fontSize: 16,
            },
          },
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiButton: {
      defaultProps: {
        color: "secondary",
        variant: "contained",
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          ...defaultTheme.typography.smButton,
          fontSize: "36px",
          padding: "18px 20px 18px 20px",
          borderRadius: "30px",
          // border: `2px solid ${PALETTE_COLOR.lightBlue}`,
          // background: PALETTE_COLOR.gradientBlue30,
          backdropFilter: "blur(10px)",
          textTransform: "capitalize",
          whiteSpace: "nowrap",
        },
        contained: {
          background:
            "linear-gradient(180deg, rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",
          border: `2px solid #83D2FF`,
          [PSEUDO_STATE.hover]: {
            background: PALETTE_COLOR.gradientBlue30,
            border: `2px solid ${PALETTE_COLOR.lightBlue}`,
          },
        },
        outlined: {
          [COMPONENT_STATE.disabled]: {
            backgroundColor: "transparent",
            borderColor: PALETTE_COLOR.blue,
          },
          [PSEUDO_STATE.hover]: {
            color: defaultTheme.palette.common.white,
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          ["& .MuiFormLabel-root"]: {
            marginBottom: 12,
          },
          ["& .MuiFormHelperText-root"]: {
            marginTop: 2,
            [defaultTheme.breakpoints.down("sm")]: {
              ...defaultTheme.typography.m_body2,
            },
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.body2,

          marginTop: "0 !important",
          borderWidth: 1,
          borderColor: PALETTE_COLOR.lightBlue,
          borderStyle: "solid",
          borderRadius: 30,
          paddingRight: 16,

          [COMPONENT_STATE.active]: {
            borderColor: PALETTE_COLOR.darkBlue,
            borderWidth: 1,
          },
          [COMPONENT_STATE.focused]: {
            borderColor: PALETTE_COLOR.darkBlue,
            borderWidth: 1,
          },
          [COMPONENT_STATE.error]: {
            borderWidth: 1,
            borderColor: PALETTE_COLOR.orange,
            color: PALETTE_COLOR.orange,
          },
        },
        input: {
          color: PALETTE_COLOR.darkBlue,
          padding: "16px 30px",
          height: "unset",
          [PSEUDO_STATE.placeholder]: {
            color: "#D6D6D6",
            textDecoration: "underline",
          },
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          fontSize: "15px",
          lineHeight: "20px",
          fontWeight: 500,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "20px !important",
          border: `1.5px solid #fff`,
          backdropFilter: "blur(5px)",
          boxShadow: BOX_SHADOW_ACCORDION,
          background: PALETTE_COLOR.gradientWhite50,
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <PlusIcon />,
      },
      styleOverrides: {
        root: {
          padding: "32px 70px",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 70px 32px 70px",
        },
      },
    },
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
