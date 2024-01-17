'use server';

import { UAParser } from 'ua-parser-js';

const MODEL = 'model';
const NAME = 'name';
const TYPE = 'type';
const VENDOR = 'vendor';
const VERSION = 'version';
const MOBILE = 'mobile';
const TABLET = 'tablet';

const Bots = Object.freeze({
	browser: [
		// Googlebot / BingBot / MSNBot / FacebookBot
		[/((?:google|bing|msn|facebook)bot(?:[\-imagevdo]{0,6})|bingpreview)\/([\w\.]+)/i],
		[NAME, VERSION, [TYPE, 'bot']],

		// GPTBot - https://platform.openai.com/docs/gptbot
		[/(gptbot)\/([\w\.]+)/i],
		[NAME, VERSION, [TYPE, 'bot']],

		// Slackbot - https://api.slack.com/robots
		[/(slack(?:bot)?(?:-imgproxy|-linkexpanding)?) ([\w\.]+)/i],
		[NAME, VERSION, [TYPE, 'bot']],
	],
});

const CLIs = Object.freeze({
	browser: [[/(wget|curl|lynx)\/([\w\.]+)/i], [NAME, VERSION, [TYPE, 'cli']]],
});

const ExtraDevices = Object.freeze({
	device: [
		[
			/(nook)[\w ]+build\/(\w+)/i, // Nook
			/(dell) (strea[kpr\d ]*[\dko])/i, // Dell Streak
			/(le[- ]+pan)[- ]+(\w{1,9}) bui/i, // Le Pan Tablets
			/(trinity)[- ]*(t\d{3}) bui/i, // Trinity Tablets
			/(gigaset)[- ]+(q\w{1,9}) bui/i, // Gigaset Tablets
			/(vodafone) ([\w ]+)(?:\)| bui)/i, // Vodafone
		],
		[VENDOR, MODEL, [TYPE, TABLET]],
		[
			/(u304aa)/i, // AT&T
		],
		[MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]],
		[
			/\bsie-(\w*)/i, // Siemens
		],
		[MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]],
		[
			/\b(rct\w+) b/i, // RCA Tablets
		],
		[MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]],
		[
			/\b(venue[\d ]{2,7}) b/i, // Dell Venue Tablets
		],
		[MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]],
		[
			/\b(q(?:mv|ta)\w+) b/i, // Verizon Tablet
		],
		[MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]],
		[
			/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i, // Barnes & Noble Tablet
		],
		[MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]],
		[/\b(tm\d{3}\w+) b/i],
		[MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]],
		[
			/\b(k88) b/i, // ZTE K Series Tablet
		],
		[MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]],
		[
			/\b(nx\d{3}j) b/i, // ZTE Nubia
		],
		[MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]],
		[
			/\b(gen\d{3}) b.+49h/i, // Swiss GEN Mobile
		],
		[MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]],
		[
			/\b(zur\d{3}) b/i, // Swiss ZUR Tablet
		],
		[MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]],
		[
			/\b((zeki)?tb.*\b) b/i, // Zeki Tablets
		],
		[MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]],
		[
			/\b([yr]\d{2}) b/i,
			/\b(?:dragon[- ]+touch |dt)(\w{5}) b/i, // Dragon Touch Tablet
		],
		[MODEL, [VENDOR, 'Dragon Touch'], [TYPE, TABLET]],
		[
			/\b(ns-?\w{0,9}) b/i, // Insignia Tablets
		],
		[MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]],
		[
			/\b((nxa|next)-?\w{0,9}) b/i, // NextBook Tablets
		],
		[MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]],
		[
			/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i, // Voice Xtreme Phones
		],
		[[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]],
		[
			/\b(lvtel\-)?(v1[12]) b/i, // LvTel Phones
		],
		[[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]],
		[
			/\b(ph-1) /i, // Essential PH-1
		],
		[MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]],
		[
			/\b(v(100md|700na|7011|917g).*\b) b/i, // Envizen Tablets
		],
		[MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]],
		[
			/\b(trio[-\w\. ]+) b/i, // MachSpeed Tablets
		],
		[MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]],
		[
			/\btu_(1491) b/i, // Rotor Tablets
		],
		[MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]],
	],
});

const Modules = Object.freeze({
	browser: [
		// Axios/jsdom/Scrapy
		[/\b(axios|jsdom|scrapy)\/([\w\.]+)/i],
		[NAME, VERSION, [TYPE, 'module']],
	],
});

export default async function analyzeAgent(userAgent: string | null) {
	const parser = new UAParser(userAgent ?? undefined, {
		browser: [...Bots.browser, ...CLIs.browser, ...Modules.browser, ...ExtraDevices.device],
	});
	const ua = parser.getResult();
	const isPC =
		!ua.device.is('Mobile') &&
		!ua.device.is('tablet') &&
		!ua.browser.is('cli') &&
		!ua.browser.is('module') &&
		!ua.browser.is('bot');
	return {
		browser: ua.browser,
		engine: ua.engine,
		os: ua.os,
		device: ua.device,
		cpu: ua.cpu,
		isPC,
		isMacOS: () => isPC && ua.os.is('MacOS'),
		isWindows: () => ua.os.is('Windows'),
		isMobile: () => ua.device.is('Mobile'),
		isIPhone: () => ua.os.is('iOS'),
		isAndroid: () => ua.os.is('Android'),
		isTablet: () => ua.device.is('tablet'),
		isIPad: () => ua.device.is('iPad'),
		isCli: () => ua.browser.is('cli'),
		isCurl: () => ua.browser.is('Curl'),
		isModule: () => ua.browser.is('module'),
		isAxios: () => ua.browser.is('Axios'),
		isJsDom: () => ua.browser.is('jsdom'),
		isScrapy: () => ua.browser.is('Scrapy'),
		isBot: () => ua.browser.is('bot'),
	};
}
