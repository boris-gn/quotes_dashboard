import EnhancedQuotesTable from '../components/QuotesTable';
import QuotesCalendarContainer from '../components/CalendarContainer';
import QuotesChartContainer from '../components/ChartContainer';
import { useAppSelector } from '../hooks/useRedux';
import { RootState } from '../store/store';

const Quotes = () => {
	const quotes = useAppSelector((state: RootState) => state.quote.list);

	return (
		<div className="overflow-x-auto w-full">
			<div className="flex flex-col md:flex-row gap-4 mb-4">
				<QuotesChartContainer className="md:w-2/3 " />
				<QuotesCalendarContainer className="md:w-1/3" />
			</div>
			<EnhancedQuotesTable
				className="relative"
				loading={false}
				quotes={quotes}
			/>
		</div>
	);
};

export default Quotes;
