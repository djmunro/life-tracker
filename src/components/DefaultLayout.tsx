import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Life Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  );
};