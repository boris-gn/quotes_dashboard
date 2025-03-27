import IconButton from '../IconButton';

interface ActionButtonsProps {
	actions?: {
		icon?: React.ReactNode;
		text: string;
	}[];
	onActionClick?: (action: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
	actions,
	onActionClick,
}) => {
	return (
		<div className="flex items-center space-x-2  justify-center">
			{actions?.map((action, index) => (
				<div
					key={index}
					className="w-[200px] justify-center flex items-center gap-2 cursor-pointer border border-gray-100 hover:bg-gray-100 rounded-md py-1 px-2"
					onClick={() => onActionClick && onActionClick(action.text)}
				>
					<IconButton className='border-none' icon={action.icon} onClick={() => {}} />
					<span>{action.text}</span>
				</div>
			))}
		</div>
	);
};

export default ActionButtons;