import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import fonts from "./libraries/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { MyCustomTheme } from "@/themes";

import { DefaultSeo } from "next-seo";
import seoConfig from "../../next-seo.config";

interface CustomAppProps extends AppProps {
  Component: NextPage;
}

const App: NextPage<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-heading: ${fonts.fontHeading.style.fontFamily};
            --font-body: ${fonts.fontBody.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...seoConfig} />
      <ChakraProvider theme={MyCustomTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
