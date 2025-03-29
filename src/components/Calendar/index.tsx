import { useState } from 'react';
import Calendar from 'react-calendar';

import LeftArrow from '../../assets/icons/arrow-left.svg?react';
import RightArrow from '../../assets/icons/arrow-right.svg?react';

import './CustomCalendar.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Event = {
	id: number;
	occasion: string;
	for_date: string; // Date as string (ISO format)
	event_name: string; // Color code for the event
	is_restricted: boolean; // Restricted or not
};

type EventsData = {
	meetings: Event[];
	deadlines: Event[];
	renewals: Event[];
};

const events: EventsData = {
	meetings: [
		{
			id: 1,
			occasion: 'Project Kickoff Meeting',
			for_date: '2025-04-01',
			event_name: 'meeting',
			is_restricted: false,
		},
		{
			id: 2,
			occasion: 'Sprint Review',
			for_date: '2025-04-10',
			event_name: 'meeting',
			is_restricted: true,
		},
	],
	deadlines: [
		{
			id: 3,
			occasion: 'Final Report Submission',
			for_date: '2025-04-05',
			event_name: 'deadline',
			is_restricted: false,
		},
		{
			id: 4,
			occasion: 'Code Freeze',
			for_date: '2025-04-12',
			event_name: 'deadline',
			is_restricted: true,
		},
	],
	renewals: [
		{
			id: 5,
			occasion: 'Domain Renewal',
			for_date: '2025-04-07',
			event_name: 'renewal',
			is_restricted: false,
		},
		{
			id: 6,
			occasion: 'SSL Certificate Renewal',
			for_date: '2025-04-15',
			event_name: 'renewal',
			is_restricted: true,
		},
	],
};

const CustomCalendar = () => {
	const [value, setValue] = useState<Value>(new Date());

	const tileClassName = ({ date, view }: { date: Date; view: string }) => {
		if (view === 'month') {
			const isoDate = date.toISOString().split('T')[0];
			const event = Object.values(events)
				.flat()
				.find((e) => e.for_date === isoDate);

			if (event) {
				return `${event.event_name}`;
			}
		}
		return '';
	};

	return (
		<>
			<Calendar
				tileClassName={tileClassName}
				onChange={setValue}
				value={value}
				prevLabel={<LeftArrow />}
				nextLabel={<RightArrow />}
			/>
			<div className="flex gap-2 justify-center mt-[10px]">
				<div className="text-gray-500 text-12 flex gap-[10px] items-center">
					<div className="w-4 h-4 bg-neutral-50 rounded-full" />
					Meetings
				</div>
				<div className="text-gray-500 text-12 flex gap-[10px] items-center">
					<div className="w-4 h-4 bg-error-200 rounded-full" />
					Deadlines
				</div>
				<div className="text-gray-500 text-12 flex gap-[10px] items-center">
					<div className="w-4 h-4 bg-warning-200 rounded-full" />
					Renewals
				</div>
			</div>
		</>
	);
};

export default CustomCalendar;
