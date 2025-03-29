import { useAppSelector } from '../hooks/useRedux';
import { RootState } from '../store/store';

export const useEventsSelectors = () => {
	const getMeetingsList = useAppSelector(
		(state: RootState) => state.event.events.meetings
	);
	const getRenewalsList = useAppSelector(
		(state: RootState) => state.event.events.renewals
	);
	const getDeadlinesList = useAppSelector(
		(state: RootState) => state.event.events.deadlines
	);

	return { getMeetingsList, getRenewalsList, getDeadlinesList };
};
