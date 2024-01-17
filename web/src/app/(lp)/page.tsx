import { headers } from 'next/headers';
import { analyzeAgent } from '../actions';
import { HStack, Heading, Text, VStack } from '@/components/ChakraProvider';
import { RvConnectWalletIcon, RvInput } from '@/components';

type Params = {
	[key: string]: string;
};

type SearchParams = { [key: string]: string | string[] | undefined };

export type PageProps<T = Params> = {
	params: T;
	searchParams: SearchParams;
};

export type RootPageProps = PageProps<{
	/* Type */
}>;

export default async function RootPage(props: RootPageProps) {
	const userAgent = headers().get('user-agent');
	const result = await analyzeAgent(userAgent);
	return (
		<VStack spacing={10}>
			<Heading variant='title' fontSize={50}>
				Hello World
			</Heading>
			<Heading variant='subTitle' fontSize={30}>
				Next.js x Discord.js With Typescript !!
			</Heading>
			<VStack w='500px' spacing={7}>
				<VStack w='100%' alignItems='start'>
					<Text fontSize={20}>FirstName</Text>
					<RvInput variant='primary.outline' />
				</VStack>
				<VStack w='100%' alignItems='start'>
					<Text fontSize={20}>SecondName</Text>
					<RvInput variant='primary.outline' />
				</VStack>
				<VStack w='100%' alignItems='start'>
					<Text fontSize={20}>Email</Text>
					<RvInput variant='primary.outline' />
				</VStack>
				<VStack w='100%' alignItems='start'>
					<Text fontSize={20}>Address</Text>
					<HStack w='110%'>
						<RvInput variant='primary.outline' />
						<RvConnectWalletIcon />
					</HStack>
				</VStack>
			</VStack>
		</VStack>
	);
}
