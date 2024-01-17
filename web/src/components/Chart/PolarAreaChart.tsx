'use client';

import type { FC } from 'react';
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	type ChartData,
	type ChartOptions,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import RvCanvas from './Canvas';

ChartJS.register(RadialLinearScale, ArcElement, Title, Tooltip, Legend);

export type RvPolarAreaChartProps = {
	width?: number;
	height?: number;
	data: ChartData<'polarArea'>;
	options?: ChartOptions<'polarArea'>;
};

const RvPolarAreaChart: FC<RvPolarAreaChartProps> = ({ width, height, data, options }) => {
	const newOptions = {
		...options,
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<RvCanvas>
			<PolarArea width={width} height={height} options={newOptions} data={data} />
		</RvCanvas>
	);
};

export default RvPolarAreaChart;
