import Head from "next/head"
import { Post, getAllPosts, getPostBySlug, markdownToHtml } from "../../lib/api"

import config from "../../config.json"
import { GetStaticProps } from "next"

function Post({ post }: { post: Post }) {
  const title = `${post.title} | ${config.full_name}`

  return (
    <main className="p-4 w-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const post = getPostBySlug(params.slug as string, [
    "title",
    "date",
    "slug",
    "content",
    "excerpt",
  ])
  const content = await markdownToHtml(post.content)
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
