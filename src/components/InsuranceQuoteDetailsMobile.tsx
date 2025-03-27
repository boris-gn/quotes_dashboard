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
import withContainer from './Container';
import ActionButtons from './quoteDetails/ActionButtons';

import Edit from '../assets/icons/edit.svg?react';
import Follow from '../assets/icons/node-add.svg?react';
import Email from '../assets/icons/mail.svg?react';
import Reminder from '../assets/icons/reminder.svg?react'
import Download from '../assets/icons/Download.svg?react'


const actions = [
	{
		icon: <Edit />,
		text: 'Update Details'
	},
	{
		icon: <Follow />,
		text: 'Add Follow-up'
	},
	{
		icon: <Email />,
		text: 'Send Mail'
	},
	{
		icon: <Reminder />,
		text: 'Send Remainder'
	},
	{
		icon: <Download />,
		text: 'Add Follow-up'
	}
]

const Account = withContainer(() => <div className="pr-10 w-full md:w-[360px] flex flex-col gap-4">
	<PersonalDetailsCard details={{}} />
	<ContactInformationCard contactInfo={{}} />
	<PolicyInformationCard policyInfo={{}} />
	<CustomerHistoryCard history={[]} />
</div>);

const QuarterDetails = withContainer(() => <div className="border-none md:border-x border-gray-200 px-[48px] w-full md:max-w-[350px] flex flex-col gap-4">
	<QuoteStatusCard />
	<QuoteBreakdownCard />
	<ExpirationDatesCard />
	<SupportingDocumentsCard />
</div>);


const Actions = withContainer(() => <div className="w-full md:w-[315px] px-12 flex flex-col">
	<ActivityLogCard />
</div>);

const InsuranceQuoteDetailsMobile: React.FC = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row items-stretch min-h-[656px] max-w-[975px] gap-2.5">
				<Account />

				<QuarterDetails />

				<Actions />				
			</div>
			
			<div className="mt-8 md:block hidden"><ActionButtons actions={actions} /></div>
		</>
	);
};

const EnhancedInsuranceQuoteDetailsMobile = withContainer(InsuranceQuoteDetailsMobile);
export default EnhancedInsuranceQuoteDetailsMobile;
