import type { FC, ReactNode } from 'react';
import { Link, Text } from '@/components/ChakraProvider';

export type RvMenuItemProps = {
	icon: ReactNode;
	label: string;
	href: string;
};
const RvMenuItem: FC<RvMenuItemProps> = ({ icon, label, href }) => (
	<Link
		href={href}
		display='flex'
		alignItems='center'
		justifyContent='center'
		px='6'
		py='4'
		w='full'
		_hover={{ bg: 'lightGrey' }}
		_active={{ bg: 'lightGrey' }}
	>
		{icon}
		<Text display={{ base: 'none', xl: 'block' }}>{label}</Text>
	</Link>
);

export default RvMenuItem;
