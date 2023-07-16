import { InferType, array, boolean, mixed, number, object, string } from "yup";
import { META_ITEM, SUB_COURSE } from "../utils";

const SUB_IMAGE_ITEM = object({
  block_type: string().required(),
  value: string().required(),
});

const SCHEDULE = object({
  duration: string().required(),
  weekday: string().required(),
});

const SUB_COURSE_ITEM = object({
  block_type: string().required(),
  value: object({
    description: string().required(),
    image: string().required(),
    name: string().required(),
    note: string().required(),
    schedule: array(SCHEDULE),
  }),
});

// const META_ITEM = object({
//   canonical_url: string().required(),
//   detail_url: string().required(),
//   first_published_at: string().required(),
//   locale: string().required(),
//   og_image: string().required(),
//   parent: object({
//     id: number().required(),
//     meta: object({
//       detail_url: string().required(),
//       html_url: string().required(),
//       type: string().required(),
//     }),
//     title: string().required(),
//   }),
//   search_description: string().required(),
//   seo_title: string().required(),
//   show_in_menus: boolean().required(),
//   slug: string().required(),
//   type: string().required(),
//   url_path: string().required(),
// });

export const COURSE_DETAIL_SCHEMA = object({
  description: string().required(),
  id: number().required(),
  image: string().required(),
  last_published_at: string().required(),

  meta: array(META_ITEM),
  subcourses: array(SUB_COURSE),
  subimages: mixed(),

  subtitle: string().required(),
  title: string().required(),
});

export type CourseDetail = InferType<typeof COURSE_DETAIL_SCHEMA>;
export type SUB_COURSE_ITEM = InferType<typeof SUB_COURSE_ITEM>;
