'use client';

import type { FC } from 'react';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, type ChartData, type ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import RvCanvas from './Canvas';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export type RvDoughnutChartProps = {
	width?: number;
	height?: number;
	data: ChartData<'doughnut'>;
	options?: ChartOptions<'doughnut'>;
};

const RvDoughnutChart: FC<RvDoughnutChartProps> = ({ width, height, data, options }) => {
	const newOptions = {
		...options,
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<RvCanvas>
			<Doughnut width={width} height={height} options={newOptions} data={data} />
		</RvCanvas>
	);
};

export default RvDoughnutChart;
