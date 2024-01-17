'use client';

import { useMemo, type ReactNode } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import theme from './theme';

type ChakraProviders = {
	cookie?: string;
	children: ReactNode;
};

export default function ChakraProviders({ cookie, children }: ChakraProviders) {
	const colorModeManager = useMemo(() => {
		if (cookie) {
			return cookieStorageManagerSSR(cookie);
		}
		if (typeof window !== 'undefined') {
			const localColorMode = localStorage.getItem('chakra-ui-color-mode');
			return localColorMode ? cookieStorageManagerSSR(`chakra-ui-color-mode=${localColorMode}`) : localStorageManager;
		}
		return localStorageManager;
	}, [cookie]);
	return (
		<CacheProvider>
			<ChakraProvider theme={theme} colorModeManager={colorModeManager}>
				{children}
			</ChakraProvider>
		</CacheProvider>
	);
}

export * from '@chakra-ui/react';
export * from '@chakra-ui/icons';
