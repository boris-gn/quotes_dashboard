import React from 'react';
import { Quote } from '../features/quotes/types';
import InsuranceTypeBadge from './InsuranceTypeBadge';
import StatusBadge from './StatusBadge';
import { QuoteActions } from './QuoteActions';

interface QuoteRowProps {
	quote: Quote; // Made optional to handle loading state
	index: number;
	loading?: boolean; // Added loading prop
}

export const QuoteRow: React.FC<QuoteRowProps> = ({
	quote,
	loading = false,
}) => {
	return (
		<tr
			className={`${
				!loading && 'hover:bg-gray-10'
			} bg-white items-center h-[40px]`}
		>
			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
				) : (
					<div>{quote?.id}</div>
				)}
			</td>

			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
				) : (
					<div>{quote?.clientName}</div>
				)}
			</td>

			<td>
				{loading ? (
					<div className="h-6 w-12 bg-gray-200 animate-pulse rounded-full"></div>
				) : (
					<InsuranceTypeBadge type={quote.type} />
				)}
			</td>

			<td>
				{loading ? (
					<div className="h-6 w-12 bg-gray-200 animate-pulse rounded-full"></div>
				) : (
					<StatusBadge status={quote.status} />
				)}
			</td>

			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
				) : (
					`$ ${quote?.premiumAmount.toFixed(2)}`
				)}
			</td>

			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
				) : (
					quote?.expireDate
				)}
			</td>

			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
				) : (
					quote?.lastUpdated
				)}
			</td>

			<td>
				{loading ? (
					<div className="h-6 w-16 bg-gray-200 animate-pulse rounded"></div>
				) : (
					<QuoteActions />
				)}
			</td>
		</tr>
	);
};
