import { styled, Dialog, Box } from "@mui/material";

import { Heading, FormContact } from "@/compositions";
import { Spacing, CloseIcon, Image } from "@/components";

import imageOfDialog from "@/public/image/imageOfDialog.png";
import imageOfDialog2 from "@/public/image/imageOfDialog2.png";
import { useMedia } from "@/hooks";
import { isTablet, isWindows } from "react-device-detect";
import Video from "@/containers/Home/components/Video";

interface ContactFormModalProps {
  on: boolean;
  toggle: (value?: any) => void;
  toggleOff: () => void;
  toggleOn: () => void;
}

export default function ContactFormDialog(props: ContactFormModalProps) {
  const { on, toggleOff } = props;

  const { isMdUp } = useMedia();

  return (
    <StyledDialog
      onClose={toggleOff}
      open={on}
      scroll={"body"}
      aria-labelledby="contact-form-modal"
      maxWidth={false}
    >
      <StyledModal>
        {isMdUp && <Spacing spacing={4} />}
        {/* <Video data={"https://youtu.be/aHit1XQ8ZH8"} /> */}
        <Heading />
        <Spacing spacing={3} />

        <FormContact />

        <StyledDecorateObject1>
          <Box className="image-wrapper">
            <Image src={imageOfDialog.src} alt="" />
          </Box>
        </StyledDecorateObject1>

        <StyledDecorateObject2>
          <Box className="image-wrapper">
            <Image src={imageOfDialog2.src} alt="" />
          </Box>
        </StyledDecorateObject2>

        <StyledCloseIcon onClick={toggleOff} />
      </StyledModal>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)(({ theme }) => {
  return {
    ["& .MuiPaper-root"]: {
      background:
        "linear-gradient(180deg, rgba(226, 246, 255, 0.3) 0%, rgba(131, 210, 255, 0.3) 100%)",
      borderRadius: 32,
      border: "3px solid #83D2FF",
      backdropFilter: "blur(10px)",
      boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",
      width: "clamp(0px, 134.26vh, 1450px)",
      overflow: "unset",
      minHeight: "clamp(0px, 87.96vh, 950px)",
      maxWidth: "unset",
      margin: 0,

      [theme.breakpoints.down("lg")]: {
        width: "calc(100vw - 64px)",
        minHeight: "unset",
      },

      [theme.breakpoints.down("md")]: {
        width: "calc(100vw - 64px)",
        minHeight: "unset",
        borderRadius: 16,
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100vw - 32px)",
        borderRadius: 10,
        border: "1.5px solid #83D2FF",
      },

      ...(isTablet && {
        borderRadius: 16,
        marginTop: 32,
        marginBottom: 32,
      }),
    },
  };
});

const StyledModal = styled(Box)(({ theme }) => {
  return {
    padding: "0 clamp(0px, 5.93vh, 64px) 32px",
    [theme.breakpoints.down("md")]: {
      padding: "8.6vw 5.91vw",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "7.47vw",
    },
  };
});

const StyledDecorateObject1 = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,

    ["& .image-wrapper"]: {
      position: "relative",
      width: "clamp(0px, 38.15vh, 412px)",
      // height: "clamp(0px, 57.22vh, 618px)",
      height: "clamp(0px, 75.22vh, 789px)",
      ["& img"]: {
        objectFit: "cover",
      },
    },

    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };
});

const StyledDecorateObject2 = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    bottom: 42,
    right: "-6.3%",
    zIndex: -1,

    ["& .image-wrapper"]: {
      position: "relative",
      width: "clamp(0px, 44.07vh, 476px)",
      height: "clamp(0px, 35.74vh, 386px)",
      ["& img"]: {
        objectFit: "contain",
      },
    },

    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };
});

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => {
  return {
    position: "absolute",
    right: "clamp(0px, 2.21vh, 32px)",
    top: "clamp(0px, 2.21vh, 32px)",
    width: "clamp(0px, 2.76vh, 40px)",
    height: "clamp(0px, 2.76vh, 40px)",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      width: 24,
      height: 24,
    },

    [theme.breakpoints.down("sm")]: {
      width: 16,
      height: 16,
    },
  };
});
