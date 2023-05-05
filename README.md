# Personal Site

A site made with [Next.js](https://nextjs.org/) with [tailwindcss](https://tailwindcss.com/).

Using [bun](https://bun.sh/) instead of npm for package management.

Replace bun with npm when on windows.

## Getting Started

### Install Bun

```sh
curl https://bun.sh/install | bash
```

### Development

1. Install dependencies

```sh
bun install
```

2. Run the development server.

```sh
bun run dev
```

3. Open http://localhost:3000 with your browser to see the result.

### Deployment

1. Change config in [config.json](config.json)
2. Add markdown files in `_posts` folder. (e.g. [a-demo-of-react-markdown.md](_posts/a-demo-of-react-markdown.md))
3. Add images in `public/images` folder.
4. Convert images to webp format (Install [cwebp](https://developers.google.com/speed/webp/docs/precompiled))
   ```sh
   sh scripts/convert-to-webp.sh
   ```
   **Warning**: This also replaces all occurances of `.(jpg|jpeg|tif|tiff|png)` with `.webp` in the markdown files
5. Build the project and host **or** deploy using https://vercel.com/
   ```sh
   bun run build
   ```
