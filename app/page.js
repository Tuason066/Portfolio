import About from '@components/About';
import Contact from '@components/Contact';
import Home from '@components/Home';
import Projects from '@components/Projects';
import TechnologyStack from '@components/TechnologyStack';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Jeffrey Tuason | Front-end Developer</title>
        <meta
          name='description'
          content='I am highly motivated self-taught Front-end Web Developer with a passion for creating pixel-perfect designs and seamless user experiences. Seeking a position where I can leverage my skills in HTML5, CSS3, JavaScript (ES6), and other tech stack I have to deliver high quality web applications.'
        />
        <meta
          property='og:title'
          content='Jeffrey Tuason | Front-end Developer'
        />
        <meta
          property='og:description'
          content='I am highly motivated self-taught Front-end Web Developer with a passion for creating pixel-perfect designs and seamless user experiences. Seeking a position where I can leverage my skills in HTML5, CSS3, JavaScript (ES6), and other tech stack I have to deliver high quality web applications.'
        />
        <meta property='og:image' content='/2x2.png' />
        <meta property='og:url' content='https://jeffreytuason.netlify.app/' />
        <meta
          name='twitter:title'
          content='Jeffrey Tuason | Front-end Developer'
        />
        <meta
          name='twitter:description'
          content='I am highly motivated self-taught Front-end Web Developer with a passion for creating pixel-perfect designs and seamless user experiences. Seeking a position where I can leverage my skills in HTML5, CSS3, JavaScript (ES6), and other tech stack I have to deliver high quality web applications.'
        />
        <meta name='twitter:image' content='/2x2.png' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Home />
      <TechnologyStack />
      <Projects />
      <About />
      <Contact />
    </>
  );
};
export default page;
