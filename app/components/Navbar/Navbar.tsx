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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = ['Home', 'About', 'Contact'];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar isBordered className="mb-2">
      <NavbarBrand>
        <div className="p-2 gap-0 mr-2 sm:hidden" onClick={onOpen}>
          <Image
            width={'30px'}
            height={'30px'}
            src={theme === 'dark' ? '/menu-dark.png' : 'menu-light.png'}
            alt="Menu"
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
              className="w-full cursor-pointer p-1"
              onClick={() => setTheme('light')}
            >
              <Image
                width={'25px'}
                height={'25px'}
                src="/light.png"
                alt="Dark mode"
              />
            </div>
          ) : (
            <div
              className="w-full cursor-pointer p-1"
              onClick={() => setTheme('dark')}
            >
              <Image
                width={'25px'}
                height={'25px'}
                src="/dark.png"
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
                      className="cursor-pointer p-1 w-full"
                      onClick={() => {
                        setTheme('light');
                        onClose();
                      }}
                    >
                      <Image
                        width={'35px'}
                        height={'35px'}
                        src="/light.png"
                        alt="Dark mode"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full cursor-pointer p-1"
                      onClick={() => {
                        setTheme('dark');
                        onClose();
                      }}
                    >
                      <Image
                        width={'35px'}
                        height={'35px'}
                        src="/dark.png"
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
