import { MyCustomTheme } from "@/themes";
import { ColorModeScript } from "@chakra-ui/react";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html id="html" lang="en">
        <Head />
        <main suppressHydrationWarning>
          <ColorModeScript
            initialColorMode={MyCustomTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </main>
      </Html>
    );
  }
}

export default MyDocument;
