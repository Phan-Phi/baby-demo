import dynamic from "next/dynamic";

import { transformUrl } from "@/libs";
import prefetchData from "@/libs/prefetchData";
import { PAGES_API, TYPE_PARAMS } from "@/apis";
import { GetServerSidePropsContext } from "next";
import { HomePageProps } from "@/containers/Home/Home";

const Home = dynamic(import("@/containers/Home/Home"), { ssr: false });

export default function HomePage(props: HomePageProps) {
  return <Home {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["home.HomePage"],
        fields: "*",
        locale,
      }),

      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["course.CourseListingPage"],
        fields: "*",
        locale,
      }),

      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["course.CourseDetailPage"],
        fields: "*",
        locale,
      }),

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
