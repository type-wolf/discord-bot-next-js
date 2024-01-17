import type { FC } from 'react';
import { HStack, Text, Button } from '@/components/ChakraProvider';

type HeaderType = {
	isMobile?: boolean;
};

const Header: FC<HeaderType> = ({ isMobile }) => {
	return (
		<HStack p={{ sm: 5, md: 10, lg: '50px', xl: '50px' }} bg='transparent' justifyContent='space-between'>
			{isMobile ? <MobileHeaderContents /> : <DefaultHeaderContents />}
		</HStack>
	);
};

const DefaultHeaderContents: FC = () => {
	return (
		<HStack spacing={10}>
			<Text>Header1</Text>
			<Text>Header2</Text>
			<Text>Header3</Text>
			<Text>Header4</Text>
			<Text>Header5</Text>
			<Button variant='primary.outline'>Primary</Button>
			<Button variant='secondary.outline'>Secondary</Button>
			<Button variant='success.outline'>Success</Button>
			<Button variant='warning.outline'>Warning</Button>
			<Button variant='danger.outline'>Danger</Button>
		</HStack>
	);
};

const MobileHeaderContents: FC = () => {
	return <></>;
};

export default Header;
