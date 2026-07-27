import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata = {
  title: 'Phelipe Mascarenhas | PH Masc — Soluções em Dados & IA',
  description: 'Consultor de IA e Cientista de Dados com 13+ anos de experiência transformando dados em decisões. Agentes autônomos com n8n, Azure OpenAI, Redis e Python.',
  keywords: ['Consultor de IA', 'Cientista de Dados', 'Agentes de IA', 'n8n', 'Azure OpenAI', 'Python', 'Redis', 'Qualicorp', 'PH Masc'],
  authors: [{ name: 'Phelipe Mascarenhas' }],
  openGraph: {
    title: 'Phelipe Mascarenhas | PH Masc — Soluções em Dados & IA',
    description: '13 anos de dados. Agora, agentes de IA que agem.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-ph-bg text-ph-text antialiased min-h-screen flex flex-col selection:bg-ph-blue/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
