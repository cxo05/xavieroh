---
title: "Setup Google Search Engine Optimisation (SEO)"
excerpt: "Setting up google SEO"
date: "2022-07-28"
---

# Setup Google Search Engine Optimisation (SEO)

## Table of contents

## Site essentials

### Page title

In general each page should have their own title that describes it well.

```html
<head>
  <title>Site Title</title>
</head>
```

For more information visit https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title#page_titles_and_seo

### Robots.txt

The `robots.txt` file is checked by web crawlers to know what pages should and should not be crawled. The file can be found by navigating to `/robots.txt` on sites that have them.
For more information visit https://www.robotstxt.org/robotstxt.html

### Sitemap.xml

A sitemap is an XML file that tells web crawlers what pages there are on the site to be crawled. For example, the sitemap for this site is shown below

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://xavieroh.vercel.app</loc>
  </url>
  <url>
   <loc>https://xavieroh.vercel.app/posts</loc>
  </url>
  <url>
   <loc>https://xavieroh.vercel.app/posts/convert-md-to-html</loc>
  </url>
  ...
  ...
  ...
</urlset>
```

Whenever there are changes to the sitemap, access the link below with your sitemap URL to request a crawl.

> https://www.google.com/ping?sitemap=https://website.com/sitemap.xml

### Lighthouse

Open up the developer console in chrome and run [lighthouse](https://github.com/GoogleChrome/lighthouse/tree/15c4236db9136cd257c52509cda8ff0b47e43b76#using-lighthouse-in-chrome-devtools) on your site.

Improve the SEO score by following the best practices under the SEO section.

## Google Search Console

1. Login to the [Google search console](https://search.google.com/search-console/about).
2. Register website as your own
3. Add sitemap
