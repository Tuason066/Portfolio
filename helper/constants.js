'use client';

import { Icon } from '@iconify/react';

export const links = [
  {
    href: '#home',
    label: 'home',
    icon: {
      fill: <Icon icon='clarity:home-solid' width='23' />,
      outline: <Icon icon='clarity:home-line' width='23' />,
    },
  },
  {
    href: '#stack',
    label: 'technology stack',
    icon: {
      fill: <Icon icon='ph:stack-fill' width='23' />,
      outline: <Icon icon='ph:stack-light' width='23' />,
    },
  },
  {
    href: '#projects',
    label: 'projects',
    icon: {
      fill: <Icon icon='ph:files-fill' width='23' />,
      outline: <Icon icon='ph:files-light' width='23' />,
    },
  },
  {
    href: '#about',
    label: 'about',
    icon: {
      fill: <Icon icon='iconamoon:profile-fill' width='23' />,
      outline: <Icon icon='iconamoon:profile-thin' width='23' />,
    },
  },
  {
    href: '#contact',
    label: 'contact',
    icon: {
      fill: <Icon icon='fluent:contact-card-48-filled' width='23' />,
      outline: <Icon icon='fluent:contact-card-48-regular' width='23' />,
    },
  },
];

export const social_links = [
  {
    href: 'https://github.com/Tuason066',
    title: 'GitHub',
    icon: <Icon icon='akar-icons:github-fill' />,
  },
  {
    href: 'mailto:jepoyduque06@gmail.com?subject=Front-end Developer Application from Portfolio',
    title: 'Gmail',
    icon: <Icon icon='mdi:gmail' />,
  },
  {
    href: 'https://1drv.ms/w/s!Ajx4NYAUw9HKgXHP1yGlbEFRNv3k?e=Uuk538',
    title: 'Resume',
    icon: <Icon icon='icon-park-solid:notes' />,
  },
  {
    href: 'https://drive.google.com/drive/folders/1sFWGWvgz4RG09lEXCacDLyidly-vOqnr?usp=sharing',
    title: 'Certificates',
    icon: <Icon icon='clarity:certificate-solid' />,
  },
  {
    href: 'https://www.facebook.com/Tuason06',
    title: 'Facebook',
    icon: <Icon icon='ant-design:facebook-filled' />,
  },
];

export const projects = [
  {
    title: 'Ecommerce Product Page',
    live_url: 'https://tuason-ecommerce-product-page.netlify.app/',
    source_url: 'https://github.com/Tuason066/ecommerce-product-page',
    image: {
      url: '/ecommerce-mobile-design.jpg',
      width: 350,
      height: 500,
    },
    technologies: ['Reactjs', 'Tailwindcss'],
  },
  {
    title: 'Intro Section with Dropdown Navigation',
    live_url:
      'https://tuason066.github.io/Intro-Section-with-Dropdown-Navigation/',
    source_url:
      'https://github.com/Tuason066/Intro-Section-with-Dropdown-Navigation',
    image: {
      url: '/remote-mobile-design.jpg',
      width: 350,
      height: 500,
    },
    technologies: ['Reactjs', 'Tailwindcss'],
  },
  {
    title: 'Time Tracking',
    live_url: 'https://tuason066.github.io/Time-Tracking-Dashboard/',
    source_url: 'https://github.com/Tuason066/Time-Tracking-Dashboard',
    image: {
      url: '/time-tracking-mobile-design.jpg',
      width: 350,
      height: 500,
    },
    technologies: ['Reactjs', 'Tailwindcss'],
  },
];
