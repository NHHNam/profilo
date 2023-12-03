'use client';
import Link from 'next/link';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from '@nextui-org/react';
import { Image } from '@nextui-org/react';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const NavbarCom = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = ['Home', 'About', 'Contact'];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar isBordered className="mb-2">
      <NavbarBrand>
        {/* <NavbarMenuToggle
          className="sm:hidden mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        /> */}
        <div
          className="bg-white p-1 gap-0 mr-2 rounded-sm sm:hidden"
          onClick={onOpen}
        >
          <Image
            width={'20px'}
            height={'20px'}
            src="/menu.png"
            alt="Menu"
            className="rounded-full"
          />
        </div>
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader></ModalHeader>
              <ModalBody>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                    onClick={onClose}
                  >
                    <p className="text-lg font-medium">{item}</p>
                  </Link>
                ))}
                <div>
                  {theme === 'dark' ? (
                    <div
                      className="bg-white cursor-pointer p-1 rounded-full w-7"
                      onClick={() => {
                        setTheme('light');
                        onClose();
                      }}
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
                      className="w-7 cursor-pointer p-1 rounded-full bg-[#ccc]"
                      onClick={() => {
                        setTheme('dark');
                        onClose();
                      }}
                    >
                      <Image
                        width={'25px'}
                        height={'25px'}
                        src="/light.png"
                        alt="Light mode"
                      />
                    </div>
                  )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Navbar>
  );
};

export default NavbarCom;
