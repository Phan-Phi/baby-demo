import { array, InferType, mixed, number, object, string } from "yup";
import { IMAGE_TYPE, META_ITEM, VIDEO_TYPE } from "./utils";

export let galleryListingPageSchema = object({
  id: number().required().positive().integer(),
  meta: META_ITEM,
  last_published_at: string().required(),
  title: string().required(),
  subtitle: string().required(),
});

export let galleryDetailPageSchema = object({
  id: number().required().positive().integer(),
  meta: META_ITEM,
  last_published_at: string().required(),
  title: string().required(),
  videos: array(VIDEO_TYPE).required(),
  images: array(IMAGE_TYPE).required(),
});

export type GalleryListingPage = InferType<typeof galleryListingPageSchema>;
export type GalleryDetailPage = InferType<typeof galleryDetailPageSchema>;
