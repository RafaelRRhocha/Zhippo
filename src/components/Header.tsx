'use client';

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import Image from 'next/image';

const Header = () => {
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="flex w-full items-center justify-between px-4">
      <div className="flex items-center gap-x-2 py-2">
        <Image src="/logo.png" alt="Zhippo" width={70} height={70} />
        <h1 className="text-xl font-bold">Zhippo</h1>
      </div>

      <ActionIcon
        onClick={toggleColorScheme}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === 'light' ? (
          <IconMoon className="size-6" />
        ) : (
          <IconSun className="size-6" />
        )}
      </ActionIcon>
    </header>
  );
};

export default Header;
