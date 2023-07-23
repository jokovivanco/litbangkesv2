'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MenuDesktop = () => {
  const [toggleProfil, setToggleProfil] = useState(false);
  const [toggleInformasi, setToggleInformasi] = useState(false);
  const [toggleInformasiBerkala, setToggleInformasiBerkala] = useState(false);

  const toggleMenu = (
    setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="w-full">
      <ul className="flex justify-end items-center gap-8">
        <li className="navbar_list_desktop">
          <Link href="/">Beranda</Link>
        </li>
        <li className="navbar_list_desktop">
          <div
            className="navbar_dropdown cursor-pointer"
            onClick={() => toggleMenu(setToggleProfil)}
          >
            <button>Profil</button>
            {toggleProfil ? (
              <Image
                src="/assets/icons/white-up.svg"
                alt="arrow up"
                // layout="fill"
                // className="h-6"
                height={24}
                width={24}
              />
            ) : (
              <Image
                src="/assets/icons/white-down.svg"
                alt="arrow down"
                height={24}
                width={24}
              />
            )}
          </div>
          <div
            className={`absolute overflow-y-hidden ${
              toggleProfil ? 'h-auto' : 'h-0'
            }`}
          >
            <ul className="navbar_list_desktop_child">
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
        <li className="navbar_list_desktop">
          <Link href="/">Zona Integritas</Link>
        </li>
        <li className="navbar_list_desktop">
          <div
            className="navbar_dropdown cursor-pointer"
            onClick={() => toggleMenu(setToggleInformasi)}
          >
            <button>Informasi</button>
            {toggleInformasi ? (
              <Image
                src="/assets/icons/white-up.svg"
                alt="arrow up"
                height={24}
                width={24}
              />
            ) : (
              <Image
                src="/assets/icons/white-down.svg"
                alt="arrow down"
                height={24}
                width={24}
              />
            )}
          </div>
          <div
            className={`absolute overflow-y-hidden ${
              toggleInformasi ? 'h-auto' : 'h-0'
            }`}
          >
            <ul className="navbar_list_desktop_child">
              <li>
                <Link href="/">Pengumuman</Link>
              </li>
              <li>
                <Link href="/">Berita</Link>
              </li>
              <li>
                <Link href="/">Format Surat</Link>
              </li>
              <li className="button">
                <div
                  className="navbar_dropdown cursor-pointer"
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
                <div className={`${toggleInformasiBerkala ? 'h-auto' : 'h-0'}`}>
                  <ul className="navbar_list_desktop_child_inner">
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
        <li className="navbar_list_desktop">
          <Link href="/">Galeri</Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuDesktop;
