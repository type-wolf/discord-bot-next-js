'use client';

import type { FC } from 'react';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, type ChartData, type ChartOptions } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import RvCanvas from './Canvas';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export type RvPieChartProps = {
	width?: number;
	height?: number;
	data: ChartData<'pie'>;
	options?: ChartOptions<'pie'>;
};

const RvPieChart: FC<RvPieChartProps> = ({ width, height, data, options }) => {
	const newOptions = {
		...options,
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<RvCanvas>
			<Pie width={width} height={height} options={newOptions} data={data} />
		</RvCanvas>
	);
};

export default RvPieChart;
