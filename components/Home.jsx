"use client";

import { social_links } from "@helper/constants";
import Image from "next/image";

const Home = () => {
  return (
    <main
      id="home"
      className='bg-darkest min-h-screen py-12 grid place-items-center lg:bg-[url("/transparent-desktop.png")] lg:bg-contain lg:bg-no-repeat lg:bg-left-bottom text-lightest'
    >
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:w-full lg:max-w-full">
        <div>
          <Image
            src={"/2x2.jpg"}
            alt="Jeffrey Tuason's Profile"
            width={"150"}
            height={"150"}
            className="rounded-full mx-auto lg:hidden"
            priority
          />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center">
          {/* TITLE */}
          <div data-aos="zoom-in-up" className="text-center mt-10 lg:m-0">
            <h1 className="h3">
              I'm{" "}
              <span className="uppercase text-lightAccent">Jeffrey Tuason</span>
            </h1>
            <p className="h4 font-medium">Jr. Front-end Developer</p>
          </div>
          {/* SOCIAL ICONS */}
          <div
            data-aos="zoom-in-up"
            className="align-horizontal justify-between w-2/3 max-w-sm mx-auto mt-6 text-lightest text-xl md:text-2xl lg:text-3xl"
          >
            {social_links.map(({ href, title, icon }) => (
              <a
                key={title}
                href={href}
                title={title}
                target="_blank"
                className="hover:opacity-50 transition duration-500"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
