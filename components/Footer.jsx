"use client";

import { social_links } from "@helper/constants";

const Footer = () => {
  return (
    <footer className="bg-dark text-lightest text-center py-8 md:py-12 lg:py-16">
      <div className="center">
        <div className="text-xl md:text-2xl lg:text-3xl align-horizontal gap-x-6 md:gap-x-8 lg:gap-x-10 justify-center">
          {social_links.map(({ href, title, icon }) => (
            <a
              key={title}
              href={href}
              title={title}
              target="_blank"
              className="hover:opacity-70"
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm lg:text-base">
          Developed and Designed by{" "}
          <strong>
            <a
              href="https://www.facebook.com/Tuason06"
              className="uppercase tracking-wider hover:underline"
            >
              jeffrey tuason
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
