/* eslint react/jsx-props-no-spreading: off */

import type { FC } from 'react';
import { RvBox, type RvBoxProps } from '../Box';

const RvCanvas: FC<RvBoxProps> = ({ children, ...props }) => {
	return (
		<RvBox width='90%' h='100%' mx='auto' position='relative' borderRadius='0.5rem' borderWidth='1px' {...props}>
			{children}
		</RvBox>
	);
};

export default RvCanvas;
