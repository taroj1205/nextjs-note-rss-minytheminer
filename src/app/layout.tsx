import { ScrollTop } from '@/components/ScrollTop'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import Head from 'next/head'
import { magazine } from '@/components/Magazines'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "∑inyThe∑iner - JokagiDesu",
	description: "∑inyThe∑iner - JokagiDesu - note RSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en" className="dark">
			<Head>
				{Object.values(magazine).map((story, index) => (
					<link key={index} rel="preload" href={story.thumbnail} as="image" />
				))}
			</Head>
			<body className={inter.className}>
				<Providers>
					{children}
          <ScrollTop />
          <Analytics />
				</Providers>
			</body>
		</html>
	);
}
