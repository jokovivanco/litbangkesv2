'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

interface IMenuMobile {
  openMobileMenu: boolean;
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile = ({ openMobileMenu, setOpenMobileMenu }: IMenuMobile) => {
  const [toggleProfil, setToggleProfil] = useState(false);
  const [toggleInformasi, setToggleInformasi] = useState(false);
  const [toggleInformasiBerkala, setToggleInformasiBerkala] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setOpenMobileMenu(false);
  }, [setOpenMobileMenu]);

  const toggleMenu = useCallback(
    (setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>) => {
      setToggleMenu((prev: boolean) => !prev);
    },
    []
  );

  return (
    <div
      className={`menu_container ${openMobileMenu ? 'open_nav' : 'close_nav'}`}
    >
      <div className="w-10/12 bg-white ml-auto min-h-screen">
        <div className="container py-6">
          <Image
            src="/assets/icons/close.svg"
            alt="close"
            height={32}
            width={32}
            // layout="fill"
            // className="h-8 w-auto ml-auto"
            className="ml-auto"
            onClick={closeMobileMenu}
          />
        </div>
        <ul className="navbar_list">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <div
              className="navbar_dropdown"
              onClick={() => toggleMenu(setToggleProfil)}
            >
              <button>Profil</button>
              {toggleProfil ? (
                <Image
                  src="/assets/icons/green-up.svg"
                  alt="arrow up"
                  height={24}
                  width={24}
                />
              ) : (
                <Image
                  src="/assets/icons/green-down.svg"
                  alt="arrow down"
                  height={24}
                  width={24}
                />
              )}
            </div>
            <div className={`navbar_toggle ${toggleProfil ? 'h-auto' : 'h-0'}`}>
              <ul className="navbar_list pt-6">
                <li>
                  <Link href="/">Sejarah</Link>
                </li>
                <li>
                  <Link href="/">Visi / Misi</Link>
                </li>
                <li>
                  <Link href="/">Struktur Organisasi</Link>
                </li>
                <li>
                  <Link href="/">Tupoksi</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/">Zona Integritas</Link>
          </li>
          <li>
            <div
              className="navbar_dropdown"
              onClick={() => toggleMenu(setToggleInformasi)}
            >
              <button>Informasi</button>
              {toggleInformasi ? (
                <Image
                  src="/assets/icons/green-up.svg"
                  alt="arrow up"
                  height={24}
                  width={24}
                />
              ) : (
                <Image
                  src="/assets/icons/green-down.svg"
                  alt="arrow down"
                  height={24}
                  width={24}
                />
              )}
            </div>
            <div
              className={`navbar_toggle ${toggleInformasi ? 'h-auto' : 'h-0'}`}
            >
              <ul className="navbar_list pt-6">
                <li>
                  <Link href="/">Pengumuman</Link>
                </li>
                <li>
                  <Link href="/">Berita</Link>
                </li>
                <li>
                  <Link href="/">Format Surat</Link>
                </li>
                <li>
                  <div
                    className="navbar_dropdown"
                    onClick={() => toggleMenu(setToggleInformasiBerkala)}
                  >
                    <button>Informasi Berkala</button>
                    {toggleInformasiBerkala ? (
                      <Image
                        src="/assets/icons/green-up.svg"
                        alt="arrow up"
                        height={24}
                        width={24}
                      />
                    ) : (
                      <Image
                        src="/assets/icons/green-down.svg"
                        alt="arrow down"
                        height={24}
                        width={24}
                      />
                    )}
                  </div>
                  <div
                    className={`navbar_toggle ${
                      toggleInformasiBerkala ? 'h-auto' : 'h-0'
                    }`}
                  >
                    <ul className="navbar_list pt-6">
                      <li>
                        <Link href="/">Laporan Tahunan</Link>
                      </li>
                      <li>
                        <Link href="/">Laporan Kinerja</Link>
                      </li>
                      <li>
                        <Link href="/">Rencana Kegiatan</Link>
                      </li>
                      <li>
                        <Link href="/">Keuangan</Link>
                      </li>
                      <li>
                        <Link href="/">Kearsipan</Link>
                      </li>
                      <li>
                        <Link href="/">Lainnya</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="pb-6">
            <Link href="/">Galeri</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MenuMobile;
