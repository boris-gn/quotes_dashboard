import { useState } from 'react';
import { Quote } from '../features/quotes/types';
import { QuoteHeader } from './QuoteTableHeader';
import { QuoteColumnHeaders } from './QuoteColumnHeaders';
import { QuoteRow } from './QuoteTableRow';
import { QuotePagination } from './QuotePagination';
import withContainer from './Container';
import TableSingleItem from './TableSingleItem';

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
		<>
			<QuoteHeader title="Quotes" />
			<div className='block md:hidden border-b border-gray-100 absolute left-0 right-0' />
			<TableSingleItem className='mt-8 md:hidden block' />
			<div className="hidden md:block overflow-x-auto pb-1.5">
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
				className='hidden md:flex'
				currentPage={currentPage}
				totalPages={Math.ceil((quotes?.length || 0) / itemsPerPage)}
				onPageChange={setCurrentPage}
			/>
		</>
	);
};

const EnhancedQuotesTable = withContainer(QuotesTable);
export default EnhancedQuotesTable;
