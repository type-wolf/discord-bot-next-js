import { defineStyle, defineStyleConfig, type StyleFunctionProps } from '@chakra-ui/react';
import { rBlack, rError, rPrimary, rSecondary, rSuccess, rWarning, rWhite, transparent } from '../colors';

const primary = {
	outline: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rPrimary[500][colorMode],
			bg: transparent,
			borderWidth: '1px',
			borderColor: rPrimary[500][colorMode],
			_hover: {
				bg: colorMode === 'light' ? rPrimary[50][colorMode] : rBlack[400].dark,
			},
			_active: {
				bg: colorMode === 'light' ? rPrimary[100][colorMode] : rBlack[300].dark,
			},
		});
	},
	solid: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rWhite[500][colorMode],
			bg: rPrimary[500][colorMode],
			_hover: {
				bg: rPrimary[600][colorMode],
			},
			_active: {
				bg: rPrimary[700][colorMode],
			},
		});
	},
};

const secondary = {
	outline: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rSecondary[500][colorMode],
			bg: transparent,
			borderWidth: '1px',
			borderColor: rSecondary[500][colorMode],
			_hover: {
				bg: colorMode === 'light' ? rSecondary[50][colorMode] : rBlack[400].dark,
			},
			_active: {
				bg: colorMode === 'light' ? rSecondary[100][colorMode] : rBlack[300].dark,
			},
		});
	},
	solid: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: colorMode === 'light' ? rBlack[500].light : rWhite[500].light,
			bg: colorMode === 'light' ? rSecondary[100][colorMode] : rSecondary[700][colorMode],
			_hover: {
				bg: colorMode === 'light' ? rSecondary[200][colorMode] : rSecondary[600][colorMode],
			},
			_active: {
				bg: colorMode === 'light' ? rSecondary[300][colorMode] : rSecondary[500][colorMode],
			},
		});
	},
};

const success = {
	outline: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rSuccess[500][colorMode],
			bg: transparent,
			borderWidth: '1px',
			borderColor: rSuccess[500][colorMode],
			_hover: {
				bg: colorMode === 'light' ? rSuccess[50][colorMode] : rBlack[400].dark,
			},
			_active: {
				bg: colorMode === 'light' ? rSuccess[100][colorMode] : rBlack[300].dark,
			},
		});
	},
	solid: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rWhite[500][colorMode],
			bg: rSuccess[500][colorMode],
			_hover: {
				bg: rSuccess[600][colorMode],
			},
			_active: {
				bg: rSuccess[700][colorMode],
			},
		});
	},
};

const warning = {
	outline: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rWarning[500][colorMode],
			bg: transparent,
			borderWidth: '1px',
			borderColor: rWarning[500][colorMode],
			_hover: {
				bg: colorMode === 'light' ? rWarning[50][colorMode] : rBlack[400].dark,
			},
			_active: {
				bg: colorMode === 'light' ? rWarning[100][colorMode] : rBlack[300].dark,
			},
		});
	},
	solid: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rWhite[500][colorMode],
			bg: rWarning[500][colorMode],
			_hover: {
				bg: rWarning[600][colorMode],
			},
			_active: {
				bg: rWarning[700][colorMode],
			},
		});
	},
};

const danger = {
	outline: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rError[500][colorMode],
			bg: transparent,
			borderWidth: '1px',
			borderColor: rError[500][colorMode],
			_hover: {
				bg: colorMode === 'light' ? rError[50][colorMode] : rBlack[400].dark,
			},
			_active: {
				bg: colorMode === 'light' ? rError[100][colorMode] : rBlack[300].dark,
			},
		});
	},
	solid: ({ colorMode }: StyleFunctionProps) => {
		return defineStyle({
			color: rWhite[500][colorMode],
			bg: rError[500][colorMode],
			_hover: {
				bg: rError[600][colorMode],
			},
			_active: {
				bg: rError[700][colorMode],
			},
		});
	},
};

const Button = defineStyleConfig({
	baseStyle: ({ colorMode }: StyleFunctionProps) => ({
		color: colorMode === 'light' ? rBlack[500].light : rWhite[500].dark,
		fontWeight: 'bold',
		_disabled: {
			bg: 'none',
			_hover: {
				bg: 'none',
			},
			_active: {
				bg: 'none',
			},
		},
	}),
	sizes: {},
	variants: {
		'primary.outline': primary.outline,
		'primary.solid': primary.solid,
		'success.outline': success.outline,
		'success.solid': success.solid,
		'secondary.outline': secondary.outline,
		'secondary.solid': secondary.solid,
		'warning.outline': warning.outline,
		'warning.solid': warning.solid,
		'danger.outline': danger.outline,
		'danger.solid': danger.solid,
	},
	defaultProps: {},
});

export default Button;
