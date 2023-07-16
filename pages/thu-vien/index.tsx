import { transformUrl } from "@/libs";
import prefetchData from "@/libs/prefetchData";
import { PAGES_API, TYPE_PARAMS } from "@/apis";
import { GetServerSidePropsContext } from "next";
import Gallery, { GalleryProps } from "@/containers/Gallery";

export default function GalleryPage(props: GalleryProps) {
  return <Gallery {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["library.LibraryListingPage"],
        fields: "*",
        locale,
      }),

      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["library.LibraryDetailPage"],
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
