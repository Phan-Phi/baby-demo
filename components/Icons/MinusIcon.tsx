import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const MinusIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="20" height="6" viewBox="0 0 20 6" fill="none" {...props}>
      <path
        d="M4.68447 0C1.5534 0 0 1.00588 0 3C0 4.99412 1.5534 6 4.68447 6H15.3155C18.4466 6 20 4.99412 20 3C20 1.00588 18.4466 0 15.3155 0H4.68447Z"
        fill="#FF6E4B"
      />
    </SVGIconBase>
  );
};

export default MinusIcon;
