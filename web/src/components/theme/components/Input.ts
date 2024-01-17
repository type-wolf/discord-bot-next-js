import { type StyleFunctionProps, defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { rBlack, rPrimary, transparent } from '../colors';

const primary = {
	outline: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			field: {
				bg: transparent,
				borderWidth: '1.5px',
				_hover: {
					borderColor: colorMode === 'light' ? rBlack[500].light : rBlack[50][colorMode],
				},
				_active: {
					borderColor: colorMode === 'light' ? rBlack[500].light : rBlack[50][colorMode],
				},
			},
		});
	},
	solid: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			field: {
				bg: rPrimary[500][colorMode],
				_hover: {
					bg: rPrimary[600][colorMode],
				},
			},
		});
	},
};

const Input = defineStyleConfig({
	baseStyle: ({ colorMode }: StyleFunctionProps) => ({
		field: {
			fontSize: {
				sm: '16px',
				md: '18px',
			},
		},
	}),
	sizes: {},
	variants: {
		'primary.outline': primary.outline,
		'primary.solid': primary.solid,
	},
	defaultProps: {},
});

export default Input;
