import { useRouter } from "next/router";
import { BoxProps, styled } from "@mui/material";

import Box from "../Box/Box";
import Image from "../Image";
import { useMedia } from "@/hooks";
import { ItemTabContent, ItemTabs } from "@/interfaces";

interface Props {
  id: number;
  idTab: number;
  idItem: number;
  data: ItemTabs[];
}

interface ImageFishProps extends BoxProps {
  value: ItemTabContent;
  routerAsPath?: string;
}

export default function ItemCardFish({ id, data, idTab, idItem }: Props) {
  const { isSmDown, isMdDown, isLgDown } = useMedia();
  const router = useRouter();
  const { locale } = router;

  return (
    <Wrapper value={data[id].imageFish} routerAsPath={router.asPath}>
      <WrapperCircle className={idTab === idItem ? "noGrayscaleFish" : "grayscaleFish"}>
        <Box
          sx={{
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            className="TextTop"
            sx={{
              position: "absolute",
              top: router.asPath.includes("/khoa-hoc") ? "10%" : "16%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <TextTop
              value={locale === "en" ? data[id].textTopEn : data[id].textTop}
              position="relative"
              height={isSmDown ? 30 : isMdDown ? 50 : 50}
            >
              <Image
                src={locale === "en" ? data[id].textTopEn.image : data[id].textTop.image}
                alt=""
                style={{ objectFit: "contain" }}
              />
            </TextTop>
          </Box>

          <Box
            className="ImageFish"
            sx={{
              position: "absolute",
              zIndex: 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <ImageFish
              className={idTab === idItem ? "fish isActive" : "fish"}
              position="relative"
              value={data[id].imageFish}
            >
              <Image
                src={data[id].imageFish.image}
                alt=""
                style={{ objectFit: "contain" }}
              />
            </ImageFish>
          </Box>

          <Box
            className="TextBottom"
            sx={{
              position: "absolute",
              bottom: router.asPath.includes("/khoa-hoc")
                ? id === 3
                  ? "-18%"
                  : "-13%"
                : "-23%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 3,
            }}
          >
            <TextBottom
              value={locale === "en" ? data[id].textBottomEn : data[id].textBottom}
              position="relative"
              height={isSmDown ? 30 : isMdDown ? 50 : 60}
            >
              <Image
                src={
                  locale === "en"
                    ? data[id].textBottomEn.image
                    : data[id].textBottom.image
                }
                alt=""
                style={{ objectFit: "contain" }}
              />
            </TextBottom>
          </Box>
        </Box>
      </WrapperCircle>
    </Wrapper>
  );
}

const WrapperCircle = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.up("lg")]: {
      width: 170,
      height: 170,
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: 125,
      height: 125,
    },
    [theme.breakpoints.down("md")]: {
      width: 94,
      height: 94,
    },
  };
});

const ImageFish = styled(Box)<ImageFishProps>(({ theme, value }) => {
  return {
    zIndex: 2,
    height: value.heightPC,
    width: value.widthPC,
    transform: `rotate(${value.rotate}deg)`,

    [theme.breakpoints.between("md", "lg")]: {
      height: value.heightTabletHorizontal,
      width: value.widthTabletHorizontal,
    },
    [theme.breakpoints.down("md")]: {
      height: value.heightTablet,
      width: value.widthTablet,
    },
    [theme.breakpoints.down("sm")]: {
      height: value.heightMobile,
      width: value.widthMobile,
    },
  };
});

const TextTop = styled(Box)<ImageFishProps>(({ theme, value }) => {
  return {
    height: value.heightPC,
    width: value.widthPC,

    [theme.breakpoints.between("md", "lg")]: {
      height: value.heightTabletHorizontal,
      width: value.widthTabletHorizontal,
    },
    [theme.breakpoints.down("md")]: {
      height: value.heightTablet,
      width: value.widthTablet,
    },
    [theme.breakpoints.down("sm")]: {
      height: value.heightMobile,
      width: value.widthMobile,
    },
  };
});

const TextBottom = styled(Box)<ImageFishProps>(({ theme, value }) => {
  return {
    zIndex: 3,
    height: value.heightPC,
    width: value.widthPC,

    [theme.breakpoints.between("md", "lg")]: {
      height: value.heightTabletHorizontal,
      width: value.widthTabletHorizontal,
    },
    [theme.breakpoints.down("md")]: {
      height: value.heightTablet,
      width: value.widthTablet,
    },
    [theme.breakpoints.down("sm")]: {
      height: value.heightMobile,
      width: value.widthMobile,
    },
  };
});

const Wrapper = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "routerAsPath" && propName !== "routerAsPath",
})<ImageFishProps>(({ theme, value, routerAsPath }) => {
  return {
    // pointerEvents: "none",

    "& .grayscaleFish": {
      cursor: "pointer",
      filter: "grayscale(100%)",
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 33.65%, rgba(172, 212, 235, 0) 81.04%)",
      borderRadius: "100%",
      // border: "2px solid transparent",
      transition: "all .5s ease",
    },

    "& .noGrayscaleFish": {
      cursor: "pointer",
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 1) 33.65%, rgba(172, 212, 235, 1) 81.04%)",
      borderRadius: "100%",
      // border: "2px solid white",
      transition: "all .5s ease",
    },

    "& .noGrayscaleFish .fish": {
      transform: routerAsPath?.includes("/khoa-hoc")
        ? `scale(1.2) rotate(${value.activeRotate}deg)`
        : `scale(1.1) rotate(${value.activeRotate}deg)`,
    },

    "& .grayscaleFish:hover": {
      filter: "grayscale(0)",
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 1) 33.65%, rgba(172, 212, 235, 1) 81.04%)",
    },

    "& .fish": {
      transition: "all .5s ease",
    },

    "& .grayscaleFish:hover .fish": {
      transform: routerAsPath?.includes("/khoa-hoc")
        ? `scale(1.2) rotate(${value.activeRotate}deg)`
        : `scale(1.1) rotate(${value.activeRotate}deg)`,
      transition: "all .5s ease",
    },
  };
});
