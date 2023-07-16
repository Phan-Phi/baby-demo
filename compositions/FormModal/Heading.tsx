import React, { useMemo } from "react";
import { Box, Button, Typography, styled } from "@mui/material";

import { Headline, LocationIcon, MailIcon, PhoneIcon } from "@/components";
import { useIntl, useSetting } from "@/hooks";
import { useRouter } from "next/router";

const Heading = () => {
  const setting = useSetting();
  const router = useRouter();
  const { locale } = router;
  const { messages } = useIntl();
  const { address, address_en, hotline, emails } = setting;

  const renderMail = useMemo(() => {
    if (typeof emails == "undefined") return null;
    return emails.map((el, idx: number) => (
      <Button
        variant="text"
        startIcon={<MailIcon />}
        href={"mailto:" + hotline}
        className={"contact"}
        key={idx}
        fullWidth
      >
        <Typography variant={"body2"} textTransform={"none"}>
          {el.value}
        </Typography>
      </Button>
    ));
  }, [emails]);

  return (
    <Container>
      <StyledHeadline
        variant="h2"
        title={messages["contact.title"]}
        backgroundVariant={"gradientOrange"}
      />

      <ContactWrapper>
        <Button
          variant="text"
          startIcon={<PhoneIcon />}
          href={"tel:" + hotline}
          className={"contact"}
        >
          <Typography variant={"body2"}>{hotline}</Typography>
        </Button>

        <Box>{renderMail}</Box>
      </ContactWrapper>

      <Button variant="text" startIcon={<LocationIcon />} className={"contact"} fullWidth>
        <Typography variant={"body2"}>
          {locale === "en" ? address_en : address}
        </Typography>
      </Button>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& svg"]: {
      width: 14,
      height: 14,
    },

    ["& .contact"]: {
      padding: 0,
      backdropFilter: "unset",

      ["&:last-child"]: {
        marginTop: theme.spacing(1),
      },

      ["&:hover"]: {
        backgroundColor: "transparent",
      },
    },

    ["& p"]: {
      whiteSpace: "normal",
      textAlign: "left",

      [theme.breakpoints.down("lg")]: {
        ...theme.typography.m_body1,
      },

      [theme.breakpoints.down("sm")]: {
        ...theme.typography.m_body2,
      },
    },

    ["& > button"]: {
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        ["& p"]: {
          width: "85%",
        },
      },
    },
  };
});

const StyledHeadline = styled(Headline)(({ theme }) => {
  return {
    textAlign: "center",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("lg")]: {
      ...theme.typography.m_h2,
    },

    [theme.breakpoints.down("md")]: {
      ...theme.typography.title1,
      marginBottom: "13px",
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_title1,
      marginBottom: theme.spacing(2),
    },
  };
});

const ContactWrapper = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    columnGap: 14,

    [theme.breakpoints.down("lg")]: {
      columnGap: 28,
    },

    [theme.breakpoints.down("sm")]: {
      columnGap: 15,
    },
  };
});

export default Heading;
