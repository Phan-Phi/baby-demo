import { useMemo } from "react";
import { useRouter } from "next/router";
import { isTablet } from "react-device-detect";
import { Box, Stack, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import { Headline, Image, SubTitleFaq } from "@/components";
import BtnSeeMoreClone from "@/components/Buttton/BtnSeeMoreClone";
import { FAQ_ITEM, FaqPage } from "@/interfaces/responseSchema/faq";

interface Props {
  data: FaqPage;
}

const FAQ = ({ data }: Props) => {
  const router = useRouter();
  const { messages } = useIntl();
  const { title, faqs } = data;

  const renderQuestion = useMemo(() => {
    if (faqs == undefined) return;

    const dataQuestion = faqs.filter((el: FAQ_ITEM) => el.value.is_on_homepage === true);
    return dataQuestion.map((el: FAQ_ITEM, idx: number) => {
      return (
        <Box component={"li"} key={idx}>
          {el.value.question}
        </Box>
      );
    });
  }, [faqs]);

  return (
    <Wrapper id="tro-giup">
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyItems="center"
        gap={20}
      >
        <ImageWrapper
          position="relative"
          width={"clamp(0px, 45.83vh, 495px)"}
          height={"clamp(0px, 36.85vh, 398px)"}
        >
          <Image src="/fish-8.png" alt="fish-8" />
        </ImageWrapper>
        <Stack spacing={3}>
          <Headline
            lineHeight="1.4"
            textTransform="unset"
            title={title}
            variant={isTablet ? "m_h1" : "h1"}
            backgroundVariant="gradientOrange"
          />
          <SubTitleSVG>
            {/* {router.locale === "vi" ? <SubTitleFaqVi /> : <SubTitleFaqEn />} */}
            <SubTitleFaq />
          </SubTitleSVG>

          <StyledStack spacing={1.5}>
            <Box component={"ul"} margin="0">
              {renderQuestion}
              <Box component={"li"}>...</Box>
            </Box>
          </StyledStack>

          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/tro-giup");
            }}
          >
            <BtnSeeMoreClone title={messages["seeMore"]} />
          </Box>
        </Stack>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "clamp(0px, 2175.93vh, 23500px)",
    top: "50%",
    transform: "translateY(-50%)",
    width: "clamp(0px, 185.19vh, 2000px)",
  };
});

const SubTitleSVG = styled(Box)(() => {
  return {
    marginTop: "0 !important",

    "& svg": {
      width: "auto",
      height: "clamp(0px,10.1vh,110px)",
    },
  };
});

const StyledStack = styled(Stack)(({ theme }) => {
  return {
    paddingLeft: "5rem",
    marginTop: "1rem !important",

    "& li": {
      color: theme.palette.brandColor.orange,
    },

    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: "3rem",
    },
  };
});

export default FAQ;

const ImageWrapper = styled(Box)(() => {
  return {
    "@keyframes desktop-fish-move-horizontal-effect-at-faq": {
      "0%, 100%": {
        transform: "translate(0, 0)",
      },
      "50%": {
        transform: "translate(50px, 0)",
      },
    },
    animation: `desktop-fish-move-horizontal-effect-at-faq 2000ms infinite`,
  };
});
