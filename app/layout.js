import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import '../styles/globals.css';
import ScrollTop from '@components/ScrollTop';
import ScrollContext from '@context/ScrollContext';
import HeightsContext from '@context/HeightsContext';

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
