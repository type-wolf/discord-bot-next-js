import type { FC } from 'react';
import { Flex } from '@/components/ChakraProvider';
import RvMenuHeader from './Header';
import RvMenuItems from './MenuItems';

export type RvMenuProps = {
	//
};
const RvMenu: FC<RvMenuProps> = () => {
	const w = { xl: '56' };
	const display = { base: 'none', md: 'flex' };
	return (
		<Flex w={w} display={display} flexDirection='column' alignItems='center' bg='cards' pt='7'>
			<RvMenuHeader />
			<RvMenuItems />
		</Flex>
	);
};

export default RvMenu;
