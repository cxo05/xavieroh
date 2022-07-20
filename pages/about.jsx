import Head from "next/head";

import config from "../config.json";

export default function About() {
  return (
    <main className="w-full">
      <Head>
        <title>About | {config.name}</title>
      </Head>
      <p className="text-2xl">About</p>
    </main>
  );
}
