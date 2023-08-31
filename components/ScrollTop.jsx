"use client";

import { useScrollContext } from "@context/ScrollContext";
import { Icon } from "@iconify/react";

const ScrollTop = () => {
  const scroll = useScrollContext();

  return (
    <button
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      title="scroll back to top"
      className={`${
        scroll < 500 ? "hidden" : "inline-block"
      } scale-up-ver-bottom fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 bg-lightest text-darkest p-2 rounded-sm grid place-items-center hover:bg-darkest hover:text-lightest shadow-md transition duration-500`}
    >
      <Icon icon="line-md:upload-loop" width="25" />
    </button>
  );
};
export default ScrollTop;
