import { useState, useEffect } from 'react';
import EnhancedQuotesTable from '../components/QuotesTable';
import EnhancedInsuranceQuoteDetails from '../components/InsuranceQuoteDetails';
import { quotes } from '../features/quotes/dummyQuotes';

const Quotes = () => {
	const [a, b] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			b(false);
		}, 4000);
	}, []);

	return (
		<div className="md:overflow-y-auto h-screen">
			<EnhancedInsuranceQuoteDetails />
			<EnhancedQuotesTable loading={a} quotes={quotes} />
		</div>
	);
};

export default Quotes;
