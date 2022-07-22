import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="eJf5FzckPc2LLtQqBW_GQrAhwAU9PK2A5ifjQAcIr7g"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
