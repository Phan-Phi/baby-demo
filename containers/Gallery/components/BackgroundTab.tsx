import { styled } from "@mui/material";

import { useMedia } from "@/hooks";
import { Box, Image } from "@/components";

interface PropsRenderImage {
  img: string;
}

export default function BackgroundTab() {
  const { isSmDown, isMdDown, isLgDown } = useMedia();

  if (isSmDown) {
    return <RenderImage img="/image/gallery/galleryLineMobile.svg" />;
  }
  if (isMdDown) {
    return <RenderImage img="/image/gallery/galleryLineTablet.svg" />;
  }

  if (isLgDown) {
    return <RenderImage img="/image/gallery/galleryLineTabletVertical.svg" />;
  }

  return <RenderImage img="/image/gallery/galleryLinePC.svg" />;
}

const RenderImage = ({ img }: PropsRenderImage) => {
  return (
    <WrapperImage>
      <Image
        src={img}
        alt=""
        style={{ objectFit: "cover", objectPosition: "center bottom" }}
      />
    </WrapperImage>
  );
};

const WrapperImage = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: "100%",

    [theme.breakpoints.up("lg")]: {
      height: "300px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "50%",
    },
    [theme.breakpoints.down("md")]: {
      height: "92px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "92px",
    },
  };
});
