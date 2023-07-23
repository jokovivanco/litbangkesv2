'use client';

import MenuMobile from '@components/MenuMobile';
import MenuDesktop from '@components/MenuDesktop';

import { useState } from 'react';
import Image from 'next/image';

const Nav = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMenu = () => {
    setOpenMobileMenu(true);
  };

  return (
    <nav className="fixed top-0 z-50 w-full transition-all duration-500 bg-transparent">
      <div className="container mx-auto py-2 flex justify-between items-start lg:items-center w-full">
        {/* Logo */}
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            height={64}
            width={64}
          />
        </div>

        {/* Menu */}

        {/* Desktop Menu */}
        <div className="hidden flex-1 lg:flex">
          <MenuDesktop />
        </div>

        <div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              height={56}
              width={56}
              onClick={openMenu}
            />
          </div>
          <MenuMobile
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
          />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
