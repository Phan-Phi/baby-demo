import { isTablet } from "react-device-detect";
import { useCallback, useMemo, useState } from "react";
import { Box, Tab, Typography, styled } from "@mui/material";

import Review from "./Review";
import { useIntl } from "@/hooks";
import { ReviewBlocks } from "@/interfaces";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { Image, BlueFishSVG, Tabs, TabPanel, Headline } from "@/components";

interface Props {
  data: ReviewBlocks[];
}

interface PropsTabItem {
  currentTab: number;
  idxTab: number;
}

const Testimonial = ({ data }: Props) => {
  const { messages } = useIntl();
  const [currentTab, setCurrentTab] = useState<number>(0);
  // le.log("sadsads", (100 * 195) / 318);
  const onChangeTabHandler = useCallback(
    (e: React.SyntheticEvent, value: number): void => {
      setCurrentTab(value);
    },
    []
  );

  const renderTab = useMemo(() => {
    return (
      <Tabs value={currentTab} onChange={onChangeTabHandler}>
        {data.map((el: any, idx: number) => {
          return (
            <Tab
              key={idx}
              label={<TabItem currentTab={currentTab} idxTab={idx} />}
              value={el.id}
              disableRipple
            />
          );
        })}
      </Tabs>
    );
  }, [currentTab, data, onChangeTabHandler]);

  const renderTabPanelContent = useMemo(() => {
    return (
      <TabPanel value={currentTab} index={currentTab}>
        <Review data={data[currentTab].value.content} />
      </TabPanel>
    );
  }, [currentTab, data]);

  const renderTabPanelName = useMemo(() => {
    return (
      <TabPanel value={currentTab} index={currentTab}>
        <Headline
          title={data[currentTab].value.customer_name}
          backgroundVariant="gradientBlue"
          className="testimonial-client-name"
        />
        <Typography className="testimonial-client-type">
          {messages["home.testimonial.client"]}
        </Typography>
      </TabPanel>
    );
  }, [currentTab, messages, data]);

  return (
    <Wrapper>
      <HeadlineWrapper>
        <Headline
          title={messages["home.testimonial.title"]}
          variant="m_title1"
          backgroundVariant="gradientOrange"
          className="testimonial-headline"
        />
      </HeadlineWrapper>

      <QuoteWrapper>
        <Quote />
      </QuoteWrapper>

      <ImageWrapper>
        <Box className="image-wrapper-inner">
          <Image src="/fish-4.png" alt="fish-4" />
        </Box>
      </ImageWrapper>

      <Box className="testimonial-content">
        <SlickSlider variant="simple" props={{ dots: true }}>
          {renderTabPanelContent}
          {/* <Review data={data[currentTab].value.content} /> */}
        </SlickSlider>
      </Box>

      <FishBulletWrapper>{renderTab}</FishBulletWrapper>
      <MetaWrapper className="testimonial-metadata">{renderTabPanelName}</MetaWrapper>
    </Wrapper>
  );
};

const Quote = () => {
  return (
    <svg viewBox="0 0 143 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63.295 14.279c0-6.053-2.813-10.865-8.283-14.279C38.29 0 26.256 2.638 19.223 7.915 12.19 13.192 7.189 18.78 4.22 24.522 1.407 30.265 0 37.094 0 45.009 0 59.288 3.438 69.996 10.471 77.29 17.504 84.431 25.474 88 34.383 88c8.908 0 16.253-2.483 22.192-7.45 5.939-4.966 8.908-11.33 8.908-19.09 0-7.605-2.657-14.123-7.814-19.555-5.157-5.277-10.627-7.916-16.723-7.916-5.938 0-10.783 1.087-14.378 3.105C28.6 26.073 40.634 20.641 62.67 20.641c.469-2.639.625-4.656.625-6.363Zm14.066 30.73c0 14.279 3.438 24.987 10.47 32.282C94.866 84.431 102.836 88 111.744 88s16.254-2.483 22.193-7.45C140.031 75.584 143 69.22 143 61.46c0-7.605-2.657-14.123-7.814-19.555-5.158-5.277-10.628-7.916-16.723-7.916-6.095 0-10.94 1.087-14.534 3.105 2.188-11.02 14.222-16.452 36.258-16.452.469-2.639.625-4.656.625-6.363-.156-6.364-2.969-11.02-8.439-14.279-16.723 0-28.757 2.638-35.79 7.915C89.552 13.192 84.55 18.78 81.58 24.522c-2.813 5.743-4.22 12.572-4.22 20.487Z"
        fill="url(#a)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="71.5"
          y1="0"
          x2="71.5"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA25E" />
          <stop offset=".409" stopColor="#FF6E4B" />
          <stop offset=".743" stopColor="#FF4B4B" />
          <stop offset="1" stopColor="#EE4545" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const TabItem = ({ currentTab, idxTab }: PropsTabItem) => {
  if (currentTab === idxTab) {
    return (
      <IconWrapper>
        <BlueFishSVG />
      </IconWrapper>
    );
  }

  return (
    <IconWrapper>
      <BlueFishSVG className="no-fill" />
    </IconWrapper>
  );
};

const HeadlineWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "-7%",
    left: 0,
    width: "100%",
    transform: "translateY(-100%)",
    display: "flex",
    justifyContent: "center",
    ["& .testimonial-headline"]: {
      ...theme.typography.h2,

      // [theme.breakpoints.between("md","lg")]: {
      //  fontSize:""
      // },

      ...(isTablet && theme.typography.m_title1),
    },
    [theme.breakpoints.down("md")]: {
      top: "-10.5%",
      ["& .testimonial-headline"]: theme.typography.m_title1,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingBottom: "0.5rem",
    },
  };
});

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: "clamp(0px, 90.17vh, 973.87px)",
    height: "clamp(0px, 53.46vh, 577.4px)",
    aspectRatio: "973.87 / 577.4",
    backgroundSize: "cover",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 973.87 577.4'%3E%3Cpath d='M919.28,5.12H54.59C28.27,5.12,6.93,26.67,6.93,53.26V439.82C6.93,466.41,28.27,488,54.59,488H609s7.74,12.09-11.6,39.92L581.92,556s-8,15.07,0,17.1c0,0,8.9-.29,23-10.44L719.35,496s13.2-6.57,33.57-8.07H919.28c26.32,0,47.65-21.55,47.65-48.14V53.26C966.93,26.67,945.6,5.12,919.28,5.12Z' fill='%23FFF' stroke='%231C98DD' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='15 15'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.between("md", "lg")]: {
      width: "442px",
      height: "419px",
      aspectRatio: "442 / 419",
      backgroundImage: `url('data:image/svg+xml,<svg  viewBox="0 0 442 419" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11C1 5.47714 5.47715 1 11 1H431C436.523 1 441 5.47715 441 11V366C441 371.523 436.524 376 431.002 376C411.675 376 389.484 376 373.881 376C367.814 376 347.753 406.134 336.876 416.794C333.924 419.687 330.856 417.775 331.157 413.653C332.085 400.936 336.214 376.606 331.258 376C272.916 376 92.477 376 10.9324 376C5.40959 376 1 371.523 1 366V11Z" fill="%23fff" stroke="%231C98DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 8"/></svg>')`,
    },

    [theme.breakpoints.down("md")]: {
      width: "59.41vw",
      height: "38.31vw",
      aspectRatio: "442 / 285",
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 442 285' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 11C1 5.477 5.477 1 11 1h420c5.523 0 10 4.477 10 10v220.523c0 5.523-4.476 10-9.998 10h-57.121c-6.067 0-26.128 30.134-37.005 40.795-2.952 2.893-6.02.981-5.719-3.142.928-12.716 5.057-37.047.101-37.653H10.932c-5.522 0-9.932-4.477-9.932-10V11Z' fill='%23fff' stroke='%231C98DD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='8 8'/%3E%3C/svg%3E")`,
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "calc(100% * 285 / 354)",
      aspectRatio: "354 / 285",
      backgroundImage: `url('data:image/svg+xml,<svg viewBox="0 0 354 285" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11C1 5.477 5.477 1 11 1h332c5.523 0 10 4.477 10 10v220.419c0 5.523-4.477 10-10 10h-71.249c-7.545 0-32.967 31.876-45.849 41.72-3.15 2.408-6.231.329-5.901-3.621 1.059-12.642 6.21-37.486.153-38.099H11.016c-5.523 0-10.016-4.477-10.016-10V11Z" fill="%23fff" stroke="%231C98DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 8"/></svg>')`,
    },

    ["& .testimonial-content"]: {
      position: "absolute",
      top: "5.28%",
      left: "13.5%",
      right: "3.5%",
      bottom: "19.36%",
      overflow: "hidden",

      [theme.breakpoints.between("md", "lg")]: {
        top: "7.71%",
        left: "17.27%",
        right: "2.27%",
        bottom: "18.5%",
      },

      [theme.breakpoints.down("md")]: {
        top: "7.71%",
        left: "17.27%",
        right: "2.27%",
        bottom: "23.5%",
      },

      [theme.breakpoints.down("sm")]: {
        top: "9.12%",
        left: "4.54%",
        right: "2.84%",
        bottom: "23.1%",
      },

      ...(isTablet && {
        left: "15%",
      }),
    },
  };
});

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: "-10%",
    bottom: "5%",
    transform: "rotate(-10deg)",
    ["& .image-wrapper-inner"]: {
      position: "relative",
      width: "clamp(0px, 20.37vh, 220px)",
      height: "clamp(0px, 23.15vh, 250px)",
      aspectRatio: "220 / 250",
      [theme.breakpoints.between("md", "lg")]: {
        width: "100px",
        height: "110px",
        asspectRatio: "124.83 / 140.24",
      },
      [theme.breakpoints.down("md")]: {
        width: "16.78vw",
        height: "18.85vw",
        asspectRatio: "124.83 / 140.24",
      },
      [theme.breakpoints.down("sm")]: {
        width: "33.29vw",
        height: "37.4vw",
      },
    },

    "@keyframes desktop-fish-jump-effect": {
      "0%, 100%": {
        transform: "translate(0, 0) rotate(-10deg)",
      },
      "50%": {
        transform: "translate(0, -75px) rotate(10deg)",
      },
    },
    animation: `desktop-fish-jump-effect 2000ms infinite`,
    animationPlayState: "running",

    [theme.breakpoints.down("md")]: {
      left: "-12%",
      bottom: "5%",
      animationPlayState: "paused",
    },

    [theme.breakpoints.down("sm")]: {
      left: "-5%",
      top: "87.37%",
    },
  };
});

const QuoteWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "3.7%",
    left: "-1.77%",
    width: "clamp(0px, 13.24vh, 143px)",
    aspectRatio: "143 / 88",
    height: "clamp(0px, 8.15vh, 88px)",
    [theme.breakpoints.between("md", "lg")]: {
      width: "6.41vw",
      aspectRatio: "70 / 41",
      height: "5.51vw",
      left: "-2.72%",
      top: "5.5%",
    },
    [theme.breakpoints.down("md")]: {
      width: "9.41vw",
      aspectRatio: "70 / 41",
      height: "5.51vw",
      left: "-2.72%",
      top: "7.72%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "18.67vw",
      height: "10.93vw",
      top: -6,
      left: 0,
      transform: "translateY(-50%)",
    },
  };
});

const IconWrapper = styled(Box)(({ theme }) => {
  return {
    width: "clamp(0px, 5.83vh, 63px)",
    height: "clamp(0px, 3.7vh, 40px)",
    aspectRatio: "63 / 40",
    [theme.breakpoints.down("md")]: {
      width: "5.38vw",
      height: "3.47vw",
      aspectRatio: "40 / 25.78",
    },
    [theme.breakpoints.down("sm")]: {
      width: "12.28vw",
      height: "7.37vw",
      aspectRatio: "35 / 21",
    },
  };
});

const FishBulletWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "23.59%",
    left: "103.64%",
    transform: "scaleX(-1)",

    ["& .MuiTab-root"]: {
      padding: 0,
      minHeight: "unset",
      minWidth: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      top: "125%",
      right: 0,
      left: "unset",
    },

    ["& .MuiTabs-flexContainer"]: {
      rowGap: 16,
      [theme.breakpoints.down("md")]: {
        rowGap: 8,
      },
      [theme.breakpoints.down("sm")]: {
        height: "2.2rem",
        columnGap: 16,
        flexDirection: "row-reverse !important",
      },
    },
  };
});

const MetaWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "88%",
    right: "43.96%",
    textAlign: "right",
    [theme.breakpoints.between("md", "lg")]: {
      top: "92%",
      right: "31%",
    },
    [theme.breakpoints.down("md")]: {
      right: "30.68%",
      top: "92.28%",
    },
    [theme.breakpoints.down("sm")]: {
      right: 0,
      top: "100%",
      maxWidth: "70vw",
    },
    ["& .testimonial-client-name"]: {
      ...theme.typography.title1,
      [theme.breakpoints.down("md")]: theme.typography.m_title2,

      ...(isTablet && theme.typography.m_title2),
    },
    ["& .testimonial-client-type"]: {
      ...theme.typography.body1,
      [theme.breakpoints.down("md")]: {
        ...theme.typography.m_body1,
      },
    },
  };
});

export default Testimonial;
