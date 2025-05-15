'use client';

import {
  createTheme,
  localStorageColorSchemeManager,
  MantineProvider,
} from '@mantine/core';
import { ReactNode } from 'react';

import { mantineTheme } from '@/helpers/theme';

const theme = createTheme(mantineTheme);

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'mantine-color-scheme',
});

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme={colorSchemeManager.get('light')}
    >
      {children}
    </MantineProvider>
  );
}
