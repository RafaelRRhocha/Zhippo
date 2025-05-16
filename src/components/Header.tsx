'use client';

import {
  ActionIcon,
  Anchor,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  if (!isMounted) return null;

  return (
    isMounted && (
      <header className="flex w-full items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-x-2 py-2">
          <Image src="/logo.png" alt="Zhippo" width={70} height={70} />
          <h1 className="text-xl font-bold">Zhippo</h1>
        </div>

        <div className="flex items-center gap-x-5">
          <Anchor
            href="/"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            className="text-sm font-medium"
          >
            Calculadora de Frete
          </Anchor>

          <Anchor
            href="/tracking"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            className="text-sm font-medium"
          >
            Rastreamento
          </Anchor>

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
        </div>
      </header>
    )
  );
};

export default Header;
