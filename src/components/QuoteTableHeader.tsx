import IconButton from './IconButton';
import FilterIcon from '../assets/icons/filter.svg?react';

interface QuoteHeaderProps {
	title: string;
}

export const QuoteHeader: React.FC<QuoteHeaderProps> = ({ title }) => {
	return (
		<div className="flex justify-between items-center mb-4">
			<div className="line-chart-8 text-xl font-bold text-gray-500">
				{title}
			</div>
			<div className="filter">
				<IconButton icon={<FilterIcon />} onClick={() => {}} />
			</div>
		</div>
	);
};
