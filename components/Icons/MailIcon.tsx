import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const MailIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="14" height="10" viewBox="0 0 14 10" {...props}>
      <path d="M12.6 0H1.4C0.63 0 0.00699999 0.5625 0.00699999 1.25L0 8.75C0 9.4375 0.63 10 1.4 10H12.6C13.37 10 14 9.4375 14 8.75V1.25C14 0.5625 13.37 0 12.6 0ZM11.9 8.75H2.1C1.715 8.75 1.4 8.46875 1.4 8.125V2.5L6.258 5.2125C6.713 5.46875 7.287 5.46875 7.742 5.2125L12.6 2.5V8.125C12.6 8.46875 12.285 8.75 11.9 8.75ZM7 4.375L1.4 1.25H12.6L7 4.375Z" />
    </SVGIconBase>
  );
};

export default MailIcon;
