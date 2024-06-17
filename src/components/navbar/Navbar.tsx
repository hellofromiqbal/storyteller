/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState } from 'react';
import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('');
    const handleNavItemClick = (navItem: string) => {
      setSelectedNavItem(navItem);
    };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { text: 'trending', href: '/trending' },
    { text: 'new', href: '/new' },
    { text: 'recommended', href: '/recommended' },
    { text: 'register', href: '/register' },
    { text: 'login', href: '/login' },
  ];

  return (
    <NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='xl' className='max-w-[1440px] mx-auto fixed top-0'>
      <NavbarContent>
        <NavbarBrand>
          <Link
            href={"/"}
            className='text-2xl font-extrabold'
            onClick={() => {
              handleMenuItemClick();
              handleNavItemClick('');
            }}
          >Storyteller.</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={selectedNavItem === 'trending'}>
          <Link
            href="#trendingStories"
            className='text-black'
            onClick={() => handleNavItemClick('trending')}
          >Trending</Link>
        </NavbarItem>
        <NavbarItem isActive={selectedNavItem === 'new'}>
          <Link
            href="#newStories"
            className='text-black'
            onClick={() => handleNavItemClick('new')}
          >New</Link>
        </NavbarItem>
        <NavbarItem isActive={selectedNavItem === 'recommended'}>
          <Link
            href="#editorsChoice"
            className='text-black'
            onClick={() => handleNavItemClick('recommended')}
          >Recommended</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarItem className="hidden md:flex">
          <Link href="/login" className='text-black'>Login</Link>
        </NavbarItem>
        <NavbarItem className='hidden md:flex'>
          <Link href="/register" className='px-2 py-2 rounded-md text-white bg-black'>Register</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} isActive={selectedNavItem === item.text}>
            <Link
              className="w-full text-black text-lg capitalize"
              href={item.href}
              onClick={() => {
                handleMenuItemClick();
                handleNavItemClick(item.text);
              }}
            >{item.text}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  )
}
