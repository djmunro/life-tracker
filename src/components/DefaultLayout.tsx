import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppShell, Navbar } from '@mantine/core';
import { Brand } from './Navbar/Brand';
import { MainLinks } from './Navbar/MainLinks';
import { User } from './Navbar/User';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Life Tracker</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <AppShell
        padding="md"
        navbar={
          <Navbar p="xs" width={{ base: 340 }}>
            <Navbar.Section mt="xs">
              <Brand />
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
              <User />
            </Navbar.Section>
          </Navbar>
        }
      >
        {children}
      </AppShell>

      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      )}
    </>
  );
};
