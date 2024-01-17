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
import { Bubble } from 'react-chartjs-2';
import RvCanvas from './Canvas';

ChartJS.register(LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export type RvBubbleChartProps = {
	width?: number;
	height?: number;
	data: ChartData<'bubble'>;
	options?: ChartOptions<'bubble'>;
};

const RvBubbleChart: FC<RvBubbleChartProps> = ({ width, height, data, options }) => {
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
			<Bubble width={width} height={height} data={data} options={newOptions} />
		</RvCanvas>
	);
};

export default RvBubbleChart;
