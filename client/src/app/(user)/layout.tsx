import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'] });
import { NavBar } from '@/components';
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className={cn(inter.className, ' max-w-full text-black')}>
			<NavBar />
			{children}
		</main>
	);
}
