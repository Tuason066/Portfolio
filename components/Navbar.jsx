'use client';

import Link from 'next/link';
import NavbarDropdown from './NavbarDropdown';
import { useState, useEffect } from 'react';
import { links } from '@helper/constants';
import { HandleLinkScroll } from '@helper/utils/HandleLinkScroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = () =>
    setScrolled(() => window.scrollY || document.documentElement.scrollTop);

  useEffect(() => {
    // navbar
    const header = document.querySelector('[data-mainheader]');
    const headerHeight = header.getBoundingClientRect().height;

    window.addEventListener('scroll', handleScroll);

    if (scrolled > headerHeight) {
      header.classList.add('glass-dark', 'fixed', 'top-0', 'left-0', 'w-full');
    } else {
      header.classList.remove(
        'glass-dark',
        'fixed',
        'top-0',
        'left-0',
        'w-full'
      );
      header.classList.add('bg-darkest');
    }

    // links

    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      const { height } = section.getBoundingClientRect();

      if (
        scrolled + headerHeight > section.offsetTop - 5 &&
        scrolled + headerHeight < section.offsetTop - 5 + height
      ) {
        const link = document.querySelector(`[data-id="${href}"]`);
        link.classList.add('active');
      } else {
        const link = document.querySelector(`[data-id="${href}"]`);
        link.classList.remove('active');
      }
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header data-mainheader className='bg-darkest text-lightest z-50'>
      <nav>
        <div className='center flex-between py-4 md:py-8'>
          {/* brand */}

          <h1
            onClick={() => window.scrollTo(0, 0)}
            data-aos='fade-right'
            className='h5 uppercase cursor-pointer'
          >
            portfolio
          </h1>
          {/* mobile navigation */}
          <NavbarDropdown />
          {/* desktop */}
          <ul className='hidden lg:flex lg:items-center capitalize tracking-wider gap-12'>
            {links.map(({ href, label }) => (
              <li key={label} data-aos='fade-down'>
                <Link
                  href={href}
                  onClick={HandleLinkScroll}
                  data-id={href}
                  className={`link-underline-effect`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
