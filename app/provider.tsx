'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Poppins } from 'next/font/google';

const popppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin-ext']
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className={popppins.className}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
