import React from 'react';
import CardTitle from './CartTitle';
import StatusBadge from '../StatusBadge';
import { CustomerHistory } from '../../../data/quotesData';

type CustomerHistoryCardProps = {
	history: CustomerHistory[];
};

const CustomerHistoryCard: React.FC<CustomerHistoryCardProps> = ({
	history,
}) => {
	return (
		<div className="bg-white">
			<CardTitle title="Customer History" />

			<div className="space-y-4 text-left">
				<div className="flex items-center">
					<span className="text-brand-primary font-bold text-xs">
						Previous Policies:
					</span>
				</div>
				{history.map((historyItem) => {
					return (
						<div key={historyItem.policyId}>
							<div className="flex">
								<span className="text-brand-primary text-[10px]">
									{historyItem.policyId}
								</span>
								<StatusBadge isFilled status="Active" />
							</div>
							<div className="flex-col sm:flex-row flex sm:items-center">
								<span className="text-brand-primary text-[10px]">
									{historyItem.type}
								</span>
								<StatusBadge
									isFilled
									status={historyItem.status}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CustomerHistoryCard;
