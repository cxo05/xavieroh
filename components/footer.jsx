const Footer = () => {
  return (
    <footer className="mt-auto p-4 md:flex md:items-center md:justify-between md:p-6 border-t-2">
      <span className="text-sm text-gray-500 sm:text-center">
        Made with Next.js and Tailwindcss. View the source code{" "}
        <a
          className="text-blue-500"
          href="https://github.com/cxo05/xavieroh"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </span>
    </footer>
  );
};

export default Footer;
