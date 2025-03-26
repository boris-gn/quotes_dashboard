import React from 'react';
import CardTitle from './CartTitle';

const ContactInformationCard: React.FC = () => {
	return (
		<div className="bg-white text-left">
			<CardTitle title="Contact Information" />
			<div className="space-y-2  min-w-[385px]">
				<div className="flex gap-2 px-3">
					<span className="text-brand-primary font-bold text-xs w-24">
						Mobile Phone:
					</span>
					<span className="text-brand-primary text-xs">
						+1 123 456 7890
					</span>
				</div>
				<div className="flex gap-2 px-3">
					<span className="text-brand-primary font-bold text-xs w-24">
						Home Phone:
					</span>
					<span className="text-brand-primary text-xs">
						+1 123 456 7890
					</span>
				</div>
				<div className="flex gap-2 px-3">
					<span className="text-brand-primary font-bold text-xs w-24">
						Email:
					</span>
					<span className="text-brand-primary text-xs">
						Theresa@email.com
					</span>
				</div>
				<div className="flex gap-2 px-3">
					<span className="text-brand-primary font-bold text-xs w-24">
						Address:
					</span>
					<span className="text-brand-primary text-xs">
						6470 Koepp Street, South Hillary 72456-8817
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContactInformationCard;
