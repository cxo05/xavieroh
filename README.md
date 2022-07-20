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

1. Change config in [config.json](config.json)

2. Add markdown files in `_posts` folder. (e.g. [a-demo-of-react-markdown.md](_posts/a-demo-of-react-markdown.md))

3. Export the project as a static site
   ```sh
   bun run export
   ```
4. Test the static site
   ```sh
   cd out
   live-server
   ```
