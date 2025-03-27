import React from 'react';
import CardTitle from './CartTitle';

const ExpirationDatesCard: React.FC = () => {
	return (
		<div className="bg-white">
			<CardTitle title='Expiration and Effective Dates' />
			<div className="space-y-2 pl-3 pb-3">
				<div className="flex items-center pb-[14px] mb-0">
					<span className="text-brand-primary font-bold text-xs">
						Effective Date:
					</span>
					<span className="text-brand-primary text-xs pl-2.5">
						2024-10-15
					</span>
				</div>
				<div className="flex items-center">
					<span className="text-brand-primary font-bold text-xs">
						Expiration Date:
					</span>
					<span className="text-brand-primary text-xs  pl-2.5">
						2025-10-14
					</span>
				</div>
			</div>
		</div>
	);
};

export default ExpirationDatesCard;
