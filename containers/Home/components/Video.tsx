import YouTube from "react-youtube";
import { useRouter } from "next/router";
import { Box, BoxProps, styled } from "@mui/material";
import { isTablet } from "react-device-detect";

import { useIntl, useMedia } from "@/hooks";
import { Headline } from "@/components";
import { getIdYoutube } from "@/libs/getIdYoutube";
import LifebuoySVGBlue2 from "@/components/Svg/LifebuoySVGBlue";
import BtnSeeMoreClone from "@/components/Buttton/BtnSeeMoreClone";

interface Props {
  data: string;
  onChange?: () => void;
  offAfter?: any;
  activeAutoPlay?: boolean;
}

interface WrapperVideoProps extends BoxProps {
  disableAffter: boolean;
}

const Video = ({ data, onChange, offAfter, activeAutoPlay }: Props) => {
  const router = useRouter();
  const { isMdDown } = useMedia();
  const { messages } = useIntl();

  return (
    <Wrapper>
      <WrapperVideo
        flexGrow={1}
        className="video"
        onClick={onChange}
        disableAffter={offAfter}
      >
        <YouTube
          videoId={getIdYoutube(data) as string}
          opts={{
            width: "100%",
            height: "100%",
            ...(activeAutoPlay && {
              playerVars: {
                autoplay: 1,
              },
            }),
          }}
        />
      </WrapperVideo>
      <WrapperButton
        onClick={() => {
          router.push("/thu-vien");
        }}
      >
        {isMdDown ? (
          <Box display="flex">
            <LifebuoySVGBlue />

            <Headline
              variant="title1"
              title={messages["seeMore"]}
              textTransform="uppercase"
              className="button-text"
            />

            {isMdDown && <LifebuoySVGBlue />}
          </Box>
        ) : (
          <BtnSeeMoreClone title={messages["seeMore"]} />
        )}
      </WrapperButton>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    height: "100%",
    padding: "clamp(0px, 2.96vh, 32px)",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(180deg, rgba(186, 230, 255, 0.3) 22.19%, rgba(98, 178, 223, 0.3) 100%)",
    border: "3px solid #83D2FF",
    boxShadow: "-4px 4px 7px rgba(1, 35, 73, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: 20,
    rowGap: 16,
    [theme.breakpoints.down("md")]: {
      border: "1.5px solid #83D2FF",
      padding: 24,
      borderRadius: 10,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
      rowGap: 8,
    },
    ...(isTablet && {
      border: "1.5px solid #83D2FF",
      padding: 24,
      borderRadius: 10,
    }),
  };
});

const WrapperButton = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",
    alignSelf: "flex-end",
    height: "40px",
    "& .btn_seeMore": {
      minWidth: "200px !important",
      boxShadow: "none",
      background: "none",
      border: "none",
      padding: 0,
      backdropFilter: "none",
      "& span": {
        paddingRight: "0 !important",
      },
    },

    ["& .button-text"]: {
      ...theme.typography.title1,

      [theme.breakpoints.down("md")]: {
        ...theme.typography.m_title2,
      },
    },

    "& .MuiBox-root": {
      alignItems: "center",
      columnGap: 8,

      [theme.breakpoints.up("md")]: {
        "& .MuiTypography-root": {
          paddingRight: "1rem",
          transition: "all .5s ease",
        },
        "&:hover svg": {
          width: 35,
        },
        "&:hover .MuiTypography-root": {
          paddingRight: 0,
        },
      },
    },

    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
      height: "32px",
    },
  };
});

const WrapperVideo = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "disableAffter";
  },
})<WrapperVideoProps>(({ theme, disableAffter }) => {
  return {
    position: "relative",
    "& div": {
      height: "100%",
      "& iframe": {
        borderRadius: 20,
        width: "100%",
        height: "100%",
        [theme.breakpoints.down("md")]: {
          borderRadius: 10,
        },
        ...(isTablet && {
          borderRadius: 10,
        }),
      },
    },

    ["& .MuiBox-root"]: {
      height: "100%",
    },

    "&::after": {
      content: `""`,
      background: theme.palette.common.black,
      display: disableAffter ? "none" : "flex",
      width: "100%",
      height: "100%",
      opacity: 0,
      position: "absolute",
      top: 0,
      borderRadius: 20,
      [theme.breakpoints.down("md")]: {
        borderRadius: 10,
      },
      ...(isTablet && {
        borderRadius: 10,
      }),
    },
  };
});

const LifebuoySVGBlue = styled(LifebuoySVGBlue2)(({ theme }) => {
  return {
    width: 0,
    height: 35,
    transition: "all .5s ease",

    [theme.breakpoints.down("md")]: {
      width: 25,
      height: 25,
    },
  };
});

export default Video;
