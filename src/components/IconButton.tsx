interface IconButtonProps {
	icon: React.ReactNode;
	onClick: () => void;
	txt?: string; // New prop for text
	className?: string; // New prop for custom className
}

const IconButton: React.FC<IconButtonProps> = ({
	icon,
	onClick,
	txt,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			className={`flex items-center justify-center min-w-[30px] border border-gray-100 px-2 py-1.5 rounded-lg hover:cursor-pointer ${className}`}
		>
			{icon}
			{txt && <span className="ml-2">{txt}</span>}{' '}
			{/* Render text if provided */}
		</button>
	);
};

export default IconButton;
