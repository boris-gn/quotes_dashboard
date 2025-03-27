import React from 'react';
import CardTitle from './CartTitle';

const PolicyInformationCard: React.FC = () => {
	return (
		<div className="bg-white text-left">
			<CardTitle title="Policy Information" />
			<div className="space-y-2">
				<div className="flex gap-2 px-[14px]">
					<span className="text-brand-primary font-bold text-xs w-36">
						Policy Type:
					</span>
					<span className="text-brand-primary text-xs">
						Comprehensive Auto Insurance
					</span>
				</div>
				<div className="flex gap-2 px-[14px]">
					<span className="text-brand-primary font-bold text-xs w-36">
						Policy Description:
					</span>
					<span className="text-brand-primary text-xs">
						+1 123 456 7890
					</span>
				</div>
				<div className="flex  gap-2 px-3">
					<span className="text-brand-primary font-bold text-xs w-36">
						Coverage Amount:
					</span>
					<span className="text-brand-primary text-xs">$50,000</span>
				</div>
				<div className="flex gap-2 px-3  mb-[24px]">
					<span className="text-brand-primary font-bold text-xs w-36">
						Deductible:
					</span>
					<span className="text-brand-primary text-xs">$500</span>
				</div>
			</div>
		</div>
	);
};

export default PolicyInformationCard;
