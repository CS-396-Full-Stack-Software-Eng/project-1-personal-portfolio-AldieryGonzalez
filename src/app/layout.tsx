import Navbar from '@/components/navbar';
import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
// const poppins = Poppins({
// 	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// 	subsets: ['latin'],
// });

export const metadata: Metadata = {
	title: 'Aldiery - Web Developer',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<div className='flex min-h-svh flex-col bg-background text-foreground'>
						<Navbar />
						<main className='relative flex min-h-full grow text-foreground'>
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
