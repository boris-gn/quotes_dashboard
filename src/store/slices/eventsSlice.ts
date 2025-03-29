import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const meetingsData = {
	events: {
		meetings: [
			{
				id: 1,
				occasion: 'Project Kickoff Meeting',
				for_date: '2025-04-01',
				color: '#81909e',
				is_restricted: false,
			},
			{
				id: 2,
				occasion: 'Sprint Review',
				for_date: '2025-04-10',
				color: '#81909e',
				is_restricted: true,
			},
		],
		deadlines: [
			{
				id: 3,
				occasion: 'Final Report Submission',
				for_date: '2025-04-05',
				color: '#fecaca',
				is_restricted: false,
			},
			{
				id: 4,
				occasion: 'Code Freeze',
				for_date: '2025-04-12',
				color: '#fecaca',
				is_restricted: true,
			},
		],
		renewals: [
			{
				id: 5,
				occasion: 'Domain Renewal',
				for_date: '2025-04-07',
				color: '#f6dcc5',
				is_restricted: false,
			},
			{
				id: 6,
				occasion: 'SSL Certificate Renewal',
				for_date: '2025-04-15',
				color: '#f6dcc5',
				is_restricted: true,
			},
		],
	},
};

const initialState = meetingsData;

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		updateMeetings(state, action: PayloadAction<any>) {
			state.events.meetings = action.payload;
		},
		updateDeadlines(state, action: PayloadAction<any>) {
			state.events.deadlines = action.payload;
		},
		updateRenewals(state, action: PayloadAction<any>) {
			state.events.renewals = action.payload;
		},
	},
});

export const { updateMeetings, updateDeadlines, updateRenewals } =
	eventsSlice.actions;
export default eventsSlice.reducer;
