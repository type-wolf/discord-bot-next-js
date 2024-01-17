import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import count from './count';
import scroll from './scroll';

const store = configureStore({
	reducer: {
		countReducer: count,
		scrollReducer: scroll,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActionPaths: ['payload'],
				ignoredPaths: [],
			},
		}),
});

export type UseSelectorType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<UseSelectorType> = rawUseSelector;
export type ActionProps<T> = {
	payload: T;
	type: string;
};
export default store;
