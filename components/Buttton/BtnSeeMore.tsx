import { Button, Typography, styled } from "@mui/material";
import Box from "../Box/Box";
import { useRouter } from "next/router";
import LifebuoySVG from "../Svg/LifebuoySVG";
import LifejacketSVG from "../Svg/LifejacketSVG";

export default function BtnSeeMore() {
  const router = useRouter();

  return (
    <Box>
      <StyledButton
        onClick={() => {
          router.push("/tro-giup");
        }}
      >
        <StyledIconBlock>
          <LifebuoySVG style={{ width: 24, height: 24 }} />
        </StyledIconBlock>

        <Title variant="title1">Xem Thêm</Title>
      </StyledButton>
    </Box>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.secondaryColor.darkBlue,
    transition: "all .5s ease",
    textTransform: "uppercase",
  };
});

const StyledButton = styled(Button)(({ theme }) => {
  return {
    borderRadius: "1.8rem",

    "&:hover .MuiBox-root": {
      with: "20px",
      opacity: 1,
      transform: "scale(1)",
      transition: "all linear 0.2s",
    },

    //   "&:hover": {
    //     with: "20px",
    //     opacity: 1,
    //     transform: "scale(1)",
    //     transition: "all linear 0.2s",
    //   },
  };
});

const StyledIconBlock = styled(Box)(() => {
  return {
    // position: "relative",
    top: 3,

    opacity: 1,
    transform: "scale(1)",
    with: "50px",
  };
});
