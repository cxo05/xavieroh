import Link from "next/link";
import { getAllPosts } from "../lib/api";

function Posts({ posts }) {
  return (
    <main className="p-4 markdown-body">
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link
            href={`/posts/${encodeURIComponent(post.slug)}`}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
          >
            <a className="ml-3">{post.title}</a>
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
