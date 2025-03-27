import InsuranceTypeBadge from './InsuranceTypeBadge';
import StatusBadge from './StatusBadge';
import IconButton from './IconButton';
import Dropdown from './Dropdown';
import EnhancedQuotesTable from './QuotesTable';
import EnhancedInsuranceQuoteDetails from './InsuranceQuoteDetails';
import EnhancedInsuranceQuoteDetailsMobile from './InsuranceQuoteDetailsMobile';

import Icon from '../assets/icons/edit.svg?react';
import { quotes } from '../features/quotes/dummyQuotes';
import { useEffect, useState } from 'react';

const Header = () => {
	const [a, b] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			b(true);
		}, 4000);
	}, []);

	return (
		<header>
			<div className='hidden sm:block'>
				<EnhancedInsuranceQuoteDetails className='max-w-[1024px]' />
				</div> 
			<div className='block sm:hidden'>
				<EnhancedInsuranceQuoteDetailsMobile  />
			</div>
			{/* Header
			<InsuranceTypeBadge type="Life" />
			<InsuranceTypeBadge type="Vehicle" />
			<InsuranceTypeBadge type="Business" />
			<InsuranceTypeBadge type="House" />
			<InsuranceTypeBadge type="Travel" />
			<br />
			<StatusBadge status="Pending" />
			<StatusBadge status="Approved" />
			<StatusBadge status="Rejected" />
			<StatusBadge status="Expired" />
			<br />
			<IconButton icon={<Icon />} onClick={() => {}} />
			<br />
			<Dropdown />
			<br />
			<EnhancedQuotesTable loading={!a} quotes={quotes} /> */}
		</header>
	);
};

export default Header;
