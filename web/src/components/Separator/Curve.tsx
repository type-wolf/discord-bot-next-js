import type { FC } from 'react';

export type CurveProps = {
	w?: string | number;
	h?: number;
	lineW?: number;
	lineH?: number;
	color?: string;
	opacity?: number;
};

const Curve: FC<CurveProps> = ({ w = '100%', lineW = 1200, h = '100%', lineH = 400, color = 'gray', opacity = 0.1 }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={w} height={h} viewBox={`0 0 ${lineW} ${lineH}`}>
			<defs>
				<linearGradient id='a' x1='0%' y1='0%' x2='0%' y2='100%'>
					<stop offset='0%' style={{ stopColor: color, stopOpacity: 1 }} />
					<stop offset='100%' style={{ stopColor: 'white', stopOpacity: 1 }} />
				</linearGradient>
			</defs>
			<path
				d={`M0 ${lineH / 2} Q${lineW / 2} 0 ${lineW} ${lineH / 2} L${lineW} ${lineH} L0 ${lineH} Z`}
				fill={`url(#a)`}
				fillOpacity={opacity}
			/>
		</svg>
	);
};

export default Curve;
