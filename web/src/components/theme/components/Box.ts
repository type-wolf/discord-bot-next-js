import { defineStyleConfig, type StyleFunctionProps } from '@chakra-ui/styled-system';
import { rWhite, rBlueGray } from '../colors';

const Box = defineStyleConfig({
	baseStyle: ({ colorMode }: StyleFunctionProps) => ({
		bg: colorMode === 'light' ? rWhite[500].light : rBlueGray[500].dark,
	}),
	sizes: {},
	variants: {},
	defaultProps: {},
});

export default Box;
