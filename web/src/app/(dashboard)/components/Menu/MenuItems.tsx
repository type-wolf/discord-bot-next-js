import type { FC } from 'react';
import { Box, DownloadIcon, ChatIcon, HamburgerIcon } from '@/components/ChakraProvider';
import RvMenuItem from './MenuItem';

export type RvMenuItemsProps = {
	//
};
const RvMenuItems: FC<RvMenuItemsProps> = () => {
	return (
		<Box flex='1' overflowY='auto' px='3' py='6' w={{ xl: 'full' }}>
			<RvMenuItem icon={<DownloadIcon w='6' h='6' mr='4' />} label='Dashboard' href='#/dashboard' />
			<RvMenuItem icon={<ChatIcon w='6' h='6' mr='4' />} label='Swap' href='#/swap' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
			<RvMenuItem icon={<HamburgerIcon w='6' h='6' mr='4' />} label='History' href='#/history' />
		</Box>
	);
};

export default RvMenuItems;
