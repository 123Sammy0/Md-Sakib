import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MD Sakib — Creative Operating System',
  description: 'Luxury cinematic portfolio platform for MD Sakib.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
