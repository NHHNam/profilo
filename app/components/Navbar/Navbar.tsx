'use client';
import Link from 'next/link';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react';
import { Image } from '@nextui-org/react';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

const NavbarCom = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const menuItems = ['Works'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit ml-2">
            <Link
              color="foreground"
              href="/"
              className={`text-normal p-2 rounded-lg cursor-pointer flex flex-row`}
            >
              <svg
                width="20"
                height="20"
                className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <g transform="matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)">
                  <path
                    fill="currentColor"
                    d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"
                  ></path>
                </g>
                <path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path>
                <g transform="matrix(1.00722,0,0,0.981856,-0.205441,0.281328)">
                  <path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path>
                </g>
                <path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path>
                <path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path>
              </svg>
              <div className="ml-1">NGUYEN HUNG HOAI NAM</div>
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="/works"
            className={`text-normal hover:underline p-2 rounded-lg ${
              pathname === '/works' ? 'bg-[#88ccc9]' : ''
            }`}
          >
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-normal hover:underline p-2 rounded-lg`}
            href="https://github.com/hoainam2001"
            target="_blank"
            aria-current="page"
          >
            <Image width={20} height={20} src="/github.png" alt="Github" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          {theme === 'dark' ? (
            <Button
              size="sm"
              onClick={() => setTheme('light')}
              className="bg-[#fbd38e] w-[100px]"
            >
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-[20px] h-[20px]"
                aria-hidden="true"
              >
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2"></path>
                  <path d="M12 21v2"></path>
                  <path d="M4.22 4.22l1.42 1.42"></path>
                  <path d="M18.36 18.36l1.42 1.42"></path>
                  <path d="M1 12h2"></path>
                  <path d="M21 12h2"></path>
                  <path d="M4.22 19.78l1.42-1.42"></path>
                  <path d="M18.36 5.64l1.42-1.42"></path>
                </g>
              </svg>
            </Button>
          ) : (
            <Button
              size="sm"
              className="bg-[#805ad5] w-[100px]"
              onClick={() => setTheme('dark')}
            >
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-[20px] h-[20px]"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
                ></path>
              </svg>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
            <div>
              <Link
                className={`text-normal hover:underline p-2 rounded-lg`}
                href="https://github.com/hoainam2001"
                target="_blank"
                aria-current="page"
              >
                <Image width={30} height={30} src="/github.png" alt="Github" />
              </Link>
            </div>
            <div>
              {theme === 'dark' ? (
                <Button
                  size="sm"
                  onClick={() => {
                    setTheme('light');
                  }}
                  className="bg-[#fbd38e] w-[100px]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-[20px] h-[20px]"
                    aria-hidden="true"
                  >
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <path d="M12 1v2"></path>
                      <path d="M12 21v2"></path>
                      <path d="M4.22 4.22l1.42 1.42"></path>
                      <path d="M18.36 18.36l1.42 1.42"></path>
                      <path d="M1 12h2"></path>
                      <path d="M21 12h2"></path>
                      <path d="M4.22 19.78l1.42-1.42"></path>
                      <path d="M18.36 5.64l1.42-1.42"></path>
                    </g>
                  </svg>
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="bg-[#805ad5] w-[100px]"
                  onClick={() => {
                    setTheme('dark');
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-[20px] h-[20px]"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
                    ></path>
                  </svg>
                </Button>
              )}
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarCom;
