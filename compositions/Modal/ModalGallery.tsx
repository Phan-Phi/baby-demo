import { useMemo } from "react";
import { useMeasure } from "react-use";
import { BoxProps, styled } from "@mui/material";

import { ImageType } from "@/interfaces";
import SlickSlider from "../Slick/SlickSlider";
import { IMG_MODAL_GALLERY } from "@/constants";
import { Box, Image } from "@/components";
import NextSlickModal from "@/components/Icons/NextSLickModal";
import PrevSlickModal from "@/components/Icons/PrevSlickModal";

interface PropsWrapperImage extends BoxProps {
  heightImage: number;
}

interface Props extends BoxProps {
  data: ImageType[];
  initialSlide: number;
}

export default function ModalGallery({ data, initialSlide }: Props) {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const render = useMemo(() => {
    return data.map((el: ImageType, idx: number) => {
      return (
        <CardImageModal width={width} heightImage={width / IMG_MODAL_GALLERY} key={idx}>
          <Image
            src={el.value}
            alt=""
            style={{
              borderRadius: "1.25rem",
            }}
          />
        </CardImageModal>
      );
    });
  }, [data, width]);

  return (
    <Wrapper widthWrapper={width} ref={ref}>
      <SlickSlider
        variant="simple"
        props={{
          draggable: false,
          arrows: true,
          nextArrow: <NextSlickModal />,
          prevArrow: <PrevSlickModal />,
          initialSlide: initialSlide,
        }}
      >
        {render}
      </SlickSlider>
    </Wrapper>
  );
}

interface WrapperProps extends BoxProps {
  widthWrapper: number;
}

const Wrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "widthWrapper",
})<WrapperProps>(({ theme, widthWrapper }) => {
  return {
    ["& .MuiBox-root"]: {
      padding: 0,
    },

    ["& .slick-slider"]: {
      "& .slick-slide": {
        // width: `${widthWrapper} !important`,
        // width: "200px !important",
      },

      "& .slick-prev": {
        left: "-82px",
        top: "49%",
        transition: "all .5s ease",

        "&::before": {
          display: "none",
        },
        "&:hover": {
          left: "-90px",
        },
      },

      "& .slick-next": {
        right: "-55px",
        top: "49%",
        transition: "all .5s ease",

        "&::before": {
          display: "none",
        },

        "&:hover": {
          right: "-65px",
        },
      },
    },
  };
});

const CardImageModal = styled(Box, {
  shouldForwardProp: (propName) => propName !== "heightImage",
})<PropsWrapperImage>(({ theme, heightImage }) => {
  return {
    position: "relative",
    borderRadius: "1.25rem",
    height: heightImage,
  };
});
