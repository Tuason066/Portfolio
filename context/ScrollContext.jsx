"use client";

import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const ScrollContext = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () =>
    setScroll(() => window.scrollY || document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return <Context.Provider value={scroll}>{children}</Context.Provider>;
};

export const useScrollContext = () => useContext(Context);

export default ScrollContext;
