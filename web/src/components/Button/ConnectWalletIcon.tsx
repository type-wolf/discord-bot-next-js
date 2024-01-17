'use client';

import { Suspense, type FC } from 'react';
import { IconButton, Image, useColorMode } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

export type RvConnectWalletIconProps = {
	//
};
const RvConnectWalletIcon: FC<RvConnectWalletIconProps> = () => {
	const { open: isOpen } = useWeb3ModalState();
	const { open } = useWeb3Modal();
	const { colorMode } = useColorMode();
	const { address } = useAccount();
	const src = `/icon/walletconnect-logo-${colorMode}.svg`;
	const icon = address ? (
		<CheckIcon color='rGreen.500.light' boxSize='24px' />
	) : (
		<Image alt='walletconnect' boxSize='24px' src={src} />
	);
	return (
		<IconButton
			aria-label='wallet-connect'
			icon={<Suspense>{icon}</Suspense>}
			variant='primary.outline'
			borderWidth='2px'
			onClick={() => open()}
			isLoading={isOpen}
			isDisabled={address ? true : false}
		/>
	);
};

export default RvConnectWalletIcon;
