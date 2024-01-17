import { render } from '@testing-library/react';
import ReduxProviders from '@/components/ReduxProvider';
import ChakraProviders from '@/components/ChakraProvider';
import theme from '@/components/theme';
import * as ResizeObserverModule from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserverModule.default;

window.matchMedia = jest.fn().mockImplementation((query) => {
	return {
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	};
});

const customRender = (ui, options) =>
	render(
		<ReduxProviders>
			<ChakraProviders>{ui}</ChakraProviders>
		</ReduxProviders>,
		options
	);

export * from '@testing-library/react';

export { customRender as render };
