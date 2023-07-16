import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const iCielKoni = localFont({
  src: [
    {
      path: "../public/fonts/iCiel-Koni-Black.woff2",
    },
  ],
});

const iCielKoni2 = localFont({
  src: [
    {
      path: "../public/fonts/iCielKoni-Black-varient-3 (1).otf",
    },
  ],
});

const iCielMedium = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Medium.woff2",
    },
  ],
});

const iCielThin = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Thin.woff2",
    },
  ],
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
});

export { iCielKoni, iCielKoni2, iCielMedium, MontserratFont, iCielThin };
