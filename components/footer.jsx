import * as React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="mt-auto p-4 md:flex md:items-center md:justify-between md:p-6 border-t-2">
        <span className="text-sm text-gray-500 sm:text-center">
          Made with React Bun and Tailwindcss
        </span>
      </footer>
    );
  }
}
