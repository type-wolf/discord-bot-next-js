'use client';

import type { FC } from 'react';
import RvBox, { type RvBoxProps } from './Box';
import RvContainer, { type RvContainerProps } from './Container';

export type RvCenterProps = RvContainerProps & {};

/**
 * ------------------------------------------
 * @name RvCenter
 * ------------------------------------------
 * @description
 * A functional component that centralizes its children within itself. It utilizes the RvContainer
 * component for layout, allowing for a flexible and easy way to center content horizontally and vertically.
 * ------------------------------------------
 * @component
 * Functional Component (FC) from React, specialized for centering content within a container.
 * ------------------------------------------
 * @param children
 * React nodes or elements to be centered within the RvContainer.
 * ------------------------------------------
 * @param props
 * An object of type RvContainerProps from the RvContainer component, enabling the application of
 * all standard container properties including layout and spacing.
 * ------------------------------------------
 * @returns
 * A RvContainer component with content centered horizontally and vertically.
 * ------------------------------------------
 **/
const RvCenter: FC<RvCenterProps> = ({ children, ...props }) => {
	return (
		<RvContainer centerContent={false} alignItems='center' justifyContent='center' {...props}>
			{children}
		</RvContainer>
	);
};

export type RvAbsoluteCenterProps = RvBoxProps & {
	axis?: 'horizontal' | 'vertical' | 'both';
};

const centerStyles = {
	horizontal: {
		insetStart: '50%',
		transform: 'translateX(-50%)',
	},
	vertical: {
		top: '50%',
		transform: 'translateY(-50%)',
	},
	both: {
		insetStart: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	},
};

/**
 * ------------------------------------------
 * @name RvAbsoluteCenter
 * ------------------------------------------
 * @description
 * A functional component for absolutely positioning its children in the center, either horizontally,
 * vertically, or both. It leverages the RvBox component and custom styling to achieve the centering effect.
 * ------------------------------------------
 * @component
 * Functional Component (FC) from React, specialized for absolutely centering content within a box.
 * ------------------------------------------
 * @param children
 * React nodes or elements to be absolutely centered within the RvBox.
 * ------------------------------------------
 * @param axis
 * Specifies the axis along which the content should be centered: 'horizontal', 'vertical', or 'both'.
 * Defaults to 'both' if not specified.
 * ------------------------------------------
 * @param props
 * An object of type RvBoxProps from the RvBox component, allowing for all standard box properties
 * to be applied in addition to the absolute centering styles.
 * ------------------------------------------
 * @returns
 * An RvBox component with content absolutely centered based on the specified axis.
 * ------------------------------------------
 **/
export const RvAbsoluteCenter: FC<RvAbsoluteCenterProps> = ({ children, axis = 'both', ...props }) => {
	return (
		<RvBox __css={centerStyles[axis]} {...props} position='absolute'>
			{children}
		</RvBox>
	);
};

export default RvCenter;
