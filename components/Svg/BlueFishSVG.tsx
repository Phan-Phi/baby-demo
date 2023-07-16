import { styled } from "@mui/material";
import { SVGProps } from "react";

const BlueFishSVG = (props: SVGProps<SVGSVGElement>) => (
  <StyledSVG viewBox="0 0 160 101" {...props}>
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="-23.08%" stopColor="#83D2FF" />
        <stop offset="34.39%" stopColor="#1C98DD" />
        <stop offset="81.19%" stopColor="#1C52DD" />
        <stop offset="117.31%" stopColor="#055CBB" />
      </linearGradient>
    </defs>
    <path
      d="M.592 38.068v.605c.054.33.145.657.155.988.08 2.492.388 4.957.792 7.41 1.169 7.136 3.633 13.65 8.488 19.006 1.021 1.126 1.97 2.307 2.78 3.617.563.911.548 1.681-.054 2.585-1.363 2.044-2.621 4.162-3.601 6.442-.727 1.69-1.435 3.39-1.732 5.23-.421 2.601.425 3.444 2.9 2.92 2.633-.555 5.007-1.774 7.317-3.137 2.878-1.7 5.421-3.891 8.028-5.987 1.284-1.031 2.658-1.969 4.27-2.272 1.607-.303 3.213-.01 4.78.497.822.267 1.422.68 1.684 1.61.16.565.548 1.058.816 1.592.435.865 1.071 1.17 2.003.936.773-.194 1.528-.026 2.272.283 1.038.43 1.92 1.104 2.786 1.807 3.042 2.472 6.362 4.484 9.755 6.374 3.35 1.865 6.976 3.018 10.517 4.388 2.906 1.126 5.78 2.349 8.746 3.301 3.106.999 6.298 1.051 9.507.932.61-.022 1.22-.067 1.808.224 1.254.619 2.545 1.163 3.785 1.808 2.018 1.049 4.184 1.356 6.386 1.417 2.065.056 3.242-.878 3.82-2.954.175-.624.476-.869 1.074-.924 1.415-.133 2.823-.34 4.238-.48 3.821-.383 7.583-1.268 11.464-1.175a55.469 55.469 0 0 0 9.183-.564c3.485-.5 7.005-.794 10.332-2.137 2.947-1.188 5.405-3.09 7.147-5.793 1.504-2.333 2.898-4.789 3.279-7.68.07-.525.213-.869.881-.456.988.61 1.629.242 1.92-.934.092-.364.051-.776.383-1.223.217.913.396 1.692.59 2.468.514 2.052 1.042 4.097 2.005 5.985.255.502.507 1.037 1.119 1.179 1.941.449 3.562-.805 3.686-2.854.022-.368.03-.74.01-1.11-.157-3.004-.72-5.931-1.522-8.814-.377-1.356-.388-1.352.848-1.853 2.645-1.074 4.281-3.633 4.169-6.523-.113-2.915-1.988-5.456-4.691-6.253-2.702-.794-4.962.025-6.806 2.184-.752.879-1.018.903-1.802.097-.46-.471-.885-.98-1.326-1.47-.258-.287-.553-.508-.936-.279-.734.435-1.089-.006-1.334-.627-.417-1.057-.776-2.138-1.207-3.19-.408-.994-.441-1.948-.221-3.03 1.137-5.599.06-10.717-3.53-15.096-1.062-1.295-1.771-2.74-2.302-4.245-1.724-4.87-4.497-8.888-8.451-12.031-3.136-2.493-6.553-4.417-10.381-5.496-4.704-1.326-9.49-2.022-14.367-1.957-.798.01-1.421-.19-1.947-.86-3.306-4.206-7.45-7.317-12.021-9.86C84.519.71 80.7-.333 76.697.191 69.986 1.07 64.02 3.793 59.2 8.873c-2.054 2.165-3.51 4.746-4.111 7.736-.348 1.73-1.136 3.125-2.28 4.35-.629.673-1.322 1.284-1.988 1.92-.334.318-.77.578-.914 1.027-.637 2-1.53 3.897-1.666 6.077-.204 3.268-.19 6.513.307 9.75.058.387.027.678-.334.953-1.678 1.273-2.786 3.034-3.66 4.946-.322.706-.601 1.436-1.143 1.965a30.077 30.077 0 0 0-5.153 6.65c-.398.7-1.002 1.098-1.764 1.307-1.488.406-1.942 1.14-1.676 2.737.113.677-.122.99-.72 1.18-1.62.516-3.141.198-4.578-.604-2.374-1.328-4.234-3.301-5.96-5.402-2.33-2.836-4.564-5.755-6.898-8.587-2.98-3.616-6.306-6.842-10.23-9.34-1.207-.77-2.41-1.575-3.882-1.739-.833-.093-1.307.212-1.573 1.086-.318 1.047-.081 2.144-.384 3.183Z"
      fill="url(#grad2)"
      strokeWidth={2}
      stroke="transparent"
    />
  </StyledSVG>
);

const StyledSVG = styled("svg")(() => {
  return {
    ["&.no-fill path"]: {
      fill: "none",
      stroke: "#1C98DD",
    },
  };
});

export default BlueFishSVG;
