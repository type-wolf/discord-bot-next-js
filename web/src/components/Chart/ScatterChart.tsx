'use client';

import type { FC } from 'react';
import {
	Chart as ChartJS,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend,
	type ChartData,
	type ChartOptions,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import RvCanvas from './Canvas';

ChartJS.register(LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export type RvScatterChartProps = {
	width?: number;
	height?: number;
	data: ChartData<'scatter'>;
	options?: ChartOptions<'scatter'>;
};

const RvScatterChart: FC<RvScatterChartProps> = ({ width, height, data, options }) => {
	const newOptions = {
		...options,
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};
	return (
		<RvCanvas>
			<Scatter width={width} height={height} data={data} options={newOptions} />
		</RvCanvas>
	);
};

export default RvScatterChart;
