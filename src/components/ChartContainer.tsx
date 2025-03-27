import withContainer from './Container';

const ChartContainer: React.FC = () => {

	return (
		<div>
			Chart
		</div>
	);
};

const QuotesChartContainer = withContainer(ChartContainer);
export default QuotesChartContainer;

