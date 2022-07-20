# React Blog

A blog made with Next.js with tailwindcss. Using bun instead of npm.

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

1. Change `mode` to `production` in [webpack.config.js](webpack.config.js)
2. Change config in [config.json](src/Files/config.json)

3. Add markdown files in `_posts` folder. (e.g. [a-demo-of-react-markdown.md](_posts/a-demo-of-react-markdown.md)

4. Build the project
   ```sh
   bun run build
   ```

Host as a static site
