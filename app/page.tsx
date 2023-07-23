'use client';

import { useLayoutEffect } from 'react';

import Hero from '@components/main/Hero';
import VisiMisi from '@components/main/VisiMisi';
import Berita from '@components/main/Berita';
import Galeri from '@components/main/Galeri';
import StrukturOrganisasi from '@components/main/StrukturOrganisasi';
import Tupoksi from '@components/main/Tupoksi';
import Sejarah from '@components/main/Sejarah';
import ZonaIntegritas from '@components/main/ZonaIntegritas';
import Footer from '@components/main/Footer';
import Informasi from '@components/main/Informasi';

const RootPage = () => {
  useLayoutEffect(() => {
    const navbar = document.getElementsByTagName('nav')[0];
    const hero = document.getElementById('hero')!;

    const scrollEvent = () => {
      if (window.scrollY > hero.clientHeight) {
        navbar.classList.add('navbar_scrolled_down');
      } else {
        if (navbar.classList.contains('navbar_scrolled_down')) {
          navbar.classList.remove('navbar_scrolled_down');
        }
      }
    };

    const animateNavbarOnScroll = () => {
      window.addEventListener('scroll', scrollEvent);
    };

    animateNavbarOnScroll();

    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <>
      <Hero />
      <VisiMisi />
      <Sejarah />
      <StrukturOrganisasi />
      <Tupoksi />
      <ZonaIntegritas />
      <Galeri />
      <Berita />
      <Informasi />
      <Footer />
    </>
  );
};
export default RootPage;
