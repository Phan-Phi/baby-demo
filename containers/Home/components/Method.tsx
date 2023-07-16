import { useRouter } from "next/router";
import { isTablet } from "react-device-detect";
import { Box, Typography, styled } from "@mui/material";

import { useIntl } from "@/hooks";
import { Headline } from "@/components";
import { CompareMethodBlock } from "@/interfaces";

interface MethodProps {
  data: CompareMethodBlock[];
}

const Method = (props: MethodProps) => {
  const { locale } = useRouter();
  const { messages } = useIntl();
  const { data } = props;

  if (data == undefined) return null;

  return (
    <Container>
      <CellWrapper gridArea={"method-header"} className="hide-on-tablet cell-header">
        <StyledBox className="header">
          <StyledHeadline
            title={messages["home.table.title1"]}
            backgroundVariant="gradientOrange"
          />
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"method-1"} className="cell-header">
        <StyledBox className="header headerSpecial">
          {locale === "en" ? (
            <>
              <StyledHeadline title={"SURVIVAL"} display="block" />
              <StyledHeadline title={"SWIMMING"} />
            </>
          ) : (
            <StyledHeadline title={"BƠI SINH TỒN"} />
          )}
          {/* <StyledHeadline title={data[0]?.value?.name} /> */}
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"method-2"} className="cell-header">
        <StyledBox className="header headerSpecial">
          {locale === "en" ? (
            <>
              <StyledHeadline title={"RECREATIONAL"} display="block" />
              <StyledHeadline title={"SWIMMING"} />
            </>
          ) : (
            <StyledHeadline title={"LÀM QUEN NƯỚC"} />
          )}
        </StyledBox>
      </CellWrapper>

      <CellWrapper gridArea={"description-header"} className="cell-header">
        <StyledBox className="header">
          <StyledHeadline
            title={messages["home.table.title2"]}
            backgroundVariant="gradientOrange"
          />
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"description-1"}>
        <StyledBox>
          <StyledDescription>{data[0]?.value?.description}</StyledDescription>
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"description-2"}>
        <StyledBox>
          <StyledDescription>{data[1]?.value?.description}</StyledDescription>
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"pros-header"} className="cell-header">
        <StyledBox className="header">
          <StyledHeadline
            title={messages["home.table.title3"]}
            backgroundVariant="gradientOrange"
          />
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"pros-1"}>
        <StyledBox>
          <StyledDescription>{data[0]?.value?.pro}</StyledDescription>
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"pros-2"}>
        <StyledBox>
          <StyledDescription>{data[1]?.value?.pro}</StyledDescription>
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"cons-header"} className="cell-header">
        <StyledBox className="header">
          <StyledHeadline
            title={messages["home.table.title4"]}
            backgroundVariant="gradientOrange"
          />
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"cons-1"}>
        <StyledBox>
          <StyledDescription>{data[0]?.value?.con}</StyledDescription>
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"cons-2"}>
        <StyledBox>
          <StyledDescription>{data[1]?.value?.con}</StyledDescription>
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"conclusion-header"} className="cell-header">
        <StyledBox className="header">
          <StyledHeadline
            title={messages["home.table.title5"]}
            backgroundVariant="gradientOrange"
          />
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"conclusion-1"}>
        <StyledBox>
          <StyledDescription>{data[0]?.value?.conclusion}</StyledDescription>
        </StyledBox>
      </CellWrapper>
      <CellWrapper gridArea={"conclusion-2"}>
        <StyledBox>
          <StyledDescription>{data[1]?.value?.conclusion}</StyledDescription>
        </StyledBox>
      </CellWrapper>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    backgroundColor: "#1C98DD",
    backdropFilter: "blur(10px)",
    display: "grid",
    border: "2px solid #1C98DD",
    borderRadius: 30,
    gap: 2,
    position: "relative",
    overflow: "hidden",
    gridTemplateAreas: `
        'method-header description-header pros-header cons-header conclusion-header'
        'method-1 description-1 pros-1 cons-1 conclusion-1'
        'method-2 description-2 pros-2 cons-2 conclusion-2'
        `,

    [theme.breakpoints.down("md")]: {
      border: "1.5px solid #1C98DD",
      borderRadius: 10,
      gap: 1.5,
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateAreas: `
      'method-1 method-2'
      'description-header description-header'
      'description-1 description-2'
      'pros-header pros-header'
      'pros-1 pros-2'
      'cons-header cons-header'
      'cons-1 cons-2'
      'conclusion-header conclusion-header'
      'conclusion-1 conclusion-2'
      `,
    },
    ...(isTablet && {
      border: "1.5px solid #1C98DD",
      borderRadius: 10,
      gap: 1.5,
    }),
  };
});

const CellWrapper = styled(Box)(({ theme }) => {
  return {
    // backgroundColor: "#FFF",
    backgroundColor: "#c4e3f7",
    [theme.breakpoints.down("md")]: {
      ["&.hide-on-tablet"]: {
        display: "none",
      },
    },
  };
});

const StyledBox = styled(Box)(({ theme }) => {
  return {
    padding: "12px 16px",
    overflow: "hidden",
    position: "relative",
    height: "100%",
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignItems: "center",
    ["&.header"]: {
      backgroundColor: "#D3E6F3",
      // backgroundColor: "rgba(98, 178, 223, 0.3)",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      padding: "18px 16px",
      [theme.breakpoints.down("md")]: {
        padding: "13px 3px ",
        textAlign: "center",
      },
    },

    ["&.headerSpecial"]: {
      display: "flex",
      flexDirection: "column",
      padding: "18px 16px",
      [theme.breakpoints.down("md")]: {
        padding: "13px 3px ",
        textAlign: "center",
      },
    },

    [theme.breakpoints.down("md")]: {
      padding: "20px 18px",
      alignItems: "flex-start",
    },
  };
});

const StyledDescription = styled(Typography)(({ theme }) => {
  return {
    textAlign: "justify",
    [theme.breakpoints.down("md")]: theme.typography.m_body1,
    ...(isTablet && theme.typography.m_body1),
  };
});

const StyledHeadline = styled(Headline)(({ theme }) => {
  return {
    textTransform: "uppercase",
    ...theme.typography.title1,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    // ...(isTablet && theme.typography.m_title2),
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "16px",
    // },
  };
});

export default Method;
