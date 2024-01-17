import { createSlice } from '@reduxjs/toolkit';
import type { ActionProps } from '.';

type Payloads = ActionProps<boolean>;

const scrollSlice = createSlice({
	name: 'scroll',
	initialState: {
		isScrollToTopVisible: false,
	},
	reducers: {
		setScrollToTopVisible(state, { payload }: Payloads) {
			state.isScrollToTopVisible = payload;
		},
	},
});

export const { setScrollToTopVisible } = scrollSlice.actions;

export default scrollSlice.reducer;
