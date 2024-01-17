'use client';

import type { FC } from 'react';
import RvFlex, { type RvFlexProps } from './Flex';

export type RvContainerProps = RvFlexProps & {
	/**
	 * Center child elements in any state (default is true)
	 **/
	centerContent?: boolean;
};

/**
 * ------------------------------------------
 * @name RvContainer
 * ------------------------------------------
 * @description
 * A functional component that acts as a flexible container with optional centering capabilities.
 * It extends the RvFlex component, adding the ability to center content both horizontally and
 * vertically. This component is ideal for creating structured layouts with centered content.
 * ------------------------------------------
 * @component
 * Functional Component (FC) from React, specialized for creating flexible container layouts with
 * optional content centering feature.
 * ------------------------------------------
 * @param children
 * React nodes or elements to be rendered within the RvFlex container. This allows for dynamic
 * insertion of content within the container.
 * ------------------------------------------
 * @param centerContent
 * A boolean that determines whether the content within the container should be centered.
 * If true, content is centered horizontally and vertically. Defaults to true.
 * ------------------------------------------
 * @param props
 * An object of type RvFlexProps from the RvFlex component, enabling the application of all
 * standard flex properties in addition to the container's specific behaviors.
 * ------------------------------------------
 * @returns
 * An RvFlex component configured as a container, with optional content centering based on the
 * centerContent prop.
 * ------------------------------------------
 **/
const RvContainer: FC<RvContainerProps> = ({ children, centerContent = true, ...props }) => {
	const flexDirection = centerContent ? 'column' : undefined;
	const alignItems = centerContent ? 'center' : undefined;
	return (
		<RvFlex flexDirection={flexDirection} alignItems={alignItems} {...props}>
			{children}
		</RvFlex>
	);
};

export default RvContainer;
