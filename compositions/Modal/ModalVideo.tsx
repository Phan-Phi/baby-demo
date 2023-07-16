import { Fragment, useCallback, useState } from "react";
import { BoxProps, Fade, Modal, Typography, styled } from "@mui/material";

import { Box } from "@/components";
import Video from "@/containers/Home/components/Video";

interface Props {
  linkVideo: string;
}

interface BoxModalProps extends BoxProps {
  width?: number;
}

export default function ModalVideo({ linkVideo }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModal = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Fragment>
      <Video data={linkVideo} onChange={handleModal} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={open}>
          <WrapperVideo>
            <Video
              data={linkVideo}
              onChange={handleModal}
              offAfter={true}
              activeAutoPlay={true}
            />
          </WrapperVideo>
        </Fade>
      </Modal>
    </Fragment>
  );
}

const ModalBox = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "width";
  },
})<BoxModalProps>(({ theme, width }) => {
  return {
    width: width,
    padding: "2.3rem 7rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    border: `2px solid ${theme.palette.secondaryColor.lightBlue}`,
    borderRadius: "1.25rem",

    background:
      "linear-gradient(180deg, rgba(226, 246, 255, 0.3) 0%, rgba(131, 210, 255, 0.3) 100%)",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    backdropFilter: "blur(5.5px)",
    WebkitBackdropFilter: "blur(5.5px)",

    [theme.breakpoints.down("sm")]: {
      padding: "2.5rem 2.5rem",
    },
  };
});

const WrapperVideo = styled(Box)(({ theme }) => {
  return {
    width: "clamp(0px,83.33vh, 900px)",
    height: "clamp(0px,55.55vh, 600px)",

    [theme.breakpoints.down("md")]: {
      width: "clamp(0px,55.55vh, 600px)",
      height: "clamp(0px,41.66vh, 450px)",
    },

    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "40%",
    },
  };
});
