import { Flex } from '@/components/ChakraProvider';
import { RvScrollToTop } from '@/components';
import { RvHeader, RvMenu, RvMain, RvFooter } from './components';
import type { LayoutProps } from '../layout';

export type DashboardLayoutProps = LayoutProps & {};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<Flex height='100vh' direction={{ base: 'column', md: 'row' }}>
			<RvMenu />
			<RvMain>
				<RvHeader />
				{children}
				<RvScrollToTop />
				<RvFooter />
			</RvMain>
		</Flex>
	);
}
