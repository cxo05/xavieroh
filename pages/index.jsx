import Head from "next/head";

import config from "../config.json";
import { markdownToHtml } from "../lib/api";

export default function Index({ content }) {
  return (
    <main className="p-4 w-full">
      <Head>
        <title>{config.full_name}</title>
        <meta
          name="description"
          content="A computer science student at the National University of Singapore. I am interested in Web Development and occasionally participate in CTF competitions."
        />
      </Head>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}

export async function getStaticProps() {
  let aboutMarkdown = `
  # Welcome

  This is a site I made following the [next.js](https://nextjs.org/) documentation.

  ## About Me

  Currently a computer science student at the National University of Singapore. 
  
  I am interested in Web Development and occasionally participate in CTF competitions.

  Web Frameworks I'm comfortable in:
  - Frontend
    - Angular
    - Next.js / Reactjs (Which is what this site is running on)
  - Backend
    - node.js / Express
    - Go
  - Database
    - SQL (MySQL / PostgreSQL)
  - Others
    - Docker
    - AWS

  Programming Languages:
  - Typescript / Javascript
  - Golang
  - Python
  - Java
  - C++
  
  Some projects I worked on
   - Stochastic simulation of binary collisions of monoatomic gas molecules. [Link](https://github.com/cxo05/Collision-Sim)
   - Telegram Bot for clocking in and out of an area. [Link](https://github.com/cxo05/BIBO_Bot)
  `;
  const content = await markdownToHtml(aboutMarkdown);
  return {
    props: {
      content: content,
    },
  };
}
