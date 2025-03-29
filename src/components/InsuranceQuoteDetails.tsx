import PersonalDetailsCard from './quoteDetails/PersonalDetailsCard';
import ContactInformationCard from './quoteDetails/ContactInformationCard';
import PolicyInformationCard from './quoteDetails/PolicyInformationCard';
import CustomerHistoryCard from './quoteDetails/CustomerHistoryCard';
import withContainer from './Container';
import ActionButtons from './quoteDetails/ActionButtons';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks/useRedux';

import Edit from '../assets/icons/edit.svg?react';
import Follow from '../assets/icons/node-add.svg?react';
import Email from '../assets/icons/mail.svg?react';
import Reminder from '../assets/icons/reminder.svg?react';
import Download from '../assets/icons/Download.svg?react';
import ExpirationDatesCard from './quoteDetails/ExpirationDatesCard';
import QuoteBreakdownCard from './quoteDetails/QuoteBreakdownCard';
import QuoteStatusCard from './quoteDetails/QuoteStatusCard';
import SupportingDocumentsCard from './quoteDetails/SupportingDocumentsCard';
import ActivityLogCard from './quoteDetails/ActivityLogCard';

const actions = [
	{
		icon: <Edit />,
		text: 'Update Details',
	},
	{
		icon: <Follow />,
		text: 'Add Follow-up',
	},
	{
		icon: <Email />,
		text: 'Send Mail',
	},
	{
		icon: <Reminder />,
		text: 'Send Remainder',
	},
	{
		icon: <Download />,
		text: 'Add Follow-up',
	},
];

const InsuranceQuoteDetails: React.FC<{ id: string }> = ({ id }) => {
	const quotes = useAppSelector((state: RootState) => state.quote.list);
	return (
		<>
			{quotes?.map(
				(quote) =>
					quote.quoteId === id && (
						<div
							key={quote.quoteId}
							className="overflow-x-auto flex flex-col md:flex-row items-stretch min-h-[656px]"
						>
							<div className="pr-10 w-full md:w-[380px] flex flex-col gap-4">
								<PersonalDetailsCard
									details={quote.personalDetails}
								/>
								<ContactInformationCard
									contactInfo={
										quote.personalDetails.contactInformation
									}
								/>
								<PolicyInformationCard
									policyInfo={quote.policyInformation}
								/>
								<CustomerHistoryCard
									history={quote.customerHistory}
								/>
							</div>
							<div className="border-none md:border-x border-gray-200 px-[48px] w-full md:max-w-[350px] flex flex-col gap-4">
								<QuoteStatusCard status={quote.quoteStatus} />
								<QuoteBreakdownCard
									breakdown={quote.quoteBreakdown}
								/>
								<ExpirationDatesCard
									dates={quote.expirationDates}
								/>
								<SupportingDocumentsCard
									docs={quote.supportingDocuments}
								/>
							</div>
							<div className="w-full md:w-[315px] px-12 flex flex-col">
								<ActivityLogCard
									activityLog={quote.activityLog}
								/>
							</div>
						</div>
					)
			)}
			<div className="mt-8">
				<ActionButtons actions={actions} />
			</div>
		</>
	);
};

const EnhancedInsuranceQuoteDetails = withContainer(InsuranceQuoteDetails);
export default EnhancedInsuranceQuoteDetails;
