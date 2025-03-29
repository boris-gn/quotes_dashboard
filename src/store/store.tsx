import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './slices/quoteSlice';
import eventReducer from './slices/eventsSlice';

export const store = configureStore({
	reducer: {
		quote: quoteReducer,
		event: eventReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
