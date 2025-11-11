// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // <-- 1. Importamos 'Inter' en lugar de 'Geist'
import './globals.css';

// 2. Configuramos la fuente 'Inter'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AuxiAI - La IA que te cuida',
  description: 'Asistencia de primeros auxilios impulsada por IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* 3. Aplicamos la fuente 'Inter' al body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}