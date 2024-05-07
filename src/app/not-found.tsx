import { NextPage } from 'next';
import Head from 'next/head';

// export const metadata = {
//   viewport: {
//     themeColor: '#6b63ff',
//   },
// };

const notFound: NextPage = () => (
  <>
    <Head>
      <title>404: Not Found</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6b63ff" />
    </Head>

    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default notFound;
