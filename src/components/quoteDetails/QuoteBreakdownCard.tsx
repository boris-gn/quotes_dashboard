import React from 'react';
import CardTitle from './CartTitle';
import { QuoteBreakdown } from '../../../data/quotesData';

interface IQuoteBreakdownCard {
	breakdown: QuoteBreakdown;
}

const QuoteBreakdownCard: React.FC<IQuoteBreakdownCard> = ({ breakdown }) => {
	if (!breakdown) {
		return null;
	}

	return (
		<div className="bg-white min-w-auto md:min-w-[280px]">
			<CardTitle title="Quote Breakdown" />

			<div className="space-y-2 text-left pl-3">
				<div className="flex">
					<span className="text-brand-primary font-bold text-xs">
						Premium Amount:
					</span>
					<div className="flex gap-1 pl-1">
						<span className="text-brand-primary text-xs font-bold">
							$120
						</span>
						<div className="flex gap-1 pl-1">
							<span className="text-brand-primary text-xs font-bold">
								{breakdown.premiumAmount}
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
							{breakdown.annualPremium}
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
							<span className="text-red-600 text-xs pl-2.5">
								{breakdown?.discounts?.safe?.amount}
							</span>
						</div>
						<div className="flex pl-3">
							<span className="text-brand-primary text-xs">
								Multi-Policy Discount:
							</span>
							<span className="text-red-600 text-xs pl-2.5">
								{breakdown?.discounts?.multi?.amount}
							</span>
						</div>
					</div>
					<div className="flex">
						<span className="text-brand-primary font-bold text-xs">
							Total Charges:
						</span>
						<div className="flex gap-1 pl-1">
							<span className="text-brand-primary text-xs font-bold">
								{breakdown.totalCharges}
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
						<span className="text-brand-primary text-xs pl-1">
							$20
						</span>
					</div>
					<div className="flex pb-3">
						<span className="text-brand-primary font-bold text-xs">
							Final Premium:
						</span>
						<span className="text-brand-primary text-xs font-bold  pl-1">
							{breakdown.finalPremium}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuoteBreakdownCard;
