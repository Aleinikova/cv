import type { Metadata } from 'next';
import { Merriweather, Orbitron } from 'next/font/google';
import { SkeletonTheme } from 'react-loading-skeleton';

import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-orbitron',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Waleria Mogilewicz',
  description: 'My personal site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${merriweather.variable} ${orbitron.variable} w-full overflow-hidden`}
    >
      <body className='flexflex-col font-primary'>
        <SkeletonTheme baseColor='#fdfeff' highlightColor='#f1f2f3'>
          {children}
        </SkeletonTheme>
      </body>
    </html>
  );
}
