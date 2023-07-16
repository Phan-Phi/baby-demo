import SVGIconBase, { SvgIconProps } from "./SVGIconBase";
const MessengerIcon = (props: SvgIconProps) => (
  <SVGIconBase width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
    <g filter="url(#filter0_ii_606_1950)">
      <path
        d="M25 0C10.9168 0 0 10.316 0 24.25C0 31.5385 2.98691 37.8363 7.85156 42.1865C8.25976 42.552 8.50625 43.0641 8.52305 43.6119L8.65918 48.0592C8.70273 49.4775 10.1678 50.4006 11.4658 49.8275L16.4279 47.6367C16.8485 47.4513 17.3202 47.4167 17.7633 47.5389C20.0436 48.1658 22.4703 48.4998 25 48.4998C39.0832 48.4998 50 38.1838 50 24.2498C50 10.3158 39.0832 0 25 0Z"
        fill="#0084FF"
      />
      <path
        d="M9.98769 31.3418L17.3314 19.6908C18.4994 17.8373 21.001 17.3758 22.7537 18.6902L28.5945 23.0711C28.8554 23.2667 29.1729 23.3721 29.4989 23.3711C29.825 23.3702 30.1419 23.263 30.4016 23.0658L38.2898 17.0791C39.3426 16.2801 40.7172 17.54 40.0125 18.6582L32.6688 30.3094C31.5006 32.1627 28.9988 32.6242 27.2463 31.3098L21.4053 26.9289C21.1445 26.7334 20.827 26.6281 20.5011 26.629C20.1751 26.63 19.8583 26.7371 19.5986 26.9342L11.71 32.9209C10.6572 33.7197 9.28281 32.46 9.98769 31.3418Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_ii_606_1950"
        x={-1}
        y={-2}
        width={51}
        height={53.9999}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-2} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_606_1950" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-1} dy={2} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.722774 0 0 0 0 0.864931 0 0 0 0 0.945833 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_606_1950"
          result="effect2_innerShadow_606_1950"
        />
      </filter>
    </defs>
  </SVGIconBase>
);
export default MessengerIcon;
