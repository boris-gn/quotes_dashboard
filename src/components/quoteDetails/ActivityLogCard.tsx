import React from 'react';
import CardTitle from './CartTitle';

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
		<div className="bg-white relative">

			<CardTitle title='Activity Log' />
			<div className="relative pl-4 text-left max-w-[200px]">
				{activityLog.map((log, index) => (
					<div key={index} className="relative pl-2 pb-3 border-l border-neutral-200">
						<div className="absolute -left-[5px] top-0.5 w-2.5 h-2.5 bg-neutral-200 rounded-full"></div>
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
