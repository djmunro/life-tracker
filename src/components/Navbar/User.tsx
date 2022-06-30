import React, { forwardRef } from 'react';
import { ChevronRight, Logout } from 'tabler-icons-react';
import { UnstyledButton, Group, Avatar, Text, Menu } from '@mantine/core';
import { signOut, useSession } from 'next-auth/react';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group sx={{ width: '100%' }}>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <ChevronRight size={16} />}
      </Group>
    </UnstyledButton>
  ),
);
UserButton.displayName = 'UserButton';

export function User() {
  const { data: session } = useSession();

  return (
    <Menu
      withArrow
      position="right"
      placement="end"
      control={
        <UserButton
          image={session?.user?.image || 'undefined'}
          name={session?.user?.name || 'undefined'}
          email={session?.user?.email || 'undefined'}
        />
      }
    >
      <Menu.Item icon={<Logout size={14} />} onClick={() => signOut()}>
        Logout
      </Menu.Item>
    </Menu>
  );
}
