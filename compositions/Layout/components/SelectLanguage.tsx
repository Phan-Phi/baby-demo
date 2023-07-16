import { Box, Divider, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import { MouseEventHandler, useCallback } from "react";

const LanguageForHeader = () => {
  const router = useRouter();

  const onChangeLanguageHandler: MouseEventHandler<HTMLSpanElement> = useCallback(
    (e) => {
      const selectedLanguage = e.currentTarget.dataset.id;

      const currentPath = router.asPath;

      router.replace(currentPath, currentPath, {
        locale: selectedLanguage,
      });
    },
    [router]
  );

  return (
    <StyledWrapper>
      <StyledText
        className={router.locale === "vi" ? "selected" : undefined}
        onClick={onChangeLanguageHandler}
        data-id="vi"
      >
        VI
      </StyledText>

      <StyledDivider orientation="vertical" flexItem />
      <StyledText
        data-id="en"
        className={router.locale === "en" ? "selected" : undefined}
        onClick={onChangeLanguageHandler}
      >
        EN
      </StyledText>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    columnGap: 8,
  };
});

const StyledDivider = styled(Divider)(({ theme }) => {
  return {
    width: 2,
    backgroundImage: theme.palette.gradientColor.gradientBlue,
  };
});

const StyledText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.body2,
    cursor: "pointer",
    color: theme.palette.common.white,

    ["&.selected"]: {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
  };
});

export default LanguageForHeader;
