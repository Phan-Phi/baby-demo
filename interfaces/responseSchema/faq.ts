import { InferType, array, boolean, number, object, string } from "yup";

const FAQ_ITEM = object({
  block_type: string().oneOf(["faq"]).required(),
  value: object({
    answer: string().required(),
    is_on_homepage: boolean().required(),
    question: string().required(),
  }),
});

const META_ITEM = object({
  canonical_url: string(),
  detail_url: string().required(),
  first_published_at: string().required(),
  locale: string().required(),
  og_image: string(),
  parent: object({
    id: number().required(),
    meta: object({
      detail_url: string().required(),
      html_url: string(),
      type: string().required(),
    }),
    title: string().required(),
    search_description: string(),
    seo_title: string().required(),
    show_in_menus: boolean().required(),
    slug: string().required(),
    type: string().required(),
    url_path: string().required(),
  }),
});

export const faqSchema = object({
  faqs: array(FAQ_ITEM),
  id: number().required(),
  image: string().required(),
  last_published_at: string().required(),

  meta: META_ITEM,

  subtitle: string().required(),
  title: string().required(),
});

export type FaqPage = InferType<typeof faqSchema>;
export type FAQ_ITEM = InferType<typeof FAQ_ITEM>;
