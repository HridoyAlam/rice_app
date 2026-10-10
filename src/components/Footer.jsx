import React from "react";

const Footer = ({ source, author, github }) => {
  return (
    <footer className="bg-field text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-6 text-sm sm:flex-row sm:justify-between">
        <p>তথ্যসূত্র: {source}</p>
        <p>
          © {new Date().getFullYear()} {author}
        </p>
        <p>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-straw"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
