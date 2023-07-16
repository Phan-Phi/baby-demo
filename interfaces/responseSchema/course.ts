import { object, number, string, array, InferType, lazy, mixed } from "yup";
import { META_ITEM, SUB_COURSE } from "./utils";

export let ListingCoursePageSchema = object({
  id: number().required().positive().integer(),
  image: string().required(),
  last_published_at: string().required(),
  meta: META_ITEM,
  subtitle: string().required(),
  title: string().required(),
});

export let DetailCoursePageSchema = object({
  description: string().required(),
  id: number().required().positive().integer(),
  image: string().required(),
  last_published_at: string().required(),
  meta: META_ITEM,
  subcourses: array(SUB_COURSE).required(),
  subimages: mixed(),
  subtitle: string().required(),
  title: string().required(),
});

export type ListingCousePage = InferType<typeof ListingCoursePageSchema>;
export type DetailCousePage = InferType<typeof DetailCoursePageSchema>;
