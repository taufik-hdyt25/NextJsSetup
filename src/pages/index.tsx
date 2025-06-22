import { Box, Text } from "@chakra-ui/react";
import { Geist } from "next/font/google";
import { JSX } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Text>Okelah</Text>
    </Box>
  );
};

export default HomePage;
