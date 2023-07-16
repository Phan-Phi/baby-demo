import { Box, Stack, Typography, styled } from "@mui/material";

import { Headline } from "@/components";
import { CompareMethodBlock } from "@/interfaces";
import { COLOR_TEXT_GRADIENT_BLUES, COLOR_TEXT_GRADIENT_ORANGES } from "@/constants";

interface Props {
  data: CompareMethodBlock[];
}

const Method = ({ data }: Props) => {
  return (
    <Box>
      <Container
        display="grid"
        border="2px solid #1C98DD"
        gridTemplateColumns="repeat(5,1fr)"
        position="relative"
        overflow="hidden"
        borderRadius={6}
        gap={"2px"}
      >
        <CellWrapper>
          <StyledBox className="header header-topleft">
            <Title>Phương pháp</Title>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox className="header">
            <Title>Mô tả</Title>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox className="header">
            <Title>Ưu điểm</Title>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox className="header">
            <Title>Nhược điểm</Title>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox className="header header-topright">
            <Title>Kết luận</Title>
          </StyledBox>
        </CellWrapper>

        <CellWrapper>
          <StyledBox className="header">
            <SubText variant="title1">{data[0].value.name}</SubText>
          </StyledBox>
        </CellWrapper>

        <CellWrapper>
          <StyledBox>
            <Typography>
              Dạy bơi không dùng phao và các thiết bị trợ nổi và hoàn toàn dựa theo phản
              xạ có điều kiện của trẻ.
            </Typography>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox>
            <Typography>
              Nhanh, hiệu quả và tiết kiệm thời gian, có thể thấy được kết quả trong thời
              gian ngắn.
            </Typography>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox>
            <Typography>
              Nhiều khả năng trẻ không hợp tác, khóc, nôn ói, sặc nước,... dẫn đến phụ
              huynh xót con, nên rất cần sự quyết tâm, kiên trì trong thời gian đầu ở phụ
              huynh.
            </Typography>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox>
            <Typography>
              Dù trẻ thích hay không, nhưng khi tiếp xúc với nước, trẻ phải biết cách tự
              xử lý, tạo sự độc lập nhưng khá khó khăn cho ba mẹ & trẻ thời gian đầu.
            </Typography>
          </StyledBox>
        </CellWrapper>

        <CellWrapper>
          <StyledBox className="header header-bottomleft">
            <SubText variant="title1">{data[1].value.name}</SubText>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox>
            <Typography>
              Dạy bơi không dùng phao và các thiết bị trợ nổi và hoàn toàn dựa theo phản
              xạ có điều kiện của trẻ.
            </Typography>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox>
            <Typography>
              Nhanh, hiệu quả và tiết kiệm thời gian, có thể thấy được kết quả trong thời
              gian ngắn.
            </Typography>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox>
            <Typography>
              Nhiều khả năng trẻ không hợp tác, khóc, nôn ói, sặc nước,... dẫn đến phụ
              huynh xót con, nên rất cần sự quyết tâm, kiên trì trong thời gian đầu ở phụ
              huynh.
            </Typography>
          </StyledBox>
        </CellWrapper>
        <CellWrapper>
          <StyledBox className="header-bottomright">
            <Typography>
              Dù trẻ thích hay không, nhưng khi tiếp xúc với nước, trẻ phải biết cách tự
              xử lý, tạo sự độc lập nhưng khá khó khăn cho ba mẹ & trẻ thời gian đầu.
            </Typography>
          </StyledBox>
        </CellWrapper>
      </Container>
      <Box
        position="absolute"
        bottom="-35%"
        left="50%"
        sx={{
          transform: "translateX(-50%)",
        }}
        width="100%"
      >
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
          {/* <Typography variant="title1">SỰ KHÁC NHAU GIỮA</Typography> */}
          {/* <Typography variant="title1">
            PHƯƠNG PHÁP DẠY BƠI SINH TỒN VÀ DẠY BƠI THÔNG THƯỜNG
          </Typography> */}
        </Stack>
      </Box>
    </Box>
  );
};

const Title = ({ children }: { children?: React.ReactNode }) => {
  return <Text variant="title1">{children}</Text>;
};

const Text = styled(Typography)(() => {
  return {
    ...COLOR_TEXT_GRADIENT_ORANGES,
  };
});

const SubText = styled(Typography)(() => {
  return {
    ...COLOR_TEXT_GRADIENT_BLUES,
  };
});

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

    ["&.header"]: {
      backgroundColor: "rgba(98, 178, 223, 0.3)",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const Container = styled(Box)(() => {
  return {
    backgroundColor: "#1C98DD",
    backdropFilter: "blur(10px)",
  };
});

export default Method;
