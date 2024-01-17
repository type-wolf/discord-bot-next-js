import { createHash } from 'crypto';
import { Readable } from 'stream';

/**
 * ------------------------------------------
 * @name sha256HashSync
 * ------------------------------------------
 * @description
 * Synchronously generates a SHA-256 hash of the provided string data. This function creates a hash
 * using Node.js's crypto library and returns the hashed value in hexadecimal format. It's suitable for
 * situations where synchronous operations are acceptable.
 * ------------------------------------------
 * @param data - A string input to be hashed.
 * ------------------------------------------
 * @returns
 * A string representing the hexadecimal value of the SHA-256 hash of the input data.
 * ------------------------------------------
 **/
function sha256HashSync(data: string) {
	const hash = createHash('sha256');
	const newHash = hash.update(data).digest('hex');
	return newHash;
}

/**
 * ------------------------------------------
 * @name sha256HashAsync
 * ------------------------------------------
 * @description
 * Asynchronously generates a SHA-256 hash of the provided string data. This function utilizes Node.js's
 * crypto and stream libraries to process the data in a non-blocking manner. It's particularly useful in
 * scenarios where performance and non-blocking operations are critical.
 * ------------------------------------------
 * @param data - A string input to be hashed.
 * ------------------------------------------
 * @returns
 * A Promise that resolves to a string representing the hexadecimal value of the SHA-256 hash of the input data.
 * ------------------------------------------
 **/
export async function sha256HashAsync(data: string): Promise<string> {
	return await new Promise((resolve, reject) => {
		const hash = createHash('sha256');
		hash.once('finish', () => {
			const hashedData = hash.read().toString('hex');
			resolve(hashedData);
		});
		const newData = Readable.from(data);
		newData.on('error', (err) => reject(err));
		newData.pipe(hash);
	});
}

export default sha256HashSync;
