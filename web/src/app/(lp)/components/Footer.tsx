import type { FC } from 'react';
import { HStack, Text, Button } from '@/components/ChakraProvider';

type FooterProps = {
	isMobile?: boolean;
};

const Footer: FC<FooterProps> = ({ isMobile }) => {
	return (
		<HStack p={{ sm: 5, md: 10, lg: '50px', xl: '50px' }} bg='transparent' justifyContent='space-between'>
			{isMobile ? <MobileFooterContents /> : <DefaultFooterContents />}
		</HStack>
	);
};

const DefaultFooterContents: FC = () => {
	return (
		<HStack spacing={10}>
			<Button variant='secondary.outline'>Secondary</Button>
			<Button variant='success.outline'>Success</Button>
			<Button variant='warning.outline'>Warning</Button>
			<Button variant='danger.outline'>Danger</Button>
		</HStack>
	);
};

const MobileFooterContents: FC = () => {
	return <></>;
};

export default Footer;
