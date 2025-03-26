import { useState } from 'react';
import { Quote } from '../features/quotes/types';
import { QuoteHeader } from './QuoteTableHeader';
import { QuoteColumnHeaders } from './QuoteColumnHeaders';
import { QuoteRow } from './QuoteTableRow';
import { QuotePagination } from './QuotePagination';
import withContainer from '../hocs/Container';

interface QuotesTableProps {
	quotes: Quote[];
	loading?: boolean;
}

const QuotesTable: React.FC<QuotesTableProps> = ({ quotes, loading }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	const paginatedQuotes = quotes?.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<div>
			<QuoteHeader title="Quotes" />
			<div className="overflow-x-auto pb-1.5">
				<table className="w-full !border-separate !border-spacing-y-3">
					<QuoteColumnHeaders />
					<tbody>
						{paginatedQuotes?.map((quote, index) => (
							<QuoteRow
								loading={loading}
								key={quote.id}
								quote={quote}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</div>
			<QuotePagination
				currentPage={currentPage}
				totalPages={Math.ceil((quotes?.length || 0) / itemsPerPage)}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
};

const EnhancedQuotesTable = withContainer(QuotesTable);
export default EnhancedQuotesTable;
