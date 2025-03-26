import React from 'react';
import EditIcon from '../../assets/icons/edit.svg?react';

const QuoteStatusCard: React.FC = () => {
	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brand-primary font-bold text-base">
					Quote Status
				</h2>
				<hr className="flex-grow mx-3 border-neutral-200" />
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs">
						Current Status:
					</span>
					<div className="bg-brand-50 text-white rounded-full px-2 py-0.5 text-[10px] flex items-center gap-1">
						<div className="w-3 h-3 bg-white rounded-full"></div>
						Pending Approval
					</div>
				</div>
				<EditIcon className="text-brand-primary" />
			</div>
		</div>
	);
};

export default QuoteStatusCard;
