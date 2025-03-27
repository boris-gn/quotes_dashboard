import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dummyData, DummyData } from '../dummyData';

const initialState: DummyData = dummyData;

const quoteSlice = createSlice({
	name: 'quote',
	initialState,
	reducers: {
		updateQuoteStatus(state, action: PayloadAction<string>) {
			state.quoteStatus = action.payload;
		},
		updatePremiumAmount(state, action: PayloadAction<string>) {
			state.quoteBreakdown.premiumAmount = action.payload;
		},
	},
});

export const { updateQuoteStatus, updatePremiumAmount } = quoteSlice.actions;
export default quoteSlice.reducer;
