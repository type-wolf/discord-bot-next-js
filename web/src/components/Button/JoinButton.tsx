import type { FC } from 'react';
import { Button, type ButtonProps } from '@/components/ChakraProvider';
import DiscordIcon from '@/components/Icon/DiscordIcon';

type JoinButtonProps = ButtonProps & {};

const JoinButton: FC<JoinButtonProps> = ({ variant = 'lp', size = { sm: 'sm', md: 'md', lg: 'md', xl: 'md' } }) => {
	const rightIcon = <DiscordIcon boxSize={18} />;
	return (
		<Button variant={variant} size={size} rightIcon={rightIcon}>
			今すぐ参加
		</Button>
	);
};

export default JoinButton;
