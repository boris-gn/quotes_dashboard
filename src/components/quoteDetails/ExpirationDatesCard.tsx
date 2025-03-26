import React from 'react';

const ExpirationDatesCard: React.FC = () => {
	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brand-primary font-bold text-base">
					Expiration and Effective Dates
				</h2>
				<hr className="flex-grow mx-3 border-neutral-200" />
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Effective Date:
					</span>
					<span className="text-brand-primary text-xs">
						2024-10-15
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Expiration Date:
					</span>
					<span className="text-brand-primary text-xs">
						2025-10-14
					</span>
				</div>
			</div>
		</div>
	);
};

export default ExpirationDatesCard;
