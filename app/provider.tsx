'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Poppins, Roboto } from 'next/font/google';

const popppins = Poppins({
  weight: '300',
  style: 'normal',
  subsets: ['latin', 'latin-ext']
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className={popppins.className}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
