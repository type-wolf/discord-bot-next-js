export const ORIGIN_URL = process.env.NEXT_PUBLIC_ORIGIN || 'http://localhost:3000/';

export const ORIGIN_API_ENDPOINT = {
	relative: `/api/v${process.env.NEXT_PUBLIC_API_VERSION}` as const,
	full: `${ORIGIN_URL}/api/v${process.env.NEXT_PUBLIC_API_VERSION}` as const,
};
export const JWT_ENDPOINT = {
	relative: `/api/jwt` as const,
	full: `${ORIGIN_URL}/api/jwt` as const,
} as const;

export const DISCORD_ENDPOINT = `https://discordapp.com` as const;
export const DISCORD_API_ENDPOINT = `${DISCORD_ENDPOINT}/api/v${process.env.DISCORD_API_VERSION}` as const;
export const DISCORD_API_GUILD_ENDPOINT = `${DISCORD_API_ENDPOINT}/guilds/${process.env.GUILD_ID}` as const;

const ENDPOINTS = {
	ORIGIN_URL,
	ORIGIN_API_ENDPOINT,
	JWT_ENDPOINT,
	DISCORD_ENDPOINT,
	DISCORD_API_ENDPOINT,
	DISCORD_API_GUILD_ENDPOINT,
};

export default ENDPOINTS;
