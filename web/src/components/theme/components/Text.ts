import { defineStyle, defineStyleConfig, type StyleFunctionProps } from '@chakra-ui/react';
import { rBlack, rPrimary, rWarning, rError, rWhite } from '../colors';

const link = ({ colorMode }: StyleFunctionProps) => {
	return defineStyle({
		textDecoration: 'underline',
		cursor: 'pointer',
		_hover: {
			color: rPrimary[700][colorMode],
		},
	});
};

const warning = ({ colorMode }: StyleFunctionProps) => {
	return defineStyle({
		color: rWarning[500][colorMode],
		fontWeight: 'bold',
	});
};

const error = ({ colorMode }: StyleFunctionProps) => {
	return defineStyle({
		color: rError[500][colorMode],
		fontWeight: 'bold',
	});
};

const Text = defineStyleConfig({
	baseStyle: ({ colorMode }: StyleFunctionProps) => ({
		color: colorMode === 'light' ? rBlack[500].light : rWhite[500].light,
	}),
	sizes: {},
	variants: {
		link,
		warning,
		error,
	},
	defaultProps: {},
});

export default Text;
