import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './slices/quoteSlice';
import customerReducer from './slices/customerSlice';
import policyReducer from './slices/policySlice';

export const store = configureStore({
	reducer: {
		quote: quoteReducer,
		customer: customerReducer,
		policy: policyReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
