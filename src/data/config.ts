// src/data/config.ts
const isProduction = process.env.NODE_ENV !== 'development';

const config = {
  defaultTitle: 'Alex Arroyo',
  url: isProduction
    ? (process.env.NEXT_PUBLIC_PORTFOLIO_URL as string) ||
      'https://default-url.com'
    : 'http://alexarroyo-portfolio.netlify.app',
  defaultDescription: 'I’m Alex Arroyo and I’m a Full-Stack Software Engineer!',
  googleAnalyticsID: 'G-PE8QW0ZGTZ',
  NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL as string,
  twitter: '@smakosh',
};

export default config;
