import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const CloseIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M7.62763 6.86062C6.83107 7.65719 6.82817 8.95776 7.62763 9.75722L30.8004 32.93C31.5999 33.7295 32.9004 33.7266 33.697 32.93C34.4936 32.1334 34.4965 30.8329 33.697 30.0334L10.5242 6.86062C9.72477 6.06116 8.4242 6.06406 7.62763 6.86062Z"
        fill="#CFCFCF"
      />
      <path
        d="M10.4951 32.6679C9.69565 33.4673 8.39507 33.4644 7.59851 32.6679C6.80195 31.8713 6.79905 30.5707 7.59851 29.7713L30.7713 6.59851C31.5707 5.79905 32.8713 5.80195 33.6679 6.59851C34.4644 7.39507 34.4673 8.69565 33.6679 9.49511L10.4951 32.6679Z"
        fill="#CFCFCF"
      />
    </SVGIconBase>
  );
};

export default CloseIcon;
