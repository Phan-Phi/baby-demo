import { InferType, array, boolean, number, object, string } from "yup";

const SCHEDULE = object({
  duration: string().required(),
  weekday: string().required(),
});

const BLOCK_TYPE_EMAIL = object({
  block_type: string().oneOf(["email"]).required(),
  value: string().required(),
});

const BLOCK_TYPE_SOCIAL_ICON = object({
  block_type: string().oneOf(["social_icon"]).required(),
  value: object({
    icon: string().required(),
    link: string().required(),
  }),
});

const INTRODUCTION_BLOCK = object({
  block_type: string().oneOf(["introduction_block"]).required(),
  value: string().required(),
});

const METHOD_BLOCK = object({
  block_type: string().oneOf(["method_block"]).required(),
  value: object({
    title: string().required(),
    content: string().required(),
    image: string().required(),
  }),
});

const COMPARE_METHOD_BLOCKS = object({
  block_type: string().oneOf(["compare_method_block"]).required(),
  value: object({
    name: string().required(),
    description: string().required(),
    pro: string().required(),
    con: string().required(),
    conclusion: string().required(),
  }),
});

const VALUE_BLOCKS = object({
  block_type: string().oneOf(["value_block"]).required(),
  value: object({
    title: string().required(),
    content: string().required(),
    image: string().required(),
  }),
});

const REVIEW_BLOCKS = object({
  block_type: string().oneOf(["review_block"]).required(),
  value: object({
    customer_name: string().required(),
    content: string().required(),
  }),
});

const FOUNDER_BLOCKS = object({
  block_type: string().oneOf(["founder_block"]).required(),
  value: string().required(),
});

const SUB_COURSE = object({
  block_type: string().oneOf(["subcourse"]).required(),
  value: object({
    description: string().required(),
    image: string().required(),
    name: string().required(),
    note: string().required(),
    schedule: array(SCHEDULE).required(),
  }),
});

const IMAGE_TYPE = object({
  block_type: string().oneOf(["image"]).required(),
  value: string().required(),
});

const VIDEO_TYPE = object({
  block_type: string().oneOf(["video"]).required(),
  value: object({
    age: number().required(),
    title: string().required(),
    video: string().required(),
  }),
});

const CONTACT_ICON = object({
  block_type: string().oneOf(["contact_icon"]).required(),
  value: object({
    icon: string().required(),
    link: string().required(),
  }),
});

const PARENT_ITEM = object({
  id: number().required(),
  meta: object({
    type: string().required(),
    detail_url: string().required(),
    html_url: string().required().nullable(),
  }),
  title: string().required(),
});

const META_ITEM = object({
  type: string().required(),
  detail_url: string().required(),
  canonical_url: string().required().nullable(),
  show_in_menus: boolean().required(),
  url_path: string().required(),
  slug: string().required(),
  seo_title: string().required(),
  search_description: string().required(),
  first_published_at: string().required(),
  parent: PARENT_ITEM,
  locale: string().required(),
  og_image: string().required().nullable(),
});

const ITEM_TAB_CONTENT = object({
  image: string().required(),
  widthPC: number().required(),
  heightPC: number().required(),
  widthTabletHorizontal: number().required(),
  heightTabletHorizontal: number().required(),
  widthTablet: number().required(),
  heightTablet: number().required(),
  widthMobile: number().required(),
  heightMobile: number().required(),
  rotate: number(),
  activeRotate: number(),
});

const ITEM_TABS = object({
  textTop: ITEM_TAB_CONTENT,
  textTopEn: ITEM_TAB_CONTENT,
  imageFish: ITEM_TAB_CONTENT,
  textBottom: ITEM_TAB_CONTENT,
  textBottomEn: ITEM_TAB_CONTENT,
});

const ITEM_VIDEO_OEMBED = object({
  author_name: string().required(),
  author_url: string().required(),
  height: number().required(),
  html: string().required(),
  provider_name: string().required(),
  provider_url: string().required(),
  thumbnail_height: number().required(),
  thumbnail_url: string().required(),
  thumbnail_width: number().required(),
  title: string().required(),
  type: string().required(),
  version: string().required(),
  width: number().required(),
});

export {
  META_ITEM,
  SUB_COURSE,
  VIDEO_TYPE,
  IMAGE_TYPE,
  VALUE_BLOCKS,
  METHOD_BLOCK,
  CONTACT_ICON,
  REVIEW_BLOCKS,
  FOUNDER_BLOCKS,
  BLOCK_TYPE_EMAIL,
  INTRODUCTION_BLOCK,
  COMPARE_METHOD_BLOCKS,
  BLOCK_TYPE_SOCIAL_ICON,
};

export type Video = InferType<typeof VIDEO_TYPE>;
export type Schedule = InferType<typeof SCHEDULE>;
export type ItemTabs = InferType<typeof ITEM_TABS>;
export type SubCourse = InferType<typeof SUB_COURSE>;
export type ImageType = InferType<typeof IMAGE_TYPE>;
export type ValueBlock = InferType<typeof VALUE_BLOCKS>;
export type MethodBlock = InferType<typeof METHOD_BLOCK>;
export type ContactIcon = InferType<typeof CONTACT_ICON>;
export type ReviewBlocks = InferType<typeof REVIEW_BLOCKS>;
export type FounderBlocks = InferType<typeof FOUNDER_BLOCKS>;
export type BlockTypeEmail = InferType<typeof BLOCK_TYPE_EMAIL>;
export type ItemTabContent = InferType<typeof ITEM_TAB_CONTENT>;
export type SocialIcon = InferType<typeof BLOCK_TYPE_SOCIAL_ICON>;
export type ItemVideoOembed = InferType<typeof ITEM_VIDEO_OEMBED>;
export type IntroductionBlock = InferType<typeof INTRODUCTION_BLOCK>;
export type CompareMethodBlock = InferType<typeof COMPARE_METHOD_BLOCKS>;
