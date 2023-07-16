// library
import { styled } from "@mui/material";

// custom function
import { Accordion, Headline } from "@/components";
import { FAQ_ITEM } from "@/interfaces/responseSchema/faq";
import { IPage, responseSchema } from "@/interfaces";

export type FaqPagePropsasd = IPage<[responseSchema<FAQ_ITEM>]>;

interface FaqListProps {
  data: FAQ_ITEM;
  idx: number;
  handleChangeAccordion: (
    panel: string
  ) => (event: React.SyntheticEvent, expanded: boolean) => void;
  expanded: string;
}

const FaqList = (props: FaqListProps) => {
  const { data, idx, handleChangeAccordion, expanded } = props;

  return (
    <Accordion
      expanded={expanded == `panel ${idx}`}
      onChange={handleChangeAccordion(`panel ${String(idx)}`)}
      content={data.value.answer}
      heading={
        <StyledHeadline
          variant="smButton"
          backgroundVariant="gradientOrange"
          title={String(idx + 1)}
        />
      }
      title={data.value.question}
    />
  );
};

const StyledHeadline = styled(Headline)(({ theme }) => {
  return {
    fontSize: 57,
    lineHeight: "clamp(4rem, 4.63vh, 50px)",
    [theme.breakpoints.down("md")]: {
      fontSize: 27,
    },
  };
});
export default FaqList;
