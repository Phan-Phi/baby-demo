import YouTube from "react-youtube";
import queryString from "query-string";
import { styled } from "@mui/material";

import { Box } from "@/components";

interface Props {
  video: string;
}

export default function VideoYouTube({ video }: Props) {
  if (video === "") {
    return (
      <Video>
        <Box width="100%" height="100%"></Box>
      </Video>
    );
  }
  const { url, query } = queryString.parseUrl(video);
  const { pathname } = new URL(url);
  let videoId;

  if (query.v) {
    videoId = query.v;
  } else {
    videoId = pathname.replace("/", "");
  }

  return (
    <Video>
      <YouTube
        videoId={videoId as string}
        opts={{
          width: "100%",
          height: "100%",
        }}
      />
    </Video>
  );
}

const Video = styled(Box)(({ theme }) => {
  return {
    borderRadius: "20px",
    background: "#EAEAEA",
    width: "100%",
    height: "380px",

    "& iframe": {
      height: "380px !important",
      borderRadius: "1.25rem",
    },

    [theme.breakpoints.down("sm")]: {
      height: "200px",
      borderRadius: "10px",
      "& iframe": {
        height: "200px !important",
        borderRadius: "10px",
      },
    },
  };
});
