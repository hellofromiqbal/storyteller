'use client'

import React, { useState } from 'react';
import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from '@nextui-org/button';
import { Link as NextUILink } from '@nextui-org/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='xl' className='absolute top-0'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className='text-2xl font-extrabold'>Yournalist.</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NextUILink href="#" className='text-black'>
            Features
          </NextUILink>
        </NavbarItem>
        <NavbarItem isActive>
          <NextUILink href="#" className='text-black'>
            Customers
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink href="#" className='text-black'>
            Integrations
          </NextUILink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <NextUILink href="#" className='text-black'>Login</NextUILink>
        </NavbarItem>
        <NavbarItem>
          <Button as={NextUILink} href="#" variant="flat" className='text-white bg-black'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink
              className="w-full text-black"
              href="#"
              size="lg"
            >
              {item}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  )
}
