import { PAGES_API, TYPE_PARAMS } from "@/apis";
import Course from "@/containers/Course";
import { IPage, responseSchema } from "@/interfaces";
import { CourseDetail } from "@/interfaces/responseSchema/courses/courseDetail";
import { CourseList } from "@/interfaces/responseSchema/courses/courseList";
import { transformUrl } from "@/libs";
import prefetchData from "@/libs/prefetchData";
import { GetServerSidePropsContext } from "next";

export type CoursePageProps = IPage<
  [responseSchema<CourseList>] & [responseSchema<CourseDetail>]
>;

const index = (props: CoursePageProps) => {
  return <Course {...props} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
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
