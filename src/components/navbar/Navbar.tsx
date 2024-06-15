/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState } from 'react';
import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from '@nextui-org/button';
import { Link as NextUILink } from '@nextui-org/link';
import Link from 'next/link';

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
    <NextUINavbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='xl' className='max-w-[1440px] mx-auto'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"} className='text-2xl font-extrabold'>Storyteller.</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#trendingStories" className='text-black'>
            Trending Stories
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#newStories" className='text-black'>
            New Stories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#editorsChoice" className='text-black'>
            Editor's Choice
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" className='text-black'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/signup" className='px-2 py-2 rounded-md text-white bg-black'>
            Sign Up
          </Link>
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
