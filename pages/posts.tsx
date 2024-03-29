import Head from "next/head"
import { Post, getAllPosts } from "../lib/api"

import config from "../config.json"
import { useRouter } from "next/router"

function Posts({ posts }: { posts: Post[] }) {
  const router = useRouter()

  const title = `Posts | ${config.full_name}`

  return (
    <main className="p-4 markdown-body w-full">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Blog Posts</h1>
      {posts.map((post) => {
        let dateString = new Intl.DateTimeFormat("en-SG", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(post.date))
        return (
          <div
            key={post.slug}
            className="mb-4"
            onClick={() =>
              router.push(`/posts/${encodeURIComponent(post.slug)}`)
            }
          >
            <div className="p-4 bg-slate-100 hover:bg-gray-300 cursor-pointer rounded-lg">
              <div className="font-semibold text-xl mb-4">{post.title}</div>
              <div className="mb-4">{post.excerpt}</div>
              <div>{dateString}</div>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "slug", "date", "excerpt"])

  return {
    props: { posts },
  }
}

export default Posts
