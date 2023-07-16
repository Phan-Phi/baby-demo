import { InferType, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { validatePhoneNumber } from "yups/utils";

const contactFormSchema = object({
  parent_name: string().required(),
  email: string().email().required(),
  phone_number: validatePhoneNumber().required(),
  name: string(),
  content: string().required(),
});

export const wrapperContactFormSchema = yupResolver(contactFormSchema);

export type ContactForm = InferType<typeof contactFormSchema>;
