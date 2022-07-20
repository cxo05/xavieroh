const fs = require("fs");
const config = require("../config.json");
const { getAllPosts } = require("../lib/api");

const BASE_URL = config.baseURL;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/about</loc>
     </url>
     <url>
       <loc>${BASE_URL}/posts</loc>
     </url>
     ${posts
      .map((post) => {
        return `
        <url>
          <loc>${`${BASE_URL}/posts/${post.slug}`}</loc>
        </url>
        `;
      })
      .join("")}
   </urlset>
 `;
}

const posts = getAllPosts(["slug"]);
const sitemap = generateSiteMap(posts);

fs.writeFileSync('public/sitemap.xml', sitemap);