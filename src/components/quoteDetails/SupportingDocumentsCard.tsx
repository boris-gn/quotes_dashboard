import React from 'react';
import DownloadIcon from '../../assets/icons/download.svg?react';
import CardTitle from './CartTitle';

const SupportingDocumentsCard: React.FC = () => {
	return (
		<div className="bg-white ">
			<CardTitle title='Supporting Documents' />
		
			<div className="space-y-2 pl-3">
				<div className="flex items-center">
					<span className="text-brand-primary text-xs underline">
						Auto Insurance Terms & Conditions.pdf
					</span>
					<DownloadIcon className="text-brand-primary pl-1" />
				</div>
				<div className="flex items-center">
					<span className="text-brand-primary text-xs underline">
						Customer ID Proof.pdf
					</span>
					<DownloadIcon className="text-brand-primary pl-1" />
				</div>
				<div className="flex items-center">
					<span className="text-brand-primary text-xs underline">
						Vehicle Registration Document.pdf
					</span>
					<DownloadIcon className="text-brand-primary pl-1" />
				</div>
			</div>
		</div>
	);
};

export default SupportingDocumentsCard;
