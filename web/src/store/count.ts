import { createSlice } from '@reduxjs/toolkit';
import type { ActionProps } from '.';

type Payloads = ActionProps<number>;

type ResetPayloads = ActionProps<null>;

const count = createSlice({
	name: 'count',
	initialState: {
		count: 0,
	},
	reducers: {
		set(state, { payload }: Payloads) {
			state.count = payload;
		},
		reset(state, {}: ResetPayloads) {
			state.count = 0;
		},
		add(state, { payload }: Payloads) {
			state.count += payload;
		},
		minus(state, { payload }: Payloads) {
			state.count -= payload;
		},
		division(state, { payload }: Payloads) {
			state.count /= payload;
		},
		multiplication(state, { payload }: Payloads) {
			state.count *= payload;
		},
	},
});

const { set, reset, add, minus, division, multiplication } = count.actions;

export { set, reset, add, minus, division, multiplication };

export default count.reducer;
