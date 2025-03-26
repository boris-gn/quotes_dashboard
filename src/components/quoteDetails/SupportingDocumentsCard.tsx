import React from 'react';
import DownloadIcon from '../../assets/icons/download.svg?react';

const SupportingDocumentsCard: React.FC = () => {
	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brand-primary font-bold text-base">
					Supporting Documents
				</h2>
				<hr className="flex-grow mx-3 border-neutral-200" />
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="text-brand-primary text-xs underline">
						Auto Insurance Terms & Conditions.pdf
					</span>
					<DownloadIcon className="text-brand-primary" />
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary text-xs underline">
						Customer ID Proof.pdf
					</span>
					<DownloadIcon className="text-brand-primary" />
				</div>
				<div className="flex items-center justify-between">
					<span className="text-brand-primary text-xs underline">
						Vehicle Registration Document.pdf
					</span>
					<DownloadIcon className="text-brand-primary" />
				</div>
			</div>
		</div>
	);
};

export default SupportingDocumentsCard;
