import type { FC } from 'react';
import { Flex, Box, Heading, Button, Text } from '@/components/ChakraProvider';
import { RvConnectWallet } from '@/components';

export type RvHeaderProps = {
	//
};

const RvHeader: FC<RvHeaderProps> = () => {
	return (
		<Flex pb={10} pt={8} justify={{ md: 'between' }} align='center'>
			<Flex flex='1' align='center'>
				<Heading as='p' fontSize='xl' display='flex' alignItems='center'>
					Dashboard
				</Heading>
			</Flex>
			<Box display={{ base: 'none', md: 'flex' }} h='12' alignItems='center' pl='6'>
				<RvConnectWallet />
			</Box>
		</Flex>
	);
};

export default RvHeader;
