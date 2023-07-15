'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

const HeightsContext = ({ children }) => {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    setNavHeight(
      document.querySelector('[data-mainheader]').getBoundingClientRect().height
    );
  }, []);

  return <Context.Provider value={{ navHeight }}>{children}</Context.Provider>;
};

export const useHeightsContext = () => useContext(Context);

export default HeightsContext;
