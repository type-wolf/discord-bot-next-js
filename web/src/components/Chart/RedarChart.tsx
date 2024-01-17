'use client';

import type { FC } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	RadialLinearScale,
	LineElement,
	Filler,
	PointElement,
	Title,
	Tooltip,
	Legend,
	type ChartData,
	type ChartOptions,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import RvCanvas from './Canvas';

ChartJS.register(CategoryScale, RadialLinearScale, LineElement, PointElement, Title, Filler, Tooltip, Legend);

export type RvRadarChartProps = {
	width?: number;
	height?: number;
	data: ChartData<'radar'>;
	options?: ChartOptions<'radar'>;
};

const RvRadarChart: FC<RvRadarChartProps> = ({ width, height, data, options }) => {
	const newOptions = {
		...options,
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<RvCanvas>
			<Radar width={width} height={height} data={data} options={newOptions} />
		</RvCanvas>
	);
};

export default RvRadarChart;
