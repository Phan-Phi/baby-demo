import { array, InferType, mixed, number, object, string } from "yup";

import { BLOCK_TYPE_EMAIL, BLOCK_TYPE_SOCIAL_ICON, CONTACT_ICON } from "./utils";

export let SettingSchema = object({
  id: number().required(),
  logo: string().required(),
  favicon: string().required(),
  og_image: string().required(),
  emails: array(BLOCK_TYPE_EMAIL).required(),
  footer_social_icon: array(BLOCK_TYPE_SOCIAL_ICON).required(),
  contact_icon: array(CONTACT_ICON).required(),
  seo_title: string().required(),
  seo_title_en: string().required(),
  seo_description: string().required(),
  seo_description_en: string().required(),
  address: string().required(),
  address_en: string().required(),
  hotline: string().required(),
  website: string().required(),
  footer_description: string().required(),
  footer_description_en: string().required(),
  site: number().required(),
});

export type SETTING_ITEM = InferType<typeof SettingSchema>;
