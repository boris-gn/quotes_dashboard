import React from 'react';
import PersonalDetailsCard from './quoteDetails/PersonalDetailsCard';
import ContactInformationCard from './quoteDetails/ContactInformationCard';
import PolicyInformationCard from './quoteDetails/PolicyInformationCard';
import CustomerHistoryCard from './quoteDetails/CustomerHistoryCard';
import QuoteStatusCard from './quoteDetails/QuoteStatusCard';
import QuoteBreakdownCard from './quoteDetails/QuoteBreakdownCard';
import ExpirationDatesCard from './quoteDetails/ExpirationDatesCard';
import SupportingDocumentsCard from './quoteDetails/SupportingDocumentsCard';
import ActivityLogCard from './quoteDetails/ActivityLogCard';
// import ActionButtons from './quoteDetails/ActionButtons';
import withContainer from '../hocs/Container';

const InsuranceQuoteDetails: React.FC = () => {
	return (
		<>
			<div className="flex items-start space-x-12 flex-wrap">
				<div className="flex-1 space-y-6">
					<PersonalDetailsCard />
					<ContactInformationCard />
					<PolicyInformationCard />
					<CustomerHistoryCard />
				</div>
				<div className="flex-1 space-y-6">
					<QuoteStatusCard />
					<QuoteBreakdownCard />
					<ExpirationDatesCard />
					<SupportingDocumentsCard />
				</div>
				<div>
					<ActivityLogCard />
				</div>
			</div>
			<div className="mt-6">{/* <ActionButtons /> */}</div>
		</>
	);
};

const EnhancedInsuranceQuoteDetails = withContainer(InsuranceQuoteDetails);
export default EnhancedInsuranceQuoteDetails;
