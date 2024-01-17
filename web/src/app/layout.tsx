import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import Favicon from '../../public/favicon.jpeg';
import { Inter } from 'next/font/google';
import ChakraProviders, { ColorModeScript } from '@/components/ChakraProvider';
import ReduxProviders from '@/components/ReduxProvider';
import NextAuthProviders from '@/components/NextAuthProvider';
import SWRProvider from '@/components/SwrProvider';
import WalletConnectPrividers from '@/components/WalletConnectProvider';
import theme from '@/components/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Title',
	description: 'Description',
	icons: [
		{ rel: 'icon', type: 'image/jpeg', sizes: '64x64', url: Favicon.src },
		{ rel: 'apple-touch-icon', type: 'image/jpeg', sizes: '64x64', url: Favicon.src },
	],
};

export type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const cookie = cookies();
	const ssrColorMode = cookie.get('chakra-ui-color-mode')?.value;
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NextAuthProviders>
					<ReduxProviders>
						<ChakraProviders cookie={ssrColorMode && cookie.toString()}>
							<ColorModeScript initialColorMode={ssrColorMode || theme.config.initialColorMode} />
							<WalletConnectPrividers>
								<SWRProvider>{children}</SWRProvider>
							</WalletConnectPrividers>
						</ChakraProviders>
					</ReduxProviders>
				</NextAuthProviders>
			</body>
		</html>
	);
}
