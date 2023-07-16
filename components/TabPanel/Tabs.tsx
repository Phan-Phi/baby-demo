"use client";

import React, { useMemo } from "react";

import { Tab, Tabs as MuiTabs, TabsProps, styled } from "@mui/material";
import { useMedia } from "hooks";

interface ExtendTabsProps<T> extends Omit<TabsProps, "ref"> {
  data: T[];
}

interface Item {
  id: number;
  title: string;
}

const Tabs = <T extends Item>(props: ExtendTabsProps<T>) => {
  const { value, onChange, data, orientation, ...restProps } = props;

  const renderTab = useMemo(() => {
    return data.map((el) => {
      return <StyledTab key={el.id} label={el.title} value={el.id} disableRipple />;
    });
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <StyledMuiTabs
      orientation={orientation}
      value={value}
      onChange={onChange}
      variant={"standard"}
      {...restProps}
    >
      {renderTab}
    </StyledMuiTabs>
  );
};

export default Tabs;

const StyledTab = styled(Tab)({
  padding: "8px 16px",
});

const StyledMuiTabs = styled(MuiTabs)(({ theme }) => {
  const { isSmUp } = useMedia();

  return {
    justifyContent: "center",
    minHeight: "1rem !important",
    borderRadius: "0.8rem",
    marginX: "auto",
    "& .MuiButtonBase-root": {
      color: theme.palette.common.black,
      margin: 0,
      maxWidth: "none",
      minHeight: "2rem !important",
      alignItems: "center",
      textTransform: "capitalize",
    },

    "& .MuiTabs-flexContainer": {
      justifyContent: isSmUp ? "center" : "unset",
      gap: "1rem",
    },
    "& .Mui-selected": {
      borderRadius: "6rem",
      borderBottom: "none",
      color: `${theme.palette.common.black} !important`,
      backgroundColor: "grey",
      height: "100%",
      margin: 0,
    },
    "& .MuiTabs-scroller": {
      overflowX: "scroll !important",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "& button": {
      margin: "0 3rem",
    },

    "& .MuiTabs-indicator": {
      display: "none",
    },
  };
});
