import React from 'react';
import CardTitle from './CartTitle';

const QuoteBreakdownCard: React.FC = () => {
	return (
		<div className="bg-white min-w-[280px]">
			<CardTitle title='Quote Breakdown' />
			
			<div className="space-y-2 text-left pl-3">
				<div className="flex">
					<span className="text-brand-primary font-bold text-xs">
						Premium Amount:
					</span>
					<div className="flex gap-1 pl-1">
						<span className="text-brand-primary text-xs font-bold">
							$120
						</span>
						<span className="text-default-font text-xs">
							per month
						</span>
					</div>
				</div>
				<div className="flex">
					<span className="text-brand-primary font-bold text-xs">
						Annual Premium:
					</span>
					<span className="text-brand-primary text-xs font-bold pl-1">
						$1,400
					</span>
				</div>
				<div className="space-y-1">
					<span className="text-brand-primary font-bold text-xs">
						Discounts Applied:
					</span>
					<div className="flex pl-3">
						<span className="text-brand-primary text-xs">
							Safe Driver Discount:
						</span>
						<span className="text-red-600 text-xs pl-2.5">-$50</span>
					</div>
					<div className="flex pl-3">
						<span className="text-brand-primary text-xs">
							Multi-Policy Discount:
						</span>
						<span className="text-red-600 text-xs pl-2.5">-$30</span>
					</div>
				</div>
				<div className="flex">
					<span className="text-brand-primary font-bold text-xs">
						Total Charges:
					</span>
					<div className="flex gap-1 pl-1">
						<span className="text-brand-primary text-xs font-bold">
							$1,320
						</span>
						<span className="text-default-font text-xs">
							(after discounts)
						</span>
					</div>
				</div>
				<div className="flex ">
					<span className="text-brand-primary font-bold text-xs">
						Tax:
					</span>
					<span className="text-brand-primary text-xs pl-1">$20</span>
				</div>
				<div className="flex pb-3">
					<span className="text-brand-primary font-bold text-xs">
						Final Premium:
					</span>
					<span className="text-brand-primary text-xs font-bold  pl-1">
						$1,340
					</span>
				</div>
			</div>
		</div>
	);
};

export default QuoteBreakdownCard;
