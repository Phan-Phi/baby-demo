import { useMeasure } from "react-use";
import { useEffect, useMemo, useState } from "react";
import { BoxProps, Grid, Stack, Typography, styled } from "@mui/material";

import CardGallery from "./CardGallery";
import { useIntl, useMedia } from "@/hooks";
import { GalleryDetailPage, Video } from "@/interfaces";
import {
  COLOR_TEXT_GRADIENT_BLUE,
  COLOR_TEXT_GRADIENT_ORANGE,
  WRAPPER_GALLERY_VIDEO_BG,
} from "@/constants";

import { Box, Image } from "@/components";
import VideoYouTube from "@/compositions/VideoYouTube";

interface PropsListVideo extends BoxProps {
  refHeight: number;
}

interface Props {
  currentTab: number;
  data: GalleryDetailPage[];
}

export default function GalleryVideo({ data, currentTab }: Props) {
  const { isLgDown } = useMedia();
  const { messages } = useIntl();
  const dataImage = data.filter((el: GalleryDetailPage) => {
    return el.id === currentTab;
  });
  // const { videos } = dataImage[0];

  const { isSmDown } = useMedia();

  const [isActiveVideo, setIsActiveVideo] = useState<number>(0);
  const [videoKid, setVideoKid] = useState<string>("");

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    if (dataImage.length === 0) return;
    const { videos } = dataImage[0];
    setVideoKid(videos[0].value.video);
  }, [currentTab]);

  useEffect(() => {
    if (isLgDown) {
      const element = document.getElementById("scroller") as any;
      element.scrollLeft = 0;
      setIsActiveVideo(0);
    }
    const element = document.getElementById("scroller") as any;
    element.scrollTop = 0;
    setIsActiveVideo(0);
  }, [currentTab, isLgDown]);

  const renderVideo = useMemo(() => {
    if (dataImage.length === 0) return;
    const { videos } = dataImage[0];
    return videos.map((item: Video, idx: number) => {
      return (
        <Box
          key={idx}
          onClick={() => {
            setIsActiveVideo(idx);
          }}
        >
          <CardGallery
            data={item}
            id={idx}
            isActive={isActiveVideo}
            onVideo={(value: string) => {
              setVideoKid(value);
            }}
          />
        </Box>
      );
    });
  }, [dataImage, isActiveVideo]);

  return (
    <Wrapper>
      <WrapperTitle>
        <Title variant="h1">{messages["gallery.video"]}</Title>
      </WrapperTitle>

      <Box>
        <Grid container spacing={isSmDown ? 2 : 4}>
          <Grid item xs={12} lg={7}>
            <Box sx={{ position: "relative" }} ref={ref}>
              <WrapperVideo>
                {/* <RenderEmbeded width={widthVideo.toString()} video={videoKid} /> */}
                <VideoYouTube video={videoKid} />
              </WrapperVideo>

              <WrapperImage>
                <Box width={130} height={130} position="absolute">
                  <Image
                    src="/image/gallery/fishGalleryVideo.png"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </WrapperImage>
            </Box>
          </Grid>

          <Grid item xs={12} lg={5}>
            <ListVideo refHeight={height}>
              <WrapperCardGallery id="scroller">
                <GridListVideo flexDirection="column" container>
                  {renderVideo}
                </GridListVideo>
              </WrapperCardGallery>
            </ListVideo>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Stack)(({ theme }) => {
  return {
    justifyContent: "center",
    marginBottom: "10rem",
    marginTop: "3rem",

    "&::-webkit-scrollbar-track": {
      background:
        "linear-gradient(180deg, rgba(201, 201, 201, 0.7) 0%, rgba(252, 252, 252, 0.7) 100%)",
      borderRadius: "1rem",
    },

    [theme.breakpoints.down("lg")]: {
      marginBottom: "3.125rem",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4rem",
    },
  };
});

const WrapperTitle = styled(Box)(({ theme }) => {
  return {
    marginBottom: "3.75rem",

    [theme.breakpoints.down("lg")]: {
      marginBottom: "1.87rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  };
});

const WrapperVideo = styled(Box)(({ theme }) => {
  return {
    borderRadius: "20px",
    padding: "16px 16px 42px 16px",
    border: `3px solid ${theme.palette.secondaryColor.lightBlue}`,
    boxShadow: " -1px 2px 4px rgba(0, 0, 0, 0.25)",

    background: WRAPPER_GALLERY_VIDEO_BG,

    [theme.breakpoints.down("sm")]: {
      borderRadius: "10px",
      border: `1.5px solid ${theme.palette.secondaryColor.lightBlue}`,
    },
  };
});

const GridListVideo = styled(Grid)(({ theme }) => {
  return {
    gap: "1rem",

    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "row !important",
      gap: "0.5rem",
    },
  };
});

const ListVideo = styled(Box, {
  shouldForwardProp: (propName) => propName !== "refHeight",
})<PropsListVideo>(({ theme, refHeight }) => {
  return {
    background: theme.palette.common.white,
    padding: "1rem",
    height: refHeight,
    borderRadius: "20px",
    backgroundImage: `url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.6%" y="0.6%" width="99%" height="99%" rx="20" fill="%23fff" stroke="%231C98DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="15 15"/></svg>')`,

    [theme.breakpoints.down("lg")]: {
      height: "100%",
      padding: 0,
      background: "none",
    },
  };
});

const WrapperCardGallery = styled(Box)(({ theme }) => {
  return {
    overflowY: "auto",
    height: "100%",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",

    "&::-webkit-scrollbar": {
      width: "1rem",
      height: "1rem",
    },

    "&::-webkit-scrollbar-thumb": {
      background: COLOR_TEXT_GRADIENT_BLUE,
      borderRadius: "1rem",
    },

    "&::-webkit-scrollbar-track": {
      background:
        "linear-gradient(180deg, rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",
      borderRadius: "1rem",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  };
});

const Title = styled(Typography)(({ theme }) => {
  return {
    textAlign: "center",
    background: COLOR_TEXT_GRADIENT_ORANGE,

    backgroundClip: "text",
    color: "transparent",

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

const WrapperImage = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    bottom: "50px",
    left: "-60px",

    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };
});
