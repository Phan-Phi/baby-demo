import { InferType, boolean, number, object, string } from "yup";

const META_ITEM = object({
  canonical_url: string().nullable(),
  detail_url: string().required(),
  first_published_at: string().required(),
  locale: string().required(),
  og_image: string().nullable(),
  parent: object({
    id: number().required(),
    meta: object({
      detail_url: string().required(),
      html_url: string().nullable(),
      type: string().required(),
    }),
    title: string().required(),
    search_description: string().required(),
    seo_title: string().required(),
    show_in_menus: boolean().required(),
    slug: string().required(),
    type: string().required(),
    url_path: string().required(),
  }),
});

export const COURSE_LIST_SCHEMA = object({
  id: number().required(),
  image: string().required(),
  last_published_at: string().required(),
  meta: META_ITEM,
  subtitle: string().required(),
  title: string().required(),
});

export type CourseList = InferType<typeof COURSE_LIST_SCHEMA>;
