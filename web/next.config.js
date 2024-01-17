/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	compiler: {
		styledComponents: {
			displayName: false,
			ssr: false,
		},
	},
	transpilePackages: ['three'],
	webpack: (config) => {
		config.externals.push('pino-pretty', 'lokijs', 'encoding');
		return config;
	},
};

const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM();

module.exports = nextConfig;
