import type { ChakraTheme, BackgroundProps, BorderProps, EffectProps } from '@chakra-ui/react';

export type LayerStyleThemeProps = {
	bg?: BackgroundProps['bg'];
	border?: BorderProps['border'];
	borderColor?: BorderProps['borderColor'];
	boxShadow?: EffectProps['boxShadow'];
	opacity?: EffectProps['opacity'];
};

const base: LayerStyleThemeProps = {};

const layerStyles: ChakraTheme['layerStyles'] = {
	base,
};

export default layerStyles;
