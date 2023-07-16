import { NextSeo, NextSeoProps } from "next-seo";

import { useSetting } from "@/hooks";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  locale?: string;
  defaultNextSeo?: NextSeoProps;
};

const SEO = (props: SEOProps) => {
  const setting = useSetting();

  const { title, description, locale, defaultNextSeo, image } = props;
  const { favicon, og_image } = setting;

  const headTitle = title == undefined ? undefined : `${title} Baby Fish`;

  return (
    <NextSeo
      title={headTitle || "Baby Fish"}
      description={description || ""}
      openGraph={{
        title: headTitle || "Baby Fish",
        description: description || "",
        site_name: "Baby Fish",
        locale: locale ?? "en",
        images: [
          {
            url: image || og_image,
            alt: headTitle,
            type: "image/jpeg",
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: favicon,
        },
        {
          rel: "apple-touch-icon",
          href: favicon,
        },
      ]}
      {...defaultNextSeo}
    />
  );
};

export default SEO;
