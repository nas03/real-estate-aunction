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
		<div className={cn(inter.className, 'box-b max-w-[100vw] text-black')}>
			<NavBar />
			{children}
		</div>
	);
}
