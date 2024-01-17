'use client';

import type { FC, ReactNode } from 'react';
import { Box, Flex, type FlexProps } from '@chakra-ui/react';

export type RvSectionProps = FlexProps & {
	separator?: ReactNode;
};

const RvSection: FC<RvSectionProps> = ({ children, h, mt, bg, alignItems, justifyContent, separator }) => {
	return (
		<Flex
			as='section'
			mt={mt}
			position='relative'
			bg={bg}
			height={h || '60vh'}
			alignItems={alignItems || 'center'}
			justifyContent={justifyContent || 'space-around'}
		>
			<Box position='absolute' zIndex={1}>
				{children}
			</Box>
			{separator}
		</Flex>
	);
};

export default RvSection;
