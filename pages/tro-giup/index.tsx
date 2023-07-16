import { PAGES_API, TYPE_PARAMS } from "@/apis";
import Faq from "@/containers/Faq";
import { IPage, responseSchema } from "@/interfaces";
import { FaqPage } from "@/interfaces/responseSchema/faq";
import { transformUrl } from "@/libs";
import prefetchData from "@/libs/prefetchData";
import { GetServerSidePropsContext } from "next";

export type FaqPageProps = IPage<[responseSchema<FaqPage>]>;

const index = (props: FaqPageProps) => {
  return <Faq {...props} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["faq.FAQPage"],
        fields: "*",
        locale,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

export default index;
