import { useMedia } from "@/hooks";
import { Video } from "@/interfaces";
import { Box, Image } from "@/components";
import { COLOR_TEXT_GRADIENT_ORANGES, OVERLEY_ITEM } from "@/constants";
import { BoxProps, Grid, Typography, TypographyProps, styled } from "@mui/material";

interface Props {
  id: number;
  data: Video;
  isActive: number;
  onVideo: (video: string) => void;
}

interface PropsVideo {
  video: string;
}

interface PropsTitle extends TypographyProps {
  active?: boolean;
}

interface PropsOverley extends BoxProps {
  active?: boolean;
}

export default function CardGallery({ data, isActive, id, onVideo }: Props) {
  const { isLgUp } = useMedia();
  const active = isActive === id;
  if (isLgUp) {
    return (
      <Wrapper item xs={12}>
        <Box
          className="Wrapper__content"
          onClick={() => {
            onVideo(data.value.video);
          }}
        >
          <Box minHeight={84} minWidth={128} position={"relative"}>
            <Video video={data.value.video} />
            <Overley className="overley" active={active}></Overley>
          </Box>

          <Box>
            <Title variant="body1" className="title" active={active}>
              {data.value.title}
            </Title>
            <SubTitle variant="body2">{data.value.age}</SubTitle>
          </Box>
        </Box>
      </Wrapper>
    );
  }

  return (
    <WrapperAppendDots>
      <Box
        className="WrapperAppendDots__Video"
        width={149}
        height={98}
        onClick={() => {
          onVideo(data.value.video);
        }}
      >
        {isActive === id ? <Overley className="overley"></Overley> : null}

        <Video video={data.value.video} />
      </Box>

      <Box marginTop="0.5rem">
        <Title variant="title3" display="block" active={active}>
          {data.value.title}
        </Title>
        <SubTitle variant="title3" display="block">
          {data.value.age}
        </SubTitle>
      </Box>
    </WrapperAppendDots>
  );
}

const Wrapper = styled(Grid)(() => {
  return {
    alignItems: "center",
    cursor: "pointer",

    "& .Wrapper__content": {
      display: "flex",
      gap: "1rem",
    },

    "&:hover .title": {
      ...COLOR_TEXT_GRADIENT_ORANGES,
    },
    "&:hover .overley": {
      opacity: "0.4",
    },
  };
});

const WrapperAppendDots = styled(Grid)(() => {
  return {
    paddingBottom: "0.5rem",
    "& .WrapperAppendDots__Video": {
      position: "relative",
    },
  };
});

const Title = styled(Typography, {
  shouldForwardProp: (propName) => propName !== "active",
})<PropsTitle>(({ theme, active }) => {
  if (active) {
    return {
      transition: "all .5s ease",
      ...COLOR_TEXT_GRADIENT_ORANGES,
    };
  }
  return {
    color: theme.palette.secondaryColor.darkBlue,
    transition: "all .5s ease",
  };
});

const SubTitle = styled(Typography)(({ theme }) => {
  return { color: theme.palette.secondaryColor.lightBlue };
});

const Overley = styled(Box, {
  shouldForwardProp: (propName) => propName !== "active",
})<PropsOverley>(({ theme, active }) => {
  if (active) {
    return {
      ...OVERLEY_ITEM,
      background: theme.palette.common.black,
      position: "absolute",
      opacity: 0.4,
    };
  }
  return {
    ...OVERLEY_ITEM,
    background: theme.palette.common.black,
    position: "absolute",

    [theme.breakpoints.down("lg")]: {
      opacity: 0.4,
      zIndex: 2,
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: "5px",
    },
  };
});

const Video = ({ video }: PropsVideo) => {
  const youtubeThumbnail = require("youtube-thumbnail");
  const thumbnail = youtubeThumbnail(video);

  return <Image src={thumbnail.high.url} alt="" style={{ borderRadius: "5px" }} />;
};
// const Video = ({ video }: PropsVideo) => {
//   const youtubeThumbnail = require("youtube-thumbnail");
//   const thumbnail = youtubeThumbnail(video);
//   const render = useMemo(() => {
//     return <Image src={thumbnail.high.url} alt="" style={{ borderRadius: "5px" }} />;
//   }, [thumbnail]);

//   return <Box>{render}</Box>;
// };
