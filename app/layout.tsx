"use client";

import "@styles/globals.css";
import { Nunito } from "next/font/google";
import { useCallback, useState } from "react";
import { AdminStore as AdminContext } from "@app/utils/admin-store";
import { menuConstants } from "./utils/constants";

export const metadata = {
  title: "Litbangkes",
  description: "Kemenkes",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideActive, setSideActive] = useState(0);
  const onMenuClick = useCallback((id: number) => {
    setSideActive(id);
  }, []);
  const sideActiveData = menuConstants[sideActive];

  return (
    <AdminContext.Provider value={{ sideActive, onMenuClick, sideActiveData }}>
      <html lang="id" className={nunito.className}>
        <body>{children}</body>
      </html>
    </AdminContext.Provider>
  );
}
