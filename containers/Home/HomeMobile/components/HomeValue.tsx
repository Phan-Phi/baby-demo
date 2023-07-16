import { useMemo } from "react";
import { useMeasure } from "react-use";
import { styled } from "@mui/material";

import { useIntl } from "@/hooks";
import { ValueBlock } from "@/interfaces";
import Video from "../../components/Video";
import { Box, Headline, Image } from "@/components";
import CardWithFish from "../../components/CardWithFish";
import { useRouter } from "next/router";
import ModalVideo from "@/compositions/Modal/ModalVideo";

interface Props {
  data: ValueBlock[];
  youtubeLink: string;
}

export default function HomeValue({ data, youtubeLink }: Props) {
  const { messages } = useIntl();
  const router = useRouter();
  const { locale } = router;
  const [measureRef, { width: containerWidth }] = useMeasure<HTMLDivElement>();

  const renderCardItem = useMemo(() => {
    return data.map((el: ValueBlock, idx: number) => {
      const { value } = el;

      return (
        <Box key={idx} className="wrapperCardWithFish">
          <CardWithFish
            description={value.content}
            title={value.title}
            Icon={
              <Box
                position="relative"
                width={"16.47vw"}
                height={"16.47vw"}
                margin="0 auto"
              >
                <Image src={value.image} alt={value.title} />
              </Box>
            }
          />
        </Box>
      );
    });
  }, [data]);

  return (
    <Container position="relative" ref={measureRef}>
      <Box
        display="grid"
        gridTemplateColumns="auto 1fr"
        columnGap={2}
        paddingBottom={6.5}
      >
        <Box
          position="relative"
          width="38.1vw"
          height="27.41vw"
          sx={{
            transform: "rotate(35deg)",
          }}
        >
          <Image src="/fish-3.png" alt="" />
        </Box>
        <Box>
          <Headline
            variant="m_title1"
            title={
              locale === "vi"
                ? messages["home.section3.title5"]
                : messages["home.section3.title3"]
            }
            backgroundVariant="gradientOrange"
          />
          <Headline
            variant="m_title1"
            title={
              locale === "vi"
                ? messages["home.section3.title6"]
                : messages["home.section3.title4"]
            }
            backgroundVariant="gradientOrange"
          />
          <Headline
            variant="m_title1"
            title={
              locale === "vi"
                ? messages["home.section3.title3"]
                : messages["home.section3.title5"]
            }
            backgroundVariant="gradientOrange"
          />
        </Box>
      </Box>

      {renderCardItem}

      <ModalVideo linkVideo={youtubeLink} />

      {/* <Box width={containerWidth} height={(containerWidth * 240) / 352}>
        <Video data={youtubeLink} />
      </Box> */}
    </Container>
  );
}

const Container = styled(Box)(() => {
  return {
    padding: "60px 0",

    "& .wrapperCardWithFish": {
      paddingBottom: "3.3rem",
    },

    "& .wrapperCardWithFish:nth-last-of-type(2)": {
      paddingBottom: "1.5rem",
    },
  };
});
