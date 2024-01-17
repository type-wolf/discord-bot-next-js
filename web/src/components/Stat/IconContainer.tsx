'use client';

import type { FC } from 'react';
import { RvFlex, type RvFlexProps } from '../Box';
import RvStatContainer from './StatContainer';

export type RvIconContainer = RvFlexProps & {};

const RvIconContainer: FC<RvIconContainer> = ({ children, ...props }) => {
	return (
		<RvStatContainer w='75px' h='75px' top='12%' left='55px'>
			<RvFlex justify='center' align='center' w='100%' h='100%' {...props}>
				{children}
			</RvFlex>
		</RvStatContainer>
	);
};

export default RvIconContainer;
