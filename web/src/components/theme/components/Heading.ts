import { defineStyle, defineStyleConfig, type StyleFunctionProps } from '@chakra-ui/react';
import { rWhite, rBlack } from '../colors';

const title = ({ colorMode }: StyleFunctionProps) => {
	return defineStyle({
		fontSize: { base: '3xl' },
		fontWeight: 'bold',
	});
};

const subTitle = ({ colorMode }: StyleFunctionProps) => {
	return defineStyle({
		fontSize: { base: 'xl' },
		fontWeight: 'bold',
	});
};

const Heading = defineStyleConfig({
	baseStyle: ({ colorMode }: StyleFunctionProps) => ({
		color: colorMode === 'light' ? rBlack[500].light : rWhite[500].light,
	}),
	sizes: {},
	variants: {
		title,
		subTitle,
	},
	defaultProps: {},
});

export default Heading;
