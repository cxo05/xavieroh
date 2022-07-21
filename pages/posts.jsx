import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/api";

import config from "../config.json";

function Posts({ posts }) {
  let date = new Intl.DateTimeFormat("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(posts.date);

  return (
    <main className="p-4 markdown-body w-full">
      <Head>
        <title>Posts | {config.name}</title>
      </Head>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-4">
          <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
            <div className="p-4 bg-slate-100 hover:bg-gray-300 cursor-pointer rounded-lg">
              <div className="font-semibold text-xl mb-4">{post.title}</div>
              <div className="mb-4">{post.excerpt}</div>
              <div>{date}</div>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "slug", "date", "excerpt"]);

  return {
    props: { posts },
  };
}

export default Posts;
