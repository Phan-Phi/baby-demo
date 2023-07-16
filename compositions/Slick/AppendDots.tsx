import { useMeasure } from "react-use";
import { Stack, styled } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import SlickSlider from "./SlickSlider";
import { ImageType } from "@/interfaces";
import { Box, Image } from "@/components";
import { COLOR_TEXT_GRADIENT_BLUE, IMAGE_MOBILE_FOUNDER_ARRAY } from "@/constants";

interface Props {
  data: ImageType[];
}

const SIZE_IMAGE = 652 / 430;

export default function AppendDots({ data }: Props) {
  const [ref2, { width: width2 }] = useMeasure<HTMLDivElement>();
  // const refSlickSlider = useRef<any>();

  // const [state, setState] = useState<any>(data[0].value);
  const [isIndex, setIsIndex] = useState<number>(0);

  useEffect(() => {
    // setState(data[0].value);
    const element = document.getElementById("listImage") as any;
    element.scrollLeft = 0;

    setIsIndex(0);
  }, [data]);

  // useEffect(() => {
  //   refSlickSlider.current.slickGoTo(0);
  // }, [data]);

  // const render = useMemo(() => {
  //   return data.map((item, idx: number) => {
  //     return (
  //       <Box
  //         key={idx}
  //         ref={ref2}
  //       >
  //         <Box position="relative" height={width2 / IMAGE_MOBILE_FOUNDER_ARRAY}>
  //           <Image src={item.value} alt="" style={{ borderRadius: "5px" }} />
  //         </Box>
  //       </Box>
  //     );
  //   });
  // }, [ref2, width2, data]);

  const renderListImage = useMemo(() => {
    return data.map((el, idx) => {
      if (idx === isIndex) {
        return (
          <Box
            onClick={() => {
              // setState(el.value);
              setIsIndex(idx);
            }}
            key={idx}
            className="wrapperDotItems active"
            sx={{
              maxWidth: "inherit !important",
              position: "relative",

              // "& .overley:hover": {
              //   opacity: 0,
              // },
            }}
          >
            <Overlay className="overley" sx={{ opacity: 0.6 }} />
            <Box position="relative" width={149} height={98}>
              <Image key={idx} src={el.value} alt="" style={{ borderRadius: "5px" }} />
            </Box>
          </Box>
        );
      }
      return (
        <Box
          onClick={() => {
            // setState(el.value);
            setIsIndex(idx);
          }}
          key={idx}
          className="wrapperDotItems"
          sx={{
            maxWidth: "inherit !important",
            position: "relative",

            // "& .overley:hover": {
            //   opacity: 0,
            // },
          }}
        >
          <Overlay className="overley" sx={{ opacity: 0 }} />
          <Box position="relative" width={149} height={98}>
            <Image key={idx} src={el.value} alt="" style={{ borderRadius: "5px" }} />
          </Box>
        </Box>
      );
    });
  }, [data, isIndex]);

  return (
    <Wrapper ref={ref2}>
      {/* <SlickSlider
        refSlick={refSlickSlider}
        variant="simple"
        props={{
          draggable: false,
          arrows: false,
          dots: true,
          appendDots(dots) {
            return (
              <Box>
                <Box className="listImage" rowGap={2} sx={{ paddingRight: "0.3rem" }}>
                  {dots}
                </Box>
              </Box>
            );
          },

          customPaging(index) {
            return (
              <Box
                className="wrapperDotItems"
                sx={{
                  maxWidth: "inherit !important",
                  position: "relative",

                  "& .overley:hover": {
                    opacity: 0,
                  },
                }}
              >
                <Overlay className="overley" />
                <Box position="relative" width={149} height={98}>
                  <Image src={data[index].value} alt="" style={{ borderRadius: "5px" }} />
                </Box>
              </Box>
            );
          },
        }}
      >
        {render}
      </SlickSlider> */}

      <ImageWrapper
        position="relative"
        width={width2}
        height={width2 / SIZE_IMAGE}
        sx={{ border: "5px" }}
      >
        <Image src={data[isIndex].value} alt="" />
      </ImageWrapper>

      <ListImage flexDirection="row" gap={1} id="listImage">
        {renderListImage}
      </ListImage>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    "& .slick-slider": {
      "& .slick-dots": {
        justifyContent: "flex-start !important",
        bottom: "unset",
        transform: "none",
        position: "initial",

        "& .listImage": {
          display: "flex",
          width: "100%",
          overflowX: "auto",
          gap: "0.5rem",
          paddingBottom: "0.5rem",

          "&  .wrapperDotItems": {
            minWidth: "149px",
          },

          "& li ": {
            padding: 0,
            minWidth: "149px",
            height: "100%",
          },

          "& .slick-active .overley ": {
            opacity: 0.6,
          },

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
        },
      },
    },
  };
});

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    marginBottom: "0.5rem",
    borderRadius: "5px",
    "& img": {
      borderRadius: "5px",
    },
  };
});

const ListImage = styled(Stack)(({ theme }) => {
  return {
    overflowX: "auto",
    paddingBottom: "0.5rem",

    // "& .active .overley ": {
    //   opacity: 0.6,
    // },

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
  };
});

const Overlay = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    botoom: 0,
    background: theme.palette.common.black,
    borderRadius: "5px",
    zIndex: 10,
    opacity: 0,
    transition: "all .5s ease",
  };
});
