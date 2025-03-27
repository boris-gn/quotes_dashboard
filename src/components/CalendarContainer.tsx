import withContainer from './Container';

const CalendarContainer: React.FC = () => {

	return (
		<div className=''>
			Calendar
		</div>
	);
};

const QuotesCalendarContainer = withContainer(CalendarContainer);
export default QuotesCalendarContainer;

