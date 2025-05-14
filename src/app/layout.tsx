import '@mantine/core/styles.css';
import '../styles/globals.css';

import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { Sora } from 'next/font/google';
import React from 'react';

import Header from '@/components/Header';
import { mantineTheme } from '@/helpers/theme';

// setup font
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Zhippo',
  description:
    'Zhippo é uma calculadora de frete rápida e simples para vendedores independentes. Compare prazos e valores de envio em segundos, e compartilhe com seus clientes direto pelo WhatsApp.',
};

const theme = createTheme(mantineTheme);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Zhippo</title>
        <meta
          name="description"
          content="Zhippo é uma calculadora de frete rápida e simples para vendedores independentes. Compare prazos e valores de envio em segundos, e compartilhe com seus clientes direto pelo WhatsApp."
        />
        <meta
          name="keywords"
          content="frete, calculadora de frete, simular frete, cotação de frete, vendedores independentes, envio de pacotes, correios, transportadoras, zhippo, frete online"
        />
        <meta name="author" content="Rafael Rocha" />

        <meta property="og:title" content="Zhippo" />
        <meta
          property="og:description"
          content="Zhippo é uma calculadora de frete rápida e simples para vendedores independentes. Compare prazos e valores de envio em segundos, e compartilhe com seus clientes direto pelo WhatsApp."
        />

        <ColorSchemeScript defaultColorScheme="light" />
      </head>

      <body
        suppressHydrationWarning
        className={`overflow-x-hidden overflow-y-scroll md:overflow-hidden ${sora.variable} font-sora`}
      >
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Header />

          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
