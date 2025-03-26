import React from 'react';
import CardTitle from './CartTitle';
import StatusBadge from '../StatusBadge';

const CustomerHistoryCard: React.FC = () => {
	return (
		<div className="bg-white">
			<CardTitle title="Customer History" />

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="text-brand-primary font-bold text-xs">
						Previous Policies:
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary text-xs">
						Policy #P-20231011-002 (Health Insurance):
					</span>
					<StatusBadge isFilled status="Active" />
					{/* <div className="bg-green-100 text-green-600 rounded-full px-2 py-0.5 text-[10px] flex items-center gap-1">
						<div className="w-3 h-3 bg-green-600 rounded-full"></div>
						Active
					</div> */}
				</div>
				<div className="flex items-center justify-between ">
					<span className="text-brand-primary text-xs">
						Policy #P-20230905-001 (Home Insurance):
					</span>
					<StatusBadge isFilled status="Expired" />
					{/* <div className="bg-red-100 text-red-600 rounded-full px-2 py-0.5 text-[10px] flex items-center gap-1">
						<div className="w-3 h-3 bg-red-600 rounded-full"></div>
						Expired
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default CustomerHistoryCard;
