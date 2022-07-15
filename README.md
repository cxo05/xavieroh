# React Blog

A blog made with react and tailwindcss, bootstrapped with bun.

## Getting Started

### Install Bun

```sh
curl https://bun.sh/install | bash
```

### Development

Install dependencies

```sh
bun install
```

Run tailwindcss

```sh
npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch
```

Run the development server.

```sh
npm start
```

Open http://localhost:3000 with your browser to see the result.

### Deployment

Build the project

```sh
npm run build
```

Host public folder as a single page application
