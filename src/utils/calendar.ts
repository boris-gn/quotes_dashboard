export const enum CalendarType {
	MEETINGS = 'MEETINGS',
	DEADLINES = 'DEADLINES',
	RENEWALS = 'RENEWALS',
}

const colors = {
	[CalendarType.MEETINGS]: '#81909e',
	[CalendarType.DEADLINES]: '#fecaca',
	[CalendarType.RENEWALS]: '#f6dcc5',
};

function getPickedDatesList(days: { [key: string]: Date }[], color: string) {
	const calendarList = [];
	for (let i = 0; i < days.length; i++) {
		calendarList.push({ ...days[i], color });
	}
	return calendarList;
}

export const getMeetingsList = (days: { [key: string]: Date }[]) => {
	return getPickedDatesList(days, colors[CalendarType.MEETINGS]);
};

export const getDeadlinesList = (days: { [key: string]: Date }[]) => {
	return getPickedDatesList(days, colors[CalendarType.MEETINGS]);
};

export const getRenewalsList = (days: { [key: string]: Date }[]) => {
	return getPickedDatesList(days, colors[CalendarType.MEETINGS]);
};
