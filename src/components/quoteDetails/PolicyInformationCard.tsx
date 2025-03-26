import React from 'react';

const PolicyInformationCard: React.FC = () => {
	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brand-primary font-bold text-base">
					Policy Information
				</h2>
				<hr className="flex-grow mx-3 border-neutral-200" />
			</div>
			<div className="space-y-2">
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs w-36">
						Policy Type:
					</span>
					<span className="text-brand-primary text-xs">
						Comprehensive Auto Insurance
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs w-36">
						Policy Description:
					</span>
					<span className="text-brand-primary text-xs">
						+1 123 456 7890
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs w-36">
						Coverage Amount:
					</span>
					<span className="text-brand-primary text-xs">$50,000</span>
				</div>
				<div className="flex items-center gap-2">
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
