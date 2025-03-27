import React from 'react';
import DownloadIcon from '../../assets/icons/download.svg?react';
import CardTitle from './CartTitle';
import { SupportingDocuments } from '../../../data/quotesData';

interface ISupportingDocumentsCard {
	docs: SupportingDocuments;
}

const SupportingDocumentsCard: React.FC<ISupportingDocumentsCard> = ({
	docs,
}) => {
	return (
		<div className="bg-white ">
			<CardTitle title="Supporting Documents" />

			<div className="space-y-2 pl-3">
				<div className="flex items-center">
					<span className="text-brand-primary text-xs underline">
						{docs.terms}
					</span>
					<DownloadIcon className="text-brand-primary pl-1" />
				</div>
				<div className="flex items-center">
					<span className="text-brand-primary text-xs underline">
						{docs.proof}
					</span>
					<DownloadIcon className="text-brand-primary pl-1" />
				</div>
				<div className="flex items-center">
					<span className="text-brand-primary text-xs underline">
						{docs.reg}
					</span>
					<DownloadIcon className="text-brand-primary pl-1" />
				</div>
			</div>
		</div>
	);
};

export default SupportingDocumentsCard;
