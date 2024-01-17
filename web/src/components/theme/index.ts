import { StyleFunctionProps, extendTheme } from '@chakra-ui/react';
import config from './config';
import breakpoints from './breakpoint';
import layerStyles from './layerStyles';
import textStyles from './textStyles';
import colors, { rBlack, rWhite } from './colors';
import components from './components';

const theme = extendTheme({
	colors,
	config,
	components,
	breakpoints,
	layerStyles,
	textStyles,
	styles: ({ colorMode }: StyleFunctionProps) => ({
		global: {},
	}),
});

export default theme;
