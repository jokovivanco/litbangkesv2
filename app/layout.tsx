import "@styles/globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Litbangkes",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}
