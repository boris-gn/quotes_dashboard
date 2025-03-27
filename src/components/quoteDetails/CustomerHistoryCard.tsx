import React from 'react';
import CardTitle from './CartTitle';
import StatusBadge from '../StatusBadge';

const CustomerHistoryCard: React.FC = () => {
	return (
		<div className="bg-white">
			<CardTitle title="Customer History" />

			<div className="space-y-4 text-left">
				<div className="flex items-center">
					<span className="text-brand-primary font-bold text-xs">
						Previous Policies:
					</span>
				</div>
				<div className="flex items-center">
					<span className="text-brand-primary text-[10px]">
						Policy #P-20231011-002 (Health Insurance):
					</span>
					<StatusBadge isFilled status="Active" />
				</div>
				<div className="flex items-center">
					<span className="text-brand-primary text-[10px]">
						Policy #P-20230905-001 (Home Insurance):
					</span>
					<StatusBadge isFilled status="Expired" />
				</div>
			</div>
		</div>
	);
};

export default CustomerHistoryCard;
