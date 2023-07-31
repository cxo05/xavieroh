---
title: "Test post for markdown to html"
excerpt: "Testing all the remark plugins to generate html from a markdown file"
date: "2022-07-20"
---

# Converting markdown to html using `remark`

![](/images/sky.webp)

## Overview

- This blog uses the following remark and rehype plugins
  - [`remark-gfm`](https://github.com/remarkjs/remark-gfm) — GitHub flavored markdown
  - [`remarkToc`](https://github.com/remarkjs/remark-toc) - Generate table of contents
  - [`remarkRehype`](https://github.com/remarkjs/remark-rehype) - Markdown to html
  - [`rehypeSlug`](https://github.com/rehypejs/rehype-slug) - Add ids to headings.
  - [`rehypeAutolinkHeadings`](https://github.com/rehypejs/rehype-autolink-headings) - Add links to headings with ids back to themselves.
  - [`rehypeHighlight`](https://github.com/rehypejs/rehype-highlight) - Code block syntax highlighting

## Table of contents

## Syntax highlighting

### Javascript

```js
import React from "react"
import ReactDOM from "react-dom"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
    {"# Your markdown here"}
  </ReactMarkdown>,
  document.querySelector("#content"),
)
```

### Python

```python
weekdays = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday", "Saturday"]
print("Seven Weekdays are:\n")
for day in range(len(weekdays)):
    print(weekdays[day])
```

## GitHub flavored markdown (GFM)

|    Feature | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
|        GFM | 100% w/ `remark-gfm` |

~~strikethrough~~

- [ ] task list
- [x] checked item

https://example.com
