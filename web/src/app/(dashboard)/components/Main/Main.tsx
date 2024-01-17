import type { FC, ReactNode } from 'react';
import { Box, Flex } from '@/components/ChakraProvider';

export type RvMainProps = {
	children: ReactNode;
};

const RvMain: FC<RvMainProps> = ({ children }) => {
	return (
		<Flex flex='1' direction='column' overflowY='auto' /* onScroll={handleScroll} */>
			<Box
				width='full'
				flexShrink='0'
				flexGrow='1'
				px='4'
				pb='4'
				// md={{ px: '6' }}
				// xl={{ mx: 'auto', maxWidth: '1360px', px: '10' }}
			>
				{children}
			</Box>
		</Flex>
	);
};

export default RvMain;
