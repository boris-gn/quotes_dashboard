import React from 'react';
import CardTitle from './CartTitle';
import StatusBadge from '../StatusBadge';
import { CustomerHistory } from '../../store/dummyData';

type CustomerHistoryCardProps = {
	history: CustomerHistory[];
};

const CustomerHistoryCard: React.FC<CustomerHistoryCardProps> = ({
	history,
}) => {
	console.log(history);
	return (
		<div className="bg-white">
			<CardTitle title="Customer History" />

			<div className="space-y-4 text-left">
				<div className="flex items-center">
					<span className="text-brand-primary font-bold text-xs">
						Previous Policies:
					</span>
				</div>
				{history.map((history) => {
					return (
						<>
							<div className="flex">
								<span className="text-brand-primary text-[10px]">
									{history.policyId}
								</span>
								<StatusBadge isFilled status="Active" />
							</div>
							<div className="flex-col sm:flex-row flex sm:items-center">
								<span className="text-brand-primary text-[10px]">
									{history.type}
								</span>
								<StatusBadge isFilled status={history.status} />
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default CustomerHistoryCard;
