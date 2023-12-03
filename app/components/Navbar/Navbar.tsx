'use client';
import Link from 'next/link';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react';
import { Image } from '@nextui-org/react';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const NavbarCom = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Profilo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-lg font-medium">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg font-medium"
            href="/about"
            aria-current="page"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className="text-lg font-medium"
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          {theme === 'dark' ? (
            <div
              className="bg-white w-full cursor-pointer p-1 rounded-full"
              onClick={() => setTheme('light')}
            >
              <Image
                width={'25px'}
                height={'25px'}
                src="/dark.png"
                alt="Dark mode"
              />
            </div>
          ) : (
            <div
              className="w-full cursor-pointer p-1 rounded-full bg-[#ccc]"
              onClick={() => setTheme('dark')}
            >
              <Image
                width={'25px'}
                height={'25px'}
                src="/light.png"
                alt="Light mode"
              />
            </div>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarCom;
