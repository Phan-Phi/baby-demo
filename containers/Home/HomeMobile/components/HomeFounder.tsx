import { useMeasure } from "react-use";
import { Stack, Typography, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import { FounderBlocks } from "@/interfaces";
import { Box, Headline, Image } from "@/components";
import AboutCard from "../../components/AboutCard";

interface Props {
  data: FounderBlocks[];
}
export default function HomeFounder({ data }: Props) {
  const { messages } = useIntl();
  const [measureRef, { width }] = useMeasure<HTMLDivElement>();

  return (
    <Box ref={measureRef}>
      <Stack textAlign="center" spacing={1} marginBottom={2.5}>
        <Box position="relative" width={width} height={width / (352 / 282)}>
          <Image src="/fish-5.png" alt="fish-5" />
        </Box>

        <Headline
          variant="m_title1"
          backgroundVariant="gradientBlue"
          title={messages["home.section4.title1"]}
          textTransform="none"
        />

        <Headline
          variant="m_title1"
          backgroundVariant="gradientOrange"
          title={messages["home.section4.title2"]}
          textTransform="none"
          marginTop="0 !important"
        />

        <Text variant="m_body1" mt="1rem" paddingX={4}>
          {messages["home.section4.content1"]}
        </Text>
      </Stack>

      <AboutCard src={`${data[0].value}`}>
        <Box maxWidth="85%" marginBottom="30px">
          <Typography
            variant="m_body1"
            color="secondary.main"
            textAlign="center"
            display="block"
          >
            {messages["home.section4.subContent1"]}
          </Typography>
        </Box>
      </AboutCard>

      <AboutCard src={`${data[1].value}`}>
        <Box maxWidth="85%" marginBottom="30px">
          <Typography
            variant="m_body1"
            color="secondary.main"
            textAlign="center"
            display="block"
          >
            {messages["home.section4.subContent2"]}
          </Typography>
        </Box>
      </AboutCard>

      <ImageWrapper>
        <Box className="founder">
          <Headline
            variant="m_title1"
            title={messages["home.section4.founder"]}
            backgroundVariant="gradientOrange"
          />
        </Box>

        <Box className="founder-fish">
          <Image src="/fish-6.png" alt="decor" />
        </Box>

        <Box position="relative" width={width} height={width / (375 / 471)}>
          <Image src="/teacher-tablet.png" alt="decor" />
        </Box>
        <Box className="founder-name">
          <Headline
            variant="m_title1"
            title={messages["home.section4.name"]}
            backgroundVariant="gradientOrange"
          />
        </Box>
        <Box className="founder-description">
          <Typography variant="m_body1" color="secondary.main" component="p">
            {messages["home.section4.teacherContent1"]}{" "}
            <Typography variant="m_body1" color="primary.main">
              Infant Aquatics
            </Typography>{" "}
            {messages["home.section4.teacherContent2"]}
          </Typography>
        </Box>
      </ImageWrapper>

      <AboutCard src={`${data[2].value}`}>
        <Box maxWidth="85%" marginBottom="30px">
          <Typography
            variant="m_body1"
            color="secondary.main"
            textAlign="center"
            display="block"
          >
            {messages["home.section4.subContent3"]}
          </Typography>
        </Box>
      </AboutCard>

      <AboutCard src={`${data[3].value}`}>
        <Box maxWidth="90%">
          <Box component="ul">
            <Box component="li" paddingBottom={1} color="secondary.main">
              <Typography variant="m_body1" color="secondary.main">
                {messages["home.section4.subContent4"]}
              </Typography>
            </Box>

            <Box component="li" color="secondary.main">
              <Typography variant="m_body1" color="secondary.main">
                {messages["home.section4.subContent5"]}
              </Typography>
            </Box>
          </Box>
        </Box>
      </AboutCard>

      <Box position="relative" width={width} height={width / (375 / 487)}>
        <Image src="/teacher-decor-tablet.png" alt="" />
      </Box>
    </Box>
  );
}

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    marginTop: 70,
    marginBottom: 180,

    ["& img"]: {
      objectFit: "contain",
    },
    ["& .founder"]: {
      position: "absolute",
      top: "-3.98%",
      transform: "translate(-50%,-100%)",
      left: "50%",
      whiteSpace: "nowrap",
    },
    ["& .founder-name"]: {
      position: "absolute",
      background: theme.palette.gradientColor.gradientBlue30,
      padding: "8px 32px",
      border: "1px solid #83D2FF",
      borderRadius: 10,
      top: "98.2%",
      left: "50%",
      width: "100%",
      whiteSpace: "nowrap",
      transform: "translate(-50%, 0)",
      backdropFilter: "blur(5px)",
      textAlign: "center",
    },
    ["& .founder-description"]: {
      position: "absolute",
      top: "114%",
      left: "50%",
      transform: "translate(-50%, 0)",
      textAlign: "center",
      width: "85%",
    },

    ["& .founder-fish"]: {
      position: "absolute",
      width: "129px",
      height: "151px",
      aspectRatio: "129 / 151",
      top: "19.25%",
      left: "1.75%",

      "@keyframes tablet-fish-jump-effect-at-teacher": {
        "0%, 100%": {
          transform: "translate(0, 0)",
        },
        "50%": {
          transform: "translate(0, -35px) rotateZ(-8deg)",
        },
      },
      animation: `tablet-fish-jump-effect-at-teacher 2000ms infinite`,
    },
  };
});

const Text = styled(Typography)(({ theme }) => {
  return {
    display: "block",
    textAlign: "center",
    color: theme.palette.secondary.main,
  };
});
