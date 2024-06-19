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
    href: 'mailto:jepoyduque06@gmail.com?subject=Software Engineer Application from Portfolio',
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
  // {
  //   href: "https://www.facebook.com/Tuason06",
  //   title: "Facebook",
  //   icon: <Icon icon="ant-design:facebook-filled" />,
  // },
  {
    href: 'https://www.linkedin.com/in/jeffreytuason/',
    title: 'LinkedIn',
    icon: <Icon icon='mdi:linkedin' />,
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

export const techStacks = [
  {
    icon_name: 'devicon:mongodb',
    title: 'Mongodb',
  },
  {
    icon_name: 'skill-icons:expressjs-dark',
    title: 'Expressjs',
  },
  {
    icon_name: 'logos:react',
    title: 'React',
  },
  {
    icon_name: 'devicon:nextjs',
    title: 'Nextjs',
  },
  {
    icon_name: 'devicon:nodejs',
    title: 'Nodejs',
  },
  {
    icon_name: 'logos:typescript-icon',
    title: 'Typescript',
  },
  {
    icon_name: 'devicon:tailwindcss',
    title: 'Tailwindcss',
  },
  {
    icon_name: 'logos:bootstrap',
    title: 'Bootstrap',
  },
  {
    icon_name: 'logos:sass',
    title: 'Sass',
  },
  {
    icon_name: 'logos:mysql',
    title: 'MySQL',
  },
  {
    icon_name: 'logos:postgresql',
    title: 'PostgreSQL',
  },
  {
    icon_name: 'devicon:php',
    title: 'PHP',
  },
  {
    icon_name: 'logos:codeigniter-icon',
    title: 'Codeigniter',
  },
  {
    icon_name: 'devicon:java',
    title: 'Java',
  },
  {
    icon_name: 'bxl:spring-boot',
    title: 'Spring Boot',
    color: '#6db33f',
  },
  {
    icon_name: 'logos:javascript',
    title: 'Javascript',
  },
  {
    icon_name: 'devicon:css3',
    title: 'CSS',
  },
  {
    icon_name: 'vscode-icons:file-type-html',
    title: 'HTML',
  },
  {
    icon_name: 'logos:figma',
    title: 'Figma',
  },
];
