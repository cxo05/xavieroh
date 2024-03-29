import { GetServerSideProps } from "next"
import config from "../config.json"
import { Post, getAllPosts } from "../lib/api"

const BASE_URL = config.baseURL

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/posts</loc>
     </url>
     ${posts
       .map((post) => {
         return `<url><loc>${`${BASE_URL}/posts/${post.slug}`}</loc></url>`
       })
       .join("")}
   </urlset>
 `
}

function SiteMap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getAllPosts(["slug"])

  const sitemap = generateSiteMap(posts)

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
