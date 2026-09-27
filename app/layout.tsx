import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './provider';
import NavbarCom from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Nguyen Hung Hoai Nam',
  description: 'Nguyen Hung Hoai Nam',
  icons: {
    icon: './logo.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning={true}>
        <Providers>
          <NavbarCom />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
