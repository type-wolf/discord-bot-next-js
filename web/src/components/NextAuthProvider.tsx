'use client';

import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

export default function NextAuthProviders({ children }: { children: ReactNode }) {
	return <SessionProvider>{children}</SessionProvider>;
}

export * from 'next-auth/react';
