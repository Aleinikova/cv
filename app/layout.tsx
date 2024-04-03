import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SkeletonTheme } from 'react-loading-skeleton';

import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

const orbitron = localFont({
  src: [
    {
      path: '../public/fonts/Orbitron-Regular-subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Orbitron-Medium-subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Orbitron-SemiBold-subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Orbitron-Bold-subset.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-orbitron',
});

const merriweather = localFont({
  src: [
    {
      path: '../public/fonts/Merriweather-Light-subset.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Merriweather-Regular-subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Merriweather-Bold-subset.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-merriweather',
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
