import { object, number, string, array, InferType } from "yup";

import {
  META_ITEM,
  VALUE_BLOCKS,
  METHOD_BLOCK,
  REVIEW_BLOCKS,
  FOUNDER_BLOCKS,
  INTRODUCTION_BLOCK,
  COMPARE_METHOD_BLOCKS,
} from "./utils";

export let homePageSchema = object({
  id: number().required().positive().integer(),
  meta: META_ITEM,
  title: string().required(),
  youtube_link: string().required(),
  last_published_at: string().required(),
  introduction_blocks: array(INTRODUCTION_BLOCK).required(),
  method_title: string().required(),
  method_subtitle: string().required(),
  method_blocks: array(METHOD_BLOCK).required(),
  compare_method_blocks: array(COMPARE_METHOD_BLOCKS).required(),
  value_blocks: array(VALUE_BLOCKS).required(),
  review_blocks: array(REVIEW_BLOCKS).required(),
  founder_blocks: array(FOUNDER_BLOCKS).required(),
});

export type HomePage = InferType<typeof homePageSchema>;
