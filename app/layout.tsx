import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './provider';
import NavbarCom from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Profilo',
  description: 'Profilo',
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <NavbarCom />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
