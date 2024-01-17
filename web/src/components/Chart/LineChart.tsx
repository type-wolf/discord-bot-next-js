'use client';

import type { FC } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend,
	type ChartData,
	type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import RvCanvas from './Canvas';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export type RvLineChartProps = {
	width?: number;
	height?: number;
	data: ChartData<'line'>;
	options?: ChartOptions<'line'>;
};

const RvLineChart: FC<RvLineChartProps> = ({ width, height, data, options }) => {
	const newOptions = {
		...options,
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<RvCanvas>
			<Line width={width} height={height} data={data} options={newOptions} />
		</RvCanvas>
	);
};

export default RvLineChart;
