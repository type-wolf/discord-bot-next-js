import { ERRORS, type ErrorCode } from '@/constants';

export type AppErrorOptions = {
	/**
	 * @description Custom message (if not set, the message in the default code will be used)
	 **/
	message?: string;
	language?: 'en' | 'ja';
};

/**
 * ------------------------------------------
 * @name - AppError
 * ------------------------------------------
 * @description -
 * ------------------------------------------
 * @param - code: ErrorCode
 * ------------------------------------------
 * @param - options?: Arbitrary arguments that this event receives
 * ------------------------------------------
 **/
export default class AppError extends Error {
	public readonly code: ErrorCode;
	public readonly options?: AppErrorOptions;
	constructor(code: ErrorCode = 'UNKNOWN', options?: AppErrorOptions) {
		const message = options?.message || ERRORS[code].message[options?.language || 'en'];
		super(message);
		this.name = this.constructor.name;
		this.code = code;
		this.options = {
			...options,
		};

		// Maintain stack trace in V8 engine (Node.js)
		if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
	}
}
