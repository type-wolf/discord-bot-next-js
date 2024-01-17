import type { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const nextAuthOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		DiscordProvider({
			clientId: process.env.CLIENT_ID || '',
			clientSecret: process.env.CLIENT_SECRET || '',
			authorization: {
				params: { scope: 'identify email guilds' },
			},
		}),
	],
	pages: {
		signIn: '/sigin',
		error: '/sigin',
	},
	callbacks: {
		session: async ({ session, token }) => {
			if (session.user) {
				session.user.id = token.id;
			}
			return session;
		},
		jwt: async ({ token, account }) => {
			if (account) {
				token.id = account.providerAccountId;
			}
			return token;
		},
		signIn: async ({ account }) => {
			if (account == null || account.access_token == null) return false;
			return true;
		},
		redirect: async ({ baseUrl }) => {
			return `${baseUrl}/sigin/`;
		},
	},
};

export default nextAuthOptions;
