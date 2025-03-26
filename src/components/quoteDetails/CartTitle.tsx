const CardTitle = ({ title }: { title: string }) => {
	return (
		<div className="flex flex-col items-left justify-between mb-3">
			<h2 className="text-brand-primary font-bold text-base text-left">
				{title}
			</h2>
			<div className="w-[176px] mx-3 border-grey-200 h-0.5 bg-gray-200" />
		</div>
	);
};

export default CardTitle;
