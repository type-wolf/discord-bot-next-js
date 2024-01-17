import { headers } from 'next/headers';
import type { PageProps } from '@/app/(lp)/page';
import { analyzeAgent } from '../../actions';
import { Box, Text, Button, HStack } from '@/components/ChakraProvider';
import Sample1 from './components/Charts/Sample1';

type AppPageProps = PageProps;

export default async function AppPage(props: AppPageProps) {
	const userAgent = headers().get('user-agent');
	const result = await analyzeAgent(userAgent);
	return (
		<Box>
			<HStack mb={10} spacing={10}>
				<Button variant='primary.outline'>Button1</Button>
				<Button variant='secondary.outline'>Button2</Button>
				<Button variant='success.outline'>Button3</Button>
				<Button variant='warning.outline'>Button4</Button>
				<Button variant='danger.outline'>Button4</Button>
			</HStack>
		</Box>
	);
}
