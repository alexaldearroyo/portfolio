// src/app/layout.tsx
import '../components/ui/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import config from '../data/config';

const { url, defaultDescription, defaultTitle, twitter } = config;

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteName: defaultTitle,
    images: [
      {
        url: `${url}/assets/thumbnail/thumbnail.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon/favicon-32x32.png',
    shortcut: '/assets/favicon/favicon.ico',
    apple: '/assets/favicon/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    creator: twitter,
    title: defaultTitle,
    description: defaultDescription,
    site: url,
  },
  manifest: '/assets/favicon/site.webmanifest',
  metadataBase: new URL(url),
};

// export const viewport: Viewport = {
//   themeColor: '6b63ff',
// };

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={`${roboto.variable} font-sans scroll-smooth`}>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6b63ff" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
