import { useMemo } from "react";
import { styled } from "@mui/material";

import { useMedia } from "@/hooks";
import { Box, Image } from "@/components";
import FooterContent from "./components/Footer/FooterContent";

export default function Footer() {
  const { isSmDown, isMdDown } = useMedia();

  const renderBackground = useMemo(() => {
    if (isSmDown) {
      return <Image src="/small-wave.svg" alt="background" />;
    }

    if (isMdDown) {
      return <Image src="/medium-wave.svg" alt="background" />;
    }

    return <Image src="/big-wave.svg" alt="background" />;
  }, [isSmDown, isMdDown]);

  return (
    <Wrapper>
      <BackgroundWrapper>
        <Box position="relative" width="100%" height="100%">
          {renderBackground}
        </Box>
      </BackgroundWrapper>

      <FooterContent />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    maxWidth: "100vw",
    overflow: "hidden",
    minHeight: 350,
    zIndex: 69,
    [theme.breakpoints.down("md")]: {
      minHeight: 280,
    },
  };
});

const BackgroundWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    height: "100%",
    ["& img"]: {
      objectPosition: "top center",
      objectFit: "cover",
    },
  };
});
