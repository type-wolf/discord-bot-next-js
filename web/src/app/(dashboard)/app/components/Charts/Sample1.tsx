import type { FC } from 'react';
import { RvBarChart, type RvBarChartProps } from '@/components';
import { rBlue, rRed, rGreen, rPurple, rYellow } from '@/components/theme/colors';

const data: RvBarChartProps['data'] = {
	labels: ['Sample1', 'Sample2', 'Sample3', 'Sample4'],
	datasets: [
		{
			data: [1, 2, 3, 4],
			label: 'Sample1',
			borderColor: rBlue[700].dark,
		},
		// {
		// 	data: [1, 2, 3, 4],
		// 	label: 'Sample2',
		// 	borderColor: rRed[700].dark,
		// },
		// {
		// 	data: [1, 2, 3, 4],
		// 	label: 'Sample3',
		// 	borderColor: rGreen[700].dark,
		// },
		// {
		// 	data: [1, 2, 3, 4],
		// 	label: 'Sample4',
		// 	borderColor: rPurple[700].dark,
		// },
	],
};

const Sample1: FC = ({}) => {
	return <RvBarChart data={data} height={500} />;
};

export default Sample1;
