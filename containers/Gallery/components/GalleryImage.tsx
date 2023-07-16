import { useMeasure } from "react-use";
import { useMemo, useState } from "react";
import { BoxProps, Fade, Grid, Modal, Typography, styled } from "@mui/material";

import { useIntl, useMedia } from "@/hooks";
import { Box, Image } from "@/components";
import { AppendDots, ModalGallery } from "@/compositions";
import { GalleryDetailPage, ImageType } from "@/interfaces";
import { COLOR_TEXT_GRADIENT_ORANGES, IMG_RATIO_4_26 } from "@/constants";

interface BoxModalProps extends BoxProps {
  width?: number;
}

interface PropsWrapperImage extends BoxProps {
  heightImage: number;
  idItem: number;
  idHover: number;
}

interface Props {
  widthForModal: number;
  data: GalleryDetailPage[];
  currentTab: number;
}

export default function GalleryImage({ widthForModal, data, currentTab }: Props) {
  const dataImage = data.filter((el: GalleryDetailPage) => el.id === currentTab);

  const { messages } = useIntl();
  const { isSmDown, isLgUp } = useMedia();
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const [open, setOpen] = useState(false);
  const [isHover, setIsHover] = useState<number>(-1);
  const [indexImage, setIndexImage] = useState<number>(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderListImage = useMemo(() => {
    if (dataImage == undefined || dataImage.length === 0) return;

    const { images } = dataImage[0];
    return images.map((item: ImageType, idx: number) => {
      return (
        <Grid item md={4} key={idx}>
          <Box>
            <WrapperImage
              ref={ref}
              idItem={idx}
              idHover={isHover}
              onMouseLeave={() => {
                setIsHover(-1);
              }}
              onMouseEnter={() => {
                setIsHover(idx);
              }}
              onClick={() => {
                setOpen(true);
                setIndexImage(idx);
              }}
              heightImage={width / IMG_RATIO_4_26}
            >
              <Image
                src={item.value}
                alt=""
                style={{ borderRadius: "1.25rem", zIndex: -1 }}
              />
            </WrapperImage>
          </Box>
        </Grid>
      );
    });
  }, [width, ref, dataImage, isHover]);

  const renderAppendDots = useMemo(() => {
    if (dataImage == undefined || dataImage.length === 0) return;
    const { images } = dataImage[0];
    return <AppendDots data={images} />;
  }, [dataImage]);

  const renderModalGallery = useMemo(() => {
    if (dataImage == undefined || dataImage.length === 0) return;
    const { images } = dataImage[0];
    return <ModalGallery data={images} initialSlide={indexImage} />;
  }, [dataImage]);

  return (
    <Wrapper>
      <Grid container spacing={isSmDown ? 0 : 3}>
        <Grid item xs={12}>
          <WrapperTitle>
            <Title variant={"h1"}>{messages["gallery.image"] as string}</Title>
          </WrapperTitle>
        </Grid>

        {isLgUp ? (
          renderListImage
        ) : (
          <Grid item xs={12}>
            {renderAppendDots}
          </Grid>
        )}
      </Grid>

      {isSmDown ? null : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableAutoFocus
        >
          <Fade in={open} timeout={800}>
            <ModalBox width={widthForModal}>{renderModalGallery}</ModalBox>
          </Fade>
        </Modal>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
  };
});

const WrapperTitle = styled(Box)(({ theme }) => {
  return {
    marginBottom: "2.25rem",

    [theme.breakpoints.down("lg")]: {
      marginBottom: "6px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  };
});

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

const WrapperImage = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "heightImage" && propName !== "idItem" && propName !== "idHover",
})<PropsWrapperImage>(({ theme, heightImage, idItem, idHover }) => {
  return {
    position: "relative",
    borderRadius: "1.25rem",
    height: heightImage,
    cursor: "pointer",
    overflow: "hidden",

    "& img": {
      transform: idItem === idHover ? "scale(1.2)" : "scale(1)",
      transition: idItem === idHover ? "transform .8s ease" : "transform .8s ease",
    },

    "&::before": {
      content: `""`,
      background: theme.palette.common.black,
      display: "flex",
      width: "100%",
      height: "100%",
      opacity: idItem === idHover ? 0.5 : 0,
    },
  };
});

const Title = styled(Typography)(({ theme }) => {
  return {
    ...COLOR_TEXT_GRADIENT_ORANGES,
    textAlign: "center",
    display: "block",

    [theme.breakpoints.down("lg")]: {
      fontSize: "36px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("md")]: {
      ...theme.typography.m_h2,
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_title1,
    },
  };
});
