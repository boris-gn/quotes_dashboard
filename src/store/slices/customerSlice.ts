import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { quotesData } from '../../../data/quotesData';

const initialState = quotesData.personalDetails;

const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		updateCustomerName(state, action: PayloadAction<string>) {
			state.fullName = action.payload;
		},
		updateCustomerEmail(state, action: PayloadAction<string>) {
			state.contactInformation.email = action.payload;
		},
	},
});

export const { updateCustomerName, updateCustomerEmail } =
	customerSlice.actions;
export default customerSlice.reducer;
