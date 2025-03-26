import React from 'react';

const ActivityLogCard: React.FC = () => {
	const activityLog = [
		{
			date: '20-10-2023',
			description:
				'Sarah Johnson requested a quote update for adding rental car coverage.',
		},
		{
			date: '18-10-2023',
			description:
				'Broker sent a follow-up email for quote confirmation.',
		},
		{
			date: '16-10-2023',
			description: 'Quote created and sent to Sarah Johnson.',
		},
		{
			date: '15-10-2023',
			description:
				'Broker updated the quote status to "Pending Approval."',
		},
		{
			date: '14-10-2023',
			description:
				"Sarah Johnson's request for a quote was received via the company's website form.",
		},
		{
			date: '13-10-2023',
			description:
				'Initial quote details entered into the system by Broker John Peterson.',
		},
		{
			date: '12-10-2023',
			description:
				"System notified broker of Sarah Johnson's expired auto policy.",
		},
		{
			date: '11-10-2023',
			description:
				"Sarah Johnson's health insurance policy successfully renewed.",
		},
	];

	return (
		<div className="bg-white border border-neutral-200 rounded-lg p-3 relative">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brand-primary font-bold text-base">
					Activity Log
				</h2>
				<hr className="flex-grow mx-3 border-neutral-200" />
			</div>
			<div className="relative pl-4">
				<div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-200"></div>
				{activityLog.map((log, index) => (
					<div key={index} className="relative pl-4 mb-3">
						<div className="absolute left-0 top-2 w-2.5 h-2.5 bg-neutral-200 rounded-full"></div>
						<div className="text-brand-primary text-[10px]">
							{log.date}
						</div>
						<div className="text-brand-primary text-[10px] mt-0.5">
							{log.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActivityLogCard;
