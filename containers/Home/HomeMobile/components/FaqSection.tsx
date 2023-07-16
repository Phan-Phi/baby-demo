import { useRouter } from "next/router";
import { Box, Container, styled } from "@mui/material";

import { Headline, Image } from "@/components";
import BtnSeeMoreSmall from "@/components/Buttton/BtnSeeMoreSmall";
import { useIntl } from "@/hooks";

const FaqSection = () => {
  const { messages } = useIntl();
  const router = useRouter();

  return (
    <Wrapper id="tro-giup" position="relative">
      <Container>
        <Box display="flex" columnGap={5}>
          <ImageWrapper>
            <Image src="/fish-8.png" alt="" />
          </ImageWrapper>
          <Box>
            <Headline
              marginBottom="1rem"
              title="FAQs"
              variant="m_h1"
              backgroundVariant="gradientOrange"
              textTransform="unset"
            />

            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/tro-giup");
              }}
            >
              <BtnSeeMoreSmall title={messages["seeMore"]} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    transform: "translateY(-80%)",

    [theme.breakpoints.down(320)]: {
      transform: "unset",
    },
  };
});

const ImageWrapper = styled(Box)(() => {
  return {
    position: "relative",
    width: "38.66vw",
    height: "31.2vw",
    aspectRatio: "144.96 / 117",

    "@keyframes mobile-fish-move-effect-at-faq": {
      "0%, 100%": {
        transform: "translateX(0)",
      },
      "50%": {
        transform: "translate(20px)",
      },
    },
    animation: `mobile-fish-move-effect-at-faq 2000ms infinite`,
  };
});

export default FaqSection;
