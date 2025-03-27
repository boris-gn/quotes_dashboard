import React from 'react';
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

const InsuranceQuoteDetails: React.FC = () => {
	const quotes = useAppSelector((state: RootState) => state.quote.data);

	return (
		<>
			<div className="overflow-x-auto flex flex-col md:flex-row items-stretch min-h-[656px]">
				{/* Left Column */}
				<div className="pr-10 w-full md:w-[380px] flex flex-col gap-4">
					<PersonalDetailsCard details={quotes?.personalDetails} />
					<ContactInformationCard
						contactInfo={quotes?.personalDetails.contactInformation}
					/>
					<PolicyInformationCard
						policyInfo={quotes?.policyInformation}
					/>
					<CustomerHistoryCard history={quotes?.customerHistory} />
				</div>
			</div>

			<div className="mt-8">
				<ActionButtons actions={actions} />
			</div>
		</>
	);
};

const EnhancedInsuranceQuoteDetails = withContainer(InsuranceQuoteDetails);
export default EnhancedInsuranceQuoteDetails;
