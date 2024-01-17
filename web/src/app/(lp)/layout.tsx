import { Box, Stack } from '@/components/ChakraProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import type { LayoutProps } from '../layout';

export type RootLayoutProps = LayoutProps & {};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<Stack spacing={5}>
			<Header />
			{children}
			<Footer />
		</Stack>
	);
}
