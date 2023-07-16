import { Box, Stack, Typography, styled, useTheme } from "@mui/material";

import { Headline } from "@/components";
import { CompareMethodBlock } from "@/interfaces";

interface Props {
  data?: CompareMethodBlock[];
}

const Method = ({ data }: Props) => {
  const theme = useTheme();

  if (data === undefined) return null;

  return (
    <Stack
      sx={{
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column-reverse",
          gap: "30px",
        },
      }}
    >
      <Container>
        <CellWrapper
          gridArea={"myArea"}
          sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}
        >
          <StyledBox className="header header-topleft">
            <TitleOrange>Phương pháp</TitleOrange>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea1"}>
          <StyledBox className="header">
            <TitleOrange>Mô tả</TitleOrange>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea2"}>
          <StyledBox className="header">
            <TitleOrange>Ưu điểm</TitleOrange>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea3"}>
          <StyledBox className="header">
            <TitleOrange>Nhược điểm</TitleOrange>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea4"}>
          <StyledBox className="header header-topright">
            <TitleOrange>Kết luận</TitleOrange>
          </StyledBox>
        </CellWrapper>

        <CellWrapper gridArea={"myArea5"}>
          <StyledBox className="header">
            <TitleBlue>Bơi sinh tồn</TitleBlue>
          </StyledBox>
        </CellWrapper>

        <CellWrapper gridArea={"myArea6"}>
          <StyledBox>
            <StyledDescription>{data[0]?.value?.description}</StyledDescription>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea7"}>
          <StyledBox>
            <StyledDescription>{data[0]?.value?.pro}</StyledDescription>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea8"}>
          <StyledBox>
            <StyledDescription>{data[0]?.value?.con}</StyledDescription>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea9"}>
          <StyledBox>
            <StyledDescription>{data[0]?.value?.conclusion}</StyledDescription>
          </StyledBox>
        </CellWrapper>

        <CellWrapper gridArea={"myArea10"}>
          <StyledBox className="header header-bottomleft">
            <TitleBlue>{data[1]?.value?.name}</TitleBlue>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea11"}>
          <StyledBox>
            <StyledDescription>{data[1]?.value?.description}</StyledDescription>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea12"}>
          <StyledBox>
            <StyledDescription>{data[1]?.value?.pro}</StyledDescription>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea13"}>
          <StyledBox>
            <StyledDescription>{data[1]?.value?.con}</StyledDescription>
          </StyledBox>
        </CellWrapper>
        <CellWrapper gridArea={"myArea14"}>
          <StyledBox className="header-bottomright">
            <StyledDescription>{data[1]?.value?.conclusion}</StyledDescription>
          </StyledBox>
        </CellWrapper>
      </Container>
      <HeadlineWrapper>
        <Stack alignItems="center" justifyContent="center">
          <Headline
            title="SỰ KHÁC NHAU GIỮA"
            variant="title1"
            backgroundVariant="gradientOrange"
          />
          <Headline
            title="PHƯƠNG PHÁP DẠY BƠI SINH TỒN VÀ DẠY BƠI THÔNG THƯỜNG"
            variant="title1"
            backgroundVariant="gradientOrange"
          />
        </Stack>
      </HeadlineWrapper>
    </Stack>
  );
};

const TitleOrange = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Headline
      variant="title1"
      title={children as string}
      backgroundVariant="gradientOrange"
      textTransform="uppercase"
    />
  );
};

const TitleBlue = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Headline variant="title1" title={children as string} textTransform="uppercase" />
  );
};

const CellWrapper = styled(Box)(() => {
  return {
    backgroundColor: "#FFF",
  };
});

const StyledBox = styled(Box)(({ theme }) => {
  return {
    padding: "12px 16px",
    overflow: "hidden",
    position: "relative",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    display: "flex",
    alignItems: "center",
    ["&.header"]: {
      backgroundColor: "rgba(98, 178, 223, 0.3)",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const Container = styled(Box)(({ theme }) => {
  return {
    backgroundColor: "#1C98DD",
    backdropFilter: "blur(10px)",

    display: "grid",
    border: "2px solid #1C98DD",
    gridTemplateAreas: `
        'myArea myArea1 myArea2 myArea3 myArea4'
        'myArea5 myArea6 myArea7 myArea8 myArea9'
        'myArea10 myArea11 myArea12 myArea13 myArea14'
        `,

    [theme.breakpoints.down("sm")]: {
      gridTemplateAreas: `
          'myArea5 myArea10'
          'myArea1 myArea1'
          'myArea6 myArea11'
          'myArea2 myArea2'
          'myArea7 myArea12'
          'myArea3 myArea3'
          'myArea8 myArea13'
          'myArea4 myArea4'
          'myArea9 myArea14'
          `,
    },
    position: "relative",
    overflow: "hidden",
    borderRadius: 6,
    gap: 2,
  };
});

const StyledDescription = styled(Typography)(({ theme }) => {
  return {
    textAlign: "justify",

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.m_body1,
    },
  };
});

const HeadlineWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: "50%",
    bottom: "clamp(-13,09vh, -13.09vh, -72px)",
    width: "100%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      textAlign: "center",
    },
  };
});

export default Method;
