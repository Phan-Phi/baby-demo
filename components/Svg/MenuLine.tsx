import { SVGProps } from "react";

const MenuLine = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 61 10" fill="none" {...props}>
      <path
        d="M1 2C2.77 2.5 4.54 3 8.375 3C15.75 3 15.75 1 23.125 1C30.795 1 30.205 3 37.875 3C45.25 3 45.25 1 52.625 1C56.46 1 58.23 1.5 60 2M1 8C2.77 8.5 4.54 9 8.375 9C15.75 9 15.75 7 23.125 7C30.795 7 30.205 9 37.875 9C45.25 9 45.25 7 52.625 7C56.46 7 58.23 7.5 60 8"
        stroke="#055CBB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuLine;
