import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import '../styles/globals.css';
import ScrollTop from '@components/ScrollTop';
import ScrollContext from '@context/ScrollContext';
import HeightsContext from '@context/HeightsContext';

export const metadata = {
  title: 'Jeffrey Tuason - Portfolio',
  description:
    "As a driven and innovative Junior Front-end Developer with a strong foundation in Computer Technology, I'm excited to bring my skills and passion to a forward-thinking team. With a keen eye for detail and a passion for crafting exceptional user experiences, I excel in creating visually stunning and highly functional web applications using cutting-edge technologies like Nextjs, Reactjs, and PHP. I'm now looking for a challenging role that will allow me to leverage my skills, expand my expertise, and contribute to the development of innovative solutions that make a real impact. Let's build something amazing together!",
  generator: 'Next.js',
  applicationName: 'Jeffrey Tuason Portfolio',
  url: 'https://jeffrey-tuason-portfolio.netlify.app/',
  siteName: 'Jeffrey Tuason Portfolio',
  keywords: [
    'Front-End Developer',
    'Back-End Developer',
    'Software Developer',
    'Junior Software Engineer',
    'Software Engineer',
    'Web Developer',
    'JavaScript',
    'React',
    'Portfolio',
    'Nextjs',
    'Nodejs',
    'Expressjs',
    'Java',
    'PHP',
    'Codeigniter',
  ],
  authors: [
    {
      name: 'Jeffrey Tuason',
      url: 'https://jeffrey-tuason-portfolio.netlify.app/',
    },
  ],
  colorScheme: 'dark',
  creator: 'Jeffrey Tuason',
  publisher: 'Jeffrey Tuason',
  formatDetection: {
    email: 'tuason.dev@email.com',
    address: 'Minglanilla, Cebu, Philippines',
    telephone: '09456424506',
  },
  locale: 'en_US',
  type: 'website',
  openGraph: {
    title: 'Jeffrey Tuason - Portfolio',
    description:
      "As a driven and innovative Junior Front-end Developer with a strong foundation in Computer Technology, I'm excited to bring my skills and passion to a forward-thinking team. With a keen eye for detail and a passion for crafting exceptional user experiences, I excel in creating visually stunning and highly functional web applications using cutting-edge technologies like Nextjs, Reactjs, and PHP. I'm now looking for a challenging role that will allow me to leverage my skills, expand my expertise, and contribute to the development of innovative solutions that make a real impact. Let's build something amazing together!",
    url: 'https://jeffrey-tuason-portfolio.netlify.app/',
    siteName: 'Jeffrey Tuason Portfolio',
    images: [
      {
        url: '/2x2,jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/2x2.jpg',
        width: 1200,
        height: 1200,
        alt: 'My Profile Picture',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-lato light-theme'>
        <ScrollContext>
          <HeightsContext>
            <Navbar />
            {children}
            <Footer />
            <ScrollTop />
          </HeightsContext>
        </ScrollContext>
      </body>
    </html>
  );
}
