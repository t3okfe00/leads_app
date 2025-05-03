import { Roboto, Open_Sans } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-open-sans", // Important!
  display: "swap",
});
