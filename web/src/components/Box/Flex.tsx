'use client';

import type { FC } from 'react';
import type { FlexProps } from '@chakra-ui/react';
import RvBox, { type RvBoxProps } from './Box';

export type RvFlexProps = RvBoxProps & {
	align?: FlexProps['alignItems'];
	justify?: FlexProps['justifyContent'];
	wrap?: FlexProps['flexWrap'];
	direction?: FlexProps['flexDirection'];
	basis?: FlexProps['flexBasis'];
	grow?: FlexProps['flexGrow'];
	shrink?: FlexProps['flexShrink'];
};

/**
 * ------------------------------------------
 * @name RvFlex
 * ------------------------------------------
 * @description
 * A functional component that extends the RvBox component, providing additional flexbox properties.
 * It simplifies the process of creating flex layouts, allowing for easy alignment, justification,
 * wrapping, and direction control of child elements. Ideal for building responsive and structured layouts.
 * ------------------------------------------
 * @component
 * Functional Component (FC) from React, specialized for creating flexbox layouts with extended features.
 * ------------------------------------------
 * @param children
 * React nodes or elements to be rendered within the flex container. This allows for dynamic
 * arrangement of content using flexbox properties.
 * ------------------------------------------
 * @param props
 * An object of type RvFlexProps, combining RvBoxProps with additional flex-specific properties such as
 * align, justify, wrap, direction, basis, grow, and shrink. These properties offer granular control
 * over flexbox behavior.
 * ------------------------------------------
 * @returns
 * An RvBox component configured with flexbox display and additional flex properties applied,
 * containing any children elements.
 * ------------------------------------------
 **/

const RvFlex: FC<RvFlexProps> = ({ children, ...props }) => {
	return (
		<RvBox display='flex' {...props}>
			{children}
		</RvBox>
	);
};

export default RvFlex;
