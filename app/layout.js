import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "../styles/globals.css";
import ScrollTop from "@components/ScrollTop";
import ScrollContext from "@context/ScrollContext";
import HeightsContext from "@context/HeightsContext";

export const metadata = {
  title: "Jeffrey Tuason - Portfolio",
  description:
    "I'm Jeffrey Tuason, a passionate front-end developer with expertise in creating modern and user-friendly web applications. Explore my portfolio to see my projects and skills.",
  generator: "Next.js",
  applicationName: "Jeffrey Tuason Portfolio",
  url: "https://jeffrey-tuason-portfolio.netlify.app/",
  siteName: "Jeffrey Tuason Portfolio",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "JavaScript",
    "React",
    "Portfolio",
    "Nextjs",
    "Nodejs",
    "Expressjs",
    "Java",
  ],
  authors: [
    {
      name: "Jeffrey Tuason",
      url: "https://jeffrey-tuason-portfolio.netlify.app/",
    },
  ],
  colorScheme: "dark",
  creator: "Jeffrey Tuason",
  publisher: "Jeffrey Tuason",
  formatDetection: {
    email: "tuason.dev@email.com",
    address: "Minglanilla, Cebu, Philippines",
    telephone: "09456424506",
  },
  locale: "en_US",
  type: "website",
  openGraph: {
    title: "Jeffrey Tuason - Portfolio",
    description:
      "Explore the portfolio of Jeffrey Tuason, a passionate front-end developer creating modern and user-friendly web applications.",
    url: "https://jeffrey-tuason-portfolio.netlify.app/",
    siteName: "Jeffrey Tuason Portfolio",
    images: [
      {
        url: "/2x2,jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/2x2.jpg",
        width: 1200,
        height: 1200,
        alt: "My Profile Picture",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-lato light-theme">
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
