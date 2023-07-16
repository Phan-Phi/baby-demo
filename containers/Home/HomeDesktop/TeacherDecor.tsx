import React from "react";
import { Box } from "@mui/material";

import { Image } from "@/components";

const TeacherDecor = () => {
  return (
    <Box position="relative">
      <Box
        position="relative"
        width={"clamp(0px, 66.48vh, 718px)"}
        height={"clamp(0px, 100vh, 1080px)"}
      >
        <Image src="/teacher-decor.png" alt="teacher" />
      </Box>
    </Box>
  );
};

export default TeacherDecor;
