'use client';

import type { FC } from 'react';
import {
	Chart,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	type ChartData,
	type ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import RvCanvas from './Canvas';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export type RvBarChartProps = {
	width?: number;
	height?: number;
	chartStyle?: 'vertical' | 'horizontal';
	stack?: {
		x?: boolean;
		y?: boolean;
	};
	data: ChartData<'bar'>;
	options?: ChartOptions<'bar'>;
};

const RvBarChart: FC<RvBarChartProps> = ({ width, height, chartStyle = 'vertical', data, stack, options }) => {
	const newOptions = {
		responsive: true,
		maintainAspectRatio: false,
		indexAxis: chartStyle === 'vertical' ? ('x' as const) : ('y' as const),
		scales: {
			x: {
				stacked: stack?.x,
			},
			y: {
				stacked: stack?.y,
			},
		},
		...options,
	};
	return (
		<RvCanvas>
			<Bar width={width} height={height} options={newOptions} data={data} />
		</RvCanvas>
	);
};

export default RvBarChart;
