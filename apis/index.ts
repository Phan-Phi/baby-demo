const PREFIX = "api/v2";
const CONTACTS = "api/v2/contacts";

const PAGES = "pages";

const generatePathname = (data: string[]): string => {
  const arr = [PREFIX, ...data];
  return `/${arr.join("/")}/`;
};

export const TYPE_PARAMS = {
  "home.HomePage": "home.HomePage",
  "course.CourseListingPage": "course.CourseListingPage",
  "course.CourseDetailPage": "course.CourseDetailPage",

  "library.LibraryListingPage": "library.LibraryListingPage",
  "library.LibraryDetailPage": "library.LibraryDetailPage",

  "faq.FAQPage": "faq.FAQPage",
} as const;

export const SETTING_API = `/${PREFIX}/`;
export const CONTACTS_API = `/${CONTACTS}/`;
export const PAGES_API = generatePathname([PAGES]);
