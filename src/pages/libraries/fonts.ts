import { Montserrat, Poppins } from "next/font/google";

const fontHeading = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});
const fontBody = Montserrat({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default {
  fontBody,
  fontHeading,
};
