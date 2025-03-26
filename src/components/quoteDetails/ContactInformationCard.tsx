import React from 'react';

const ContactInformationCard: React.FC = () => {
	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brand-primary font-bold text-base">
					Contact Information
				</h2>
				<hr className="flex-grow mx-3 border-neutral-200" />
			</div>
			<div className="space-y-2">
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs w-24">
						Mobile Phone:
					</span>
					<span className="text-brand-primary text-xs">
						+1 123 456 7890
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs w-24">
						Home Phone:
					</span>
					<span className="text-brand-primary text-xs">
						+1 123 456 7890
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="text-brand-primary font-bold text-xs w-24">
						Email:
					</span>
					<span className="text-brand-primary text-xs">
						Theresa@email.com
					</span>
				</div>
				<div className="flex items-center gap-2">
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
