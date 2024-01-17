'use client';

import { Suspense, type FC } from 'react';
import { Button } from '@chakra-ui/react';
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

export type RvConnectWalletProps = {
	//
};
const RvConnectWallet: FC<RvConnectWalletProps> = () => {
	const { open: isOpen } = useWeb3ModalState();
	const { open } = useWeb3Modal();
	const { address } = useAccount();
	const label = address
		? `${address.substring(0, 4)}...${address.substring(address.length - 4, address.length)}`
		: 'ConnectWallet';
	return (
		<Button onClick={() => open()} isLoading={isOpen}>
			<Suspense>{label}</Suspense>
		</Button>
	);
};

export default RvConnectWallet;
