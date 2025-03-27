import EnhancedQuotesTable from '../components/QuotesTable';
import { quotes } from '../features/quotes/dummyQuotes';
import QuotesCalendarContainer from '../components/CalendarContainer';
import QuotesChartContainer from '../components/ChartContainer';

const Quotes = () => {
	return (
		<div className='overflow-x-auto w-full'>
			<div className='flex flex-col md:flex-row gap-4 mb-4'>
				<QuotesCalendarContainer />
				<QuotesChartContainer />
			</div>
			<EnhancedQuotesTable className='relative' loading={false} quotes={quotes} />
		</div>
	);
};

export default Quotes;
