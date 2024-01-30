import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
});

import './globals.css';

export const metadata: Metadata = {
	title: 'Spendwise',
	description: 'Spendwise',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={quicksand.className}>{children}</body>
		</html>
	);
}
