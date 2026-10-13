import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});
const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' });

const description =
  'Shannon Yeow studied computer science at Princeton, with minors in environmental studies and art history. Selected projects in software, product, and design.';

export const metadata: Metadata = {
  title: 'Shannon Yeow',
  description,
  openGraph: { title: 'Shannon Yeow', description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
