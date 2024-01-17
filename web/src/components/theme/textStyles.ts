import type { ChakraTheme, TypographyProps } from '@chakra-ui/react';

export type TextStyleThemeProps = {
	fontSize?: TypographyProps['fontSize'];
	fontWeight?: TypographyProps['fontWeight'];
	lineHight?: TypographyProps['lineHeight'];
	letterSpacing?: TypographyProps['letterSpacing'];
	textDecoration?: 'strikethrough' | 'underline';
	textTransform?: TypographyProps['textTransform'];
};

const h1: TextStyleThemeProps = {};

const textStyles: ChakraTheme['textStyles'] = {
	h1,
};

export default textStyles;
