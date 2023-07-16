import Box from "../Box/Box";
import { CustomArrowProps } from "react-slick";

const PrevSlickModal = (props: CustomArrowProps) => {
  const { className, onClick } = props;

  return (
    <Box onClick={onClick} className={className}>
      <Box
        sx={{
          cursor: "pointer",
          backgroundImage: "url(/image/gallery/iconFishGallery.png)",
          width: "45px",
          height: "45px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",

          transition: "all .5s ease",
          "&:hover": {
            background: "url(/image/gallery/iconFishGallery2.png)",
            width: "45px",
            height: "45px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            // transform: "scaleX(-1)",
          },
        }}
      ></Box>
    </Box>
  );
};

export default PrevSlickModal;
