'use client';

import type { ReactNode } from 'react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, bsc } from 'wagmi/chains';
import { createWeb3Modal, EIP6963Connector } from '@web3modal/wagmi/react';
import { walletConnectProvider } from '@web3modal/wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;

const { chains, publicClient } = configureChains(
	[mainnet, polygon, bsc],
	[walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
	name: 'Web3Modal',
	description: 'Web3Modal Example',
	url: 'https://web3modal.com',
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: [
		new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
		new EIP6963Connector({ chains }),
		new InjectedConnector({ chains, options: { shimDisconnect: true } }),
		new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } }),
	],
	publicClient,
});

createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'dark' });

export default function WalletConnectPrividers({ children }: { children: ReactNode }) {
	return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
