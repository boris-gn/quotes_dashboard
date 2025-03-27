import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dummyData } from '../dummyData';

const initialState = dummyData.policyInformation;

const policySlice = createSlice({
	name: 'policy',
	initialState,
	reducers: {
		updateCoverageAmount(state, action: PayloadAction<string>) {
			state.coverageAmount = action.payload;
		},
		updateDeductible(state, action: PayloadAction<string>) {
			state.deductible = action.payload;
		},
	},
});

export const { updateCoverageAmount, updateDeductible } = policySlice.actions;
export default policySlice.reducer;
