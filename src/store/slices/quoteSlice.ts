import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuotesData } from '../../../data/quotesData';

interface QuoteState {
	data: IQuotesData | null;
	isLoading: boolean;
	error: string | null;
}

const initialState: QuoteState = {
	data: null,
	isLoading: false,
	error: null,
};

const quotesSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},

		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},

		setQuotes: (state, action: PayloadAction<IQuotesData>) => {
			state.data = action.payload;
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const { setLoading, setError, setQuotes } = quotesSlice.actions;
export default quotesSlice.reducer;
