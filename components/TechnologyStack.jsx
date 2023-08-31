"use client";

import { techStacks } from "@helper/constants";
import { Icon } from "@iconify/react";

const TechnologyStack = () => {
  return (
    <section id="stack" className="bg-lightest text-center py-14 lg:py-20">
      <h2 className="uppercase text-darkest h2 mb-8 lg:mb-16">
        Technology Stack
      </h2>
      <div className="text-4xl lg:text-6xl text-darkest grid grid-cols-[repeat(auto-fit,minmax(min-content,75px))] gap-8 md:gap-12 justify-center center max-w-2xl lg:max-w-4xl rounded-lg">
        {techStacks.map((item) => (
          <div key={item.title} data-aos="zoom-in-up">
            <Icon
              icon={item.icon_name}
              color={item.color ? item.color : ""}
              className="inline"
            />
            <p className="capitalize text-base mt-1">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyStack;
