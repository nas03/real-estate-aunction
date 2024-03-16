import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Real Estate Auction',
	description: 'Real estate auction website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className}
					flex w-full max-w-[100vw] flex-col scroll-smooth`}>
				{children}
			</body>
		</html>
	);
}
