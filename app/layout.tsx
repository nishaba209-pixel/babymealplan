import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'BabyBites — Little meals, happy days', description: 'A gentle Indian meal planner for your little one.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
