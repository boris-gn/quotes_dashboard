import React from 'react';
import EditIcon from '../../assets/icons/edit.svg?react';
import CardTitle from './CartTitle';

const PersonalDetailsCard: React.FC = () => {
	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3">
			<CardTitle title="Personal Details" />
			<div className="flex items-center gap-3">
				<div
					className="w-24 h-24 bg-gradient-to-l from-[#9dc8e6] to-[#9dc8e6] 
          rounded-lg overflow-hidden object-cover"
				>
					{/* Profile image would go here */}
				</div>
				<div className="flex-1 space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-brand-primary font-bold text-xs">
							Customer ID:
						</span>
						<span className="text-brand-primary text-xs">
							CUST-34256
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-brand-primary font-bold text-xs">
							Full Name:
						</span>
						<span className="text-brand-primary text-xs">
							Theresa Heidenreich
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-brand-primary font-bold text-xs">
							Gender:
						</span>
						<span className="text-brand-primary text-xs">Male</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-brand-primary font-bold text-xs">
							Occupation:
						</span>
						<span className="text-brand-primary text-xs">
							Marketing Manager
						</span>
					</div>
				</div>
				<div
					className="bg-brand-primary text-white rounded-lg w-6 h-6 
          flex items-center justify-center absolute left-80 top-24"
				>
					<EditIcon />
				</div>
			</div>
		</div>
	);
};

export default PersonalDetailsCard;
