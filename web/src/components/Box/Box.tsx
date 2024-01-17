'use client';

import type { FC } from 'react';
import { Box, type BoxProps, useColorModeValue } from '@chakra-ui/react';
import { rBlack, rWhite } from '../theme/colors';

export type RvBoxProps = BoxProps & {};

/**
 * ------------------------------------------
 * @name RvBox
 * ------------------------------------------
 * @description
 * A functional component that serves as a wrapper around Chakra UI's Box component.
 * It extends the Box component by allowing for additional custom properties and providing
 * a more structured way to use Box with predefined styles and behaviors.
 * ------------------------------------------
 * @component
 * Functional Component (FC) from React, specifically designed for creating Box elements in a UI.
 * ------------------------------------------
 * @param children
 * React nodes or elements that will be rendered inside the Box. This allows for content to be
 * dynamically inserted within the Box component.
 * ------------------------------------------
 * @param props
 * An object of type BoxProps from Chakra UI, allowing for all the standard properties of a Box
 * component to be applied. This includes but is not limited to layout, spacing, and styling options.
 * ------------------------------------------
 * @returns
 * A Box component from Chakra UI containing any children elements and applying all passed-in props.
 * ------------------------------------------
 **/

const RvBox: FC<RvBoxProps> = ({ children, ...props }) => {
	const bgColor = useColorModeValue(rWhite[500].light, rBlack[500].dark);
	return (
		<Box bgColor={bgColor} {...props}>
			{children}
		</Box>
	);
};

export default RvBox;
