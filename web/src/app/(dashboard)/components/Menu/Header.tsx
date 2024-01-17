import { DownloadIcon, Link } from '@/components/ChakraProvider';
import type { FC } from 'react';

export type RvMenuHeaderProps = {
	//
};

const RvMenuHeader: FC<RvMenuHeaderProps> = () => {
	return (
		<Link
			href='#/app'
			mb='4'
			display='flex'
			alignItems='center'
			justifyContent='center'
			py='2'
			color='blue'
			_hover={{ textDecoration: 'underline' }}
		>
			<DownloadIcon w='6' h='6' mr='4' />
		</Link>
	);
};

export default RvMenuHeader;
