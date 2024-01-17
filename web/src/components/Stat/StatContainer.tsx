'use client';

import type { FC } from 'react';
import { RvBox, type RvBoxProps } from '../Box';

const RvStatContainer: FC<RvBoxProps> = ({ children, w = '90%', h = '210px', top = '25%', left = '50%' }) => {
	return (
		<RvBox
			position='absolute'
			top={top}
			left={left}
			borderRadius='0.5rem'
			transform='translate(-50%, -50%)'
			w={w}
			h={h}
			borderWidth='1px'
			zIndex={1}
		>
			{children}
		</RvBox>
	);
};

export default RvStatContainer;
