import React from 'react';
import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Text,
  Title,
} from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import { Logo } from '../Logo';

export function Brand() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Logo colorScheme={colorScheme} />
          <Text sx={{ paddingLeft: 10, display: 'flex', alignItems: 'center' }}>
            Life
            <Text
              sx={(theme) => ({
                color: theme.colors.red[5],
              })}
            >
              Tracker
            </Text>
          </Text>
        </Box>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Box>
  );
}
