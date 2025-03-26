import React from 'react';

const QuoteBreakdownCard: React.FC = () => {
	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brand-primary font-bold text-base">
					Quote Breakdown
				</h2>
				<hr className="flex-grow mx-3 border-neutral-200" />
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Premium Amount:
					</span>
					<div className="flex items-center gap-1">
						<span className="text-brand-primary text-xs font-bold">
							$120
						</span>
						<span className="text-default-font text-xs">
							per month
						</span>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Annual Premium:
					</span>
					<span className="text-brand-primary text-xs font-bold">
						$1,400
					</span>
				</div>
				<div className="space-y-1">
					<span className="text-brand-primary font-bold text-xs">
						Discounts Applied:
					</span>
					<div className="flex items-center justify-between">
						<span className="text-brand-primary text-xs">
							Safe Driver Discount:
						</span>
						<span className="text-red-600 text-xs">-$50</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-brand-primary text-xs">
							Multi-Policy Discount:
						</span>
						<span className="text-red-600 text-xs">-$30</span>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Total Charges:
					</span>
					<div className="flex items-center gap-1">
						<span className="text-brand-primary text-xs font-bold">
							$1,320
						</span>
						<span className="text-default-font text-xs">
							(after discounts)
						</span>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Tax:
					</span>
					<span className="text-brand-primary text-xs">$20</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Final Premium:
					</span>
					<span className="text-brand-primary text-xs font-bold">
						$1,340
					</span>
				</div>
			</div>
		</div>
	);
};

export default QuoteBreakdownCard;
