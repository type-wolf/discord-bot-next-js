'use client';

import type { FC } from 'react';
import { type GridProps, type GridItemProps, ResponsiveValue } from '@chakra-ui/react';
import { mapResponsive } from '@chakra-ui/utils';
import RvBox, { type RvBoxProps } from './Box';

export type RvGridProps = RvBoxProps & {
	templateColumns?: GridProps['gridTemplateColumns'];
	gap?: GridProps['gridGap'];
	rowGap?: GridProps['gridRowGap'];
	columnGap?: GridProps['gridColumnGap'];
	autoFlow?: GridProps['gridAutoFlow'];
	autoRows?: GridProps['gridAutoRows'];
	autoColumns?: GridProps['gridAutoColumns'];
	templateRows?: GridProps['gridTemplateRows'];
	templateAreas?: GridProps['gridTemplateAreas'];
	column?: GridProps['gridColumn'];
	row?: GridProps['gridRow'];
};

/**
 * ------------------------------------------
 * @name RvGrid
 * ------------------------------------------
 * @description
 * A functional component that extends the RvBox component to create CSS grid layouts. It provides
 * a flexible and powerful way to arrange content in a grid format, with support for all standard
 * CSS grid properties. Ideal for building complex, responsive layouts.
 * ------------------------------------------
 * @component
 * Functional Component (FC) from React, specialized in creating CSS grid layouts.
 * ------------------------------------------
 * @param children
 * React nodes or elements to be rendered within the grid layout.
 * ------------------------------------------
 * @param props
 * An object of type RvGridProps, extending RvBoxProps with additional grid-specific properties such as
 * templateColumns, gap, autoFlow, and others. These properties allow for detailed customization of the grid layout.
 * ------------------------------------------
 * @returns
 * An RvBox component configured with CSS grid display and additional grid properties applied,
 * containing any children elements.
 * ------------------------------------------
 **/
const RvGrid: FC<RvGridProps> = ({ children, ...props }) => {
	const styles = {
		display: 'grid',
		gridTemplateAreas: props.templateAreas,
		gridGap: props.gap,
		gridRowGap: props.rowGap,
		gridColumnGap: props.columnGap,
		gridAutoColumns: props.autoColumns,
		gridColumn: props.column,
		gridRow: props.row,
		gridAutoFlow: props.autoFlow,
		gridAutoRows: props.autoRows,
		gridTemplateRows: props.templateRows,
		gridTemplateColumns: props.templateColumns,
	};

	return (
		<RvBox {...props} __css={styles}>
			{children}
		</RvBox>
	);
};

export type RvGridItemProps = RvBoxProps & {
	area?: GridItemProps['gridArea'];
	colSpan?: GridItemProps['colSpan'];
	colStart?: GridItemProps['colStart'];
	colEnd?: GridItemProps['colEnd'];
	rowStart?: GridItemProps['rowStart'];
	rowEnd?: GridItemProps['rowEnd'];
	rowSpan?: GridItemProps['rowSpan'];
};

export function compact<T extends Record<any, any>>(object: T) {
	const clone = Object.assign({}, object);
	for (let key in clone) {
		if (clone[key] === undefined) delete clone[key];
	}
	return clone;
}

function spanFn(span?: ResponsiveValue<number | 'auto'>) {
	return mapResponsive(span, (value) => (value === 'auto' ? 'auto' : `span ${value}/span ${value}`));
}

/**
 * ------------------------------------------
 * @name RvGridItem
 * ------------------------------------------
 * @description
 * A functional component designed to be used as a child of RvGrid. It extends the RvBox component,
 * allowing individual items within a grid to have specific grid-related properties like area, column span,
 * and row span. It simplifies the process of placing and sizing items within a grid layout.
 * ------------------------------------------
 * @component
 * Functional Component (FC) from React, specialized for use as an item within a CSS grid layout.
 * ------------------------------------------
 * @param children
 * React nodes or elements to be placed within a grid item.
 * ------------------------------------------
 * @param props
 * An object of type RvGridItemProps, extending RvBoxProps with grid item-specific properties like
 * area, colSpan, and rowSpan. These properties provide fine control over the placement and sizing of the grid item.
 * ------------------------------------------
 * @returns
 * An RvBox component configured as a grid item with specific grid-related properties applied.
 * ------------------------------------------
 **/
export const RvGridItem: FC<RvGridItemProps> = ({ children, ...props }) => {
	const styles = compact({
		gridArea: props.area,
		gridColumn: spanFn(props.colSpan),
		gridRow: spanFn(props.rowSpan),
		gridColumnStart: props.colStart,
		gridColumnEnd: props.colEnd,
		gridRowStart: props.rowStart,
		gridRowEnd: props.rowEnd,
	});
	return (
		<RvBox {...props} __css={styles}>
			{children}
		</RvBox>
	);
};

export default RvGrid;
