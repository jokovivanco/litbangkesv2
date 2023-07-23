import '@styles/globals.css';
import { Nunito } from 'next/font/google';

import Nav from '@/components/Nav';

export const metadata = {
  title: 'Litbangkes',
  description: 'Kemenkes',
};

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={nunito.className}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
