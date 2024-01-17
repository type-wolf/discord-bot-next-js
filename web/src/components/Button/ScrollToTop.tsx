'use client';

import type { FC } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useSelector, type DispatchType } from '@/store';
import { setScrollToTopVisible } from '@/store/scroll';

export type RvScrollToTopProps = {
	//
};
const RvScrollToTop: FC<RvScrollToTopProps> = () => {
	const dispatch: DispatchType = useDispatch();
	const isVisible = useSelector((state) => state.scrollReducer.isScrollToTopVisible);

	const scrollToTop = () => {
		const scrollElem = document.getElementById('');
		if (scrollElem) {
			scrollElem.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
		dispatch(setScrollToTopVisible(!isVisible));
	};

	return (
		<Button
			position='fixed'
			bottom='4rem'
			right='0.5rem'
			height='2.5rem'
			width='2.5rem'
			borderRadius='full'
			border='0'
			bg='lightGrey'
			p='0'
			shadow='md'
			opacity={isVisible ? 1 : 0}
			pointerEvents={isVisible ? 'auto' : 'none'}
			transition='opacity 0.2s'
			onClick={scrollToTop}
			display={{ base: 'none', lg: 'block' }}
		>
			<Icon height='12px' width='10px' name='arrowUpFull' />
		</Button>
	);
};

export default RvScrollToTop;
