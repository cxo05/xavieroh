# React Project with Bun runtime

This is a React project boostrapped with bun using tailwindcss.

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
npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch
```

Run the development server.

```sh
bun dev
```

Open http://localhost:3000 with your browser to see the result.
