import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sha256HashSync } from '@share/utils';

export async function GET(request: NextRequest) {
	try {
		// const apiKey = request.headers.get('X-Api-Key');
		// const permission = request.headers.get('permission');
		// const newApiKey = sha256HashSync(apiKey);
		//
		return new NextResponse(null, { status: 204 });
	} catch (e: unknown) {
		//
	}
}
