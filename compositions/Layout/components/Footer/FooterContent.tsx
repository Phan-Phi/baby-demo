import { Fragment } from "react";

import {
  Box,
  Image,
  Link,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  Spacing,
  Stack,
} from "@/components";

import { useMedia, useSetting } from "@/hooks";
import { BlockTypeEmail, SocialIcon } from "@/interfaces";
import { Container, SvgIconProps, Typography, styled, useTheme } from "@mui/material";
import { useRouter } from "next/router";

interface contentProps {
  title: string;
  Icon: (props: SvgIconProps) => JSX.Element;
}

interface RenderSocialIconProps {
  data: SocialIcon[];
}

interface RenderEmail {
  data: BlockTypeEmail[];
}

export default function FooterContent() {
  const { isSmDown, isMdDown } = useMedia();

  if (isSmDown) return <FooterContentOnMobile />;

  if (isMdDown) return <FooterContentOnTablet />;

  return <FooterContentOnDesktop />;
}

const FooterContentOnDesktop = () => {
  const theme = useTheme();
  const router = useRouter();
  const { locale } = router;

  const {
    address,
    address_en,
    footer_description,
    footer_description_en,
    hotline,
    emails,
    footer_social_icon,
  } = useSetting();

  return (
    <ContainerDesktop>
      <Stack direction="row" alignItems="flex-end" marginTop={5} gap={4}>
        <Box>
          <Box
            position="relative"
            width={"clamp(0px, 26.85vh, 290px)"}
            height={"clamp(0px, 26.85vh, 290px)"}
          >
            <Image src="/image/logoFooter.png" alt="fish-1" />
          </Box>
        </Box>
        <Box>
          <Typography
            textAlign="justify"
            variant="body2"
            color={theme.palette.common.white}
          >
            {locale === "en" ? footer_description_en : footer_description}
          </Typography>
          <Stack direction={"column"}>
            {address && (
              <Content
                title={locale === "en" ? address_en : address}
                Icon={LocationIcon}
              />
            )}

            <Stack direction={"row"} alignItems={"center"} gap={3}>
              {hotline && (
                <Link href={"tel:" + hotline}>
                  <Content title={hotline} Icon={PhoneIcon} />
                </Link>
              )}

              {emails && <RenderEmail data={emails} />}
            </Stack>
          </Stack>
          <Spacing spacing={2.5} />

          <RenderCopyright />
        </Box>

        <Box alignSelf="center">
          <Stack gap={4} flexDirection={"column"} justifyContent="center" paddingTop={2}>
            {footer_social_icon && <RenderSocialIcon data={footer_social_icon} />}
          </Stack>
        </Box>
      </Stack>
    </ContainerDesktop>
  );
};

const FooterContentOnTablet = () => {
  const theme = useTheme();
  const router = useRouter();
  const { locale } = router;
  const { isMdDown } = useMedia();

  const {
    address,
    address_en,
    footer_description,
    footer_description_en,
    hotline,
    emails,
    footer_social_icon,
  } = useSetting();

  return (
    <Container>
      <Stack marginX="auto" width="65%" marginTop={5} direction="row" gap={1.5}>
        <Box>
          <Box
            position="relative"
            width={"12.63vw"}
            height={"12.63vw"}
            sx={{
              transform: "translateY(-40px)",
            }}
          >
            <Image src="/image/logoFooter.png" alt="fish-1" />
          </Box>
        </Box>
        <Box flexGrow={1}>
          <Typography
            variant="m_body2"
            textAlign="justify"
            display="block"
            color={theme.palette.common.white}
          >
            {locale === "en" ? footer_description_en : footer_description}
          </Typography>

          <Stack direction={"column"} gap={0.5} maxWidth={300}>
            <Box display="flex" alignItems={isMdDown ? "flex-start" : "center"} gap={2}>
              {hotline && (
                <Link href={"tel:" + hotline}>
                  <Content title={hotline} Icon={PhoneIcon} />
                </Link>
              )}

              {emails && <RenderEmail data={emails} />}
            </Box>

            {address && (
              <Box
                sx={{
                  padding: "0 9px",
                  "& .MuiStack-root": {
                    alignItems: "flex-start",
                    gap: 1,
                  },
                }}
              >
                <Content
                  title={locale === "en" ? address_en : address}
                  Icon={LocationIcon}
                />
              </Box>
            )}

            <Box paddingY={1} gap={2} display="flex" justifyContent="center">
              {footer_social_icon && <RenderSocialIcon data={footer_social_icon} />}
            </Box>

            {/* <Typography
              variant="MontserratText2"
              color={theme.palette.background.default}
            >
              Copyright © 2023 BABY FISH. All rights reserved
            </Typography> */}
            <RenderCopyright />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

const FooterContentOnMobile = () => {
  const theme = useTheme();
  const router = useRouter();
  const { locale } = router;

  const {
    address,
    address_en,
    footer_description,
    footer_description_en,
    hotline,
    emails,
    footer_social_icon,
  } = useSetting();
  const { isSmDown } = useMedia();

  return (
    <Container>
      <Box
        paddingTop={6}
        paddingBottom={3}
        display="grid"
        gridTemplateColumns="30% 70%"
        rowGap={2}
        overflow="hidden"
      >
        <Box>
          <Box position="relative" width="100%" height="100%">
            <Image
              src="/image/logoFooter.png"
              alt="fish-1"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            display="block"
            variant="m_body2"
            textAlign="justify"
            color={theme.palette.common.white}
          >
            {locale === "en" ? footer_description_en : footer_description}
          </Typography>
        </Box>

        <Box gridColumn="1 / span 2">
          <Box display="flex" justifyContent="center">
            <Stack maxWidth="80%" alignItems="center" direction={"column"} gap={2}>
              <Box>
                <Stack
                  direction={"row"}
                  justifyContent="center"
                  alignItems={isSmDown ? "flex-start" : "center"}
                  gap={1}
                >
                  {hotline && (
                    <Link href={"tel:" + hotline}>
                      <Content title={hotline} Icon={PhoneIcon} />
                    </Link>
                  )}

                  {emails && <RenderEmail data={emails} />}
                </Stack>
                {address && (
                  <Box
                    sx={{
                      padding: "0 15px",
                      "& .MuiStack-root": {
                        alignItems: "flex-start",
                        gap: 0,
                      },

                      "& .MuiSvgIcon-root": {
                        marginTop: "0.2rem",
                      },
                      "& p": {
                        width: "240px",
                      },
                    }}
                  >
                    <Content
                      title={locale === "en" ? address_en : address}
                      Icon={LocationIcon}
                    />
                  </Box>
                )}
              </Box>

              <Box gap={2} display="flex" justifyContent="center">
                {footer_social_icon && <RenderSocialIcon data={footer_social_icon} />}
              </Box>

              {/* <Typography
                variant="MontserratText2"
                textAlign="center"
                color={theme.palette.background.default}
              >
                Copyright © 2023 BABY FISH. All rights reserved
              </Typography> */}
              <RenderCopyright />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const Content = (props: contentProps) => {
  const theme = useTheme();
  const { isSmDown } = useMedia();
  const { title, Icon } = props;

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      gap={"10px"}
      marginTop="10px"
      sx={{
        "& svg": {
          color: theme.palette.common.white,
        },
      }}
    >
      <Icon sx={{ width: 14, height: 14 }} />
      <StyledTypography
        variant="body2"
        color={theme.palette.background.default}
        textAlign={isSmDown ? "center" : "unset"}
      >
        {title}
      </StyledTypography>
    </Stack>
  );
};

const StyledTypography = styled(Typography)(({ theme }) => {
  return {
    fontSize: "15px",
    lineHeight: "22px",
    [theme.breakpoints.down("md")]: {
      ...theme.typography.m_body2,
    },
  };
});

const RenderSocialIcon = ({ data }: RenderSocialIconProps) => {
  return (
    <Fragment>
      {data.map((el: SocialIcon, idx: number) => {
        const { value } = el;
        return (
          <Link key={idx} href={value.link} target="_blank">
            <WrapperSocialIcon>
              <Image src={value.icon} alt="" />
            </WrapperSocialIcon>
          </Link>
        );
      })}
    </Fragment>
  );
};

const RenderEmail = ({ data }: RenderEmail) => {
  return (
    <WrapperEmail>
      {data.map((el: BlockTypeEmail, idx: number) => {
        const { value } = el;
        return (
          <Link key={idx} href={"mailto:" + value}>
            <Content title={value} Icon={MailIcon} />
          </Link>
        );
      })}
    </WrapperEmail>
  );
};

const WrapperEmail = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    gap: "1.5rem",

    [theme.breakpoints.down("md")]: {
      gap: 0,
      flexDirection: "column",
    },
  };
});

const WrapperSocialIcon = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    width: 48,
    height: 48,

    [theme.breakpoints.down("md")]: {
      width: 24,
      height: 24,
    },
  };
});

const ContainerDesktop = styled(Container)(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      marginTop: "3.93rem",
    },
  };
});

const RenderCopyright = () => {
  return (
    <WrapperCopyright>
      <TextCopyright>Copyright © 2023 BABY FISH. All rights reserved</TextCopyright>

      <TextPowered>
        Designed by{" "}
        <Link href="https://trinix.studio/" target="_blank">
          Trinix Studio
        </Link>{" "}
        & Powered by{" "}
        <Link href="https://t-solution.vn/" target="_blank">
          T-Solution
        </Link>
      </TextPowered>
    </WrapperCopyright>
  );
};

const WrapperCopyright = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",

    "& a": {
      color: "white",
      "&:hover": {
        textDecoration: "underline",
      },
    },

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  };
});

const TextPowered = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.TextICielThin,
    display: "block",
    color: theme.palette.background.default,
    fontSize: 13,
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.down("md")]: {
      ...theme.typography.MontserratText2,
    },
  };
});

const TextCopyright = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.TextICielThin,
    display: "block",
    color: theme.palette.background.default,
    fontSize: 13,
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "13px !important",
    },

    [theme.breakpoints.down("md")]: {
      marginBottom: "0.5rem",
      ...theme.typography.MontserratText2,
    },
  };
});
