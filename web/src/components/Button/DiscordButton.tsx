'use client';

import type { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import DiscordIcon from '../Icon/DiscordIcon';

const DiscordButton: FC = () => {
	const _hover = {
		bg: 'gray.800',
	};
	return (
		<IconButton aria-label='discord icon' fontSize={24} variant='solid' bg='transparent' _hover={_hover}>
			<DiscordIcon />
		</IconButton>
	);
};

export default DiscordButton;
