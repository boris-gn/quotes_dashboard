import React from 'react';
import EditIcon from '../../assets/icons/edit.svg?react';
import CardTitle from './CartTitle';

const QuoteStatusCard: React.FC = () => {
	return (
		<div className="bg-white ">
			<CardTitle title='Quote Status' />

			<div className="flex items-center mb-[24px]">
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs">
						Current Status:
					</span>
					<div className="bg-brand-50 text-white rounded-full px-2 py-0.5 text-[10px] flex items-center gap-1">
						<div className="w-3 h-3 bg-white rounded-full"></div>
						Pending Approval
					</div>
				</div>
				<EditIcon className="text-brand-primary pl-1" />
			</div>
		</div>
	);
};

export default QuoteStatusCard;
