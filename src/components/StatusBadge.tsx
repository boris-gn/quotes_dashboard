import { FC } from 'react';

export type StatusType = 'Pending' | 'Approved' | 'Rejected' | 'Expired';

interface InsuranceTypeBadgeProps {
	status: StatusType;
}

const bgColors = {
	Pending: 'bg-brand-50',
	Approved: 'bg-success-600',
	Rejected: 'bg-error-600',
	Expired: 'bg-warning-800',
};

const StatusBadge: FC<InsuranceTypeBadgeProps> = ({ status }) => {
	return (
		<div
			className={`flex mx-2 items-center justify-start gap-1 px-2 py-0.5 rounded-100 w-20 ${bgColors[status]}`}
		>
			<div className="bg-white w-3 h-3 rounded-full" />
			<span className="text-10 text-white font-bold leading-1">
				{status}
			</span>
		</div>
	);
};

export default StatusBadge;
