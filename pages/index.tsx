import Head from "next/head"
import fs from "fs"
import config from "../config.json"
import { markdownToHtml } from "../lib/api"
import { join } from "path"

export default function Index({ content }: { content: string }) {
  return (
    <main className="p-4 w-full">
      <Head>
        <title>{config.full_name}</title>
        <meta
          name="description"
          content="Computer science student at the National University of Singapore."
        />
      </Head>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  )
}

export async function getStaticProps() {
  const mainMarkdown = fs.readFileSync(join(process.cwd(), "_main/main.md"))
  const content = await markdownToHtml(mainMarkdown.toString())
  return {
    props: {
      content: content,
    },
  }
}
