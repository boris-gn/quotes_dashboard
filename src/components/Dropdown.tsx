import { useState, useRef, useEffect } from 'react';
import EditIcon from '../assets/icons/edit.svg?react';
import MailIcon from '../assets/icons/mail.svg?react';
import AddIcon from '../assets/icons/node-add.svg?react';
import ReminderIcon from '../assets/icons/reminder.svg?react';
import DownloadIcon from '../assets/icons/download.svg?react';
import ArrowIcon from '../assets/icons/arrow-left.svg?react';

const Dropdown: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const dropdownItems = [
		{ icon: EditIcon, label: 'Update details' },
		{ icon: AddIcon, label: 'Add Follow-Up' },
		{ icon: MailIcon, label: 'Send Mail' },
		{ icon: ReminderIcon, label: 'Send Reminder' },
		{ icon: DownloadIcon, label: 'Download Quote' },
	];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="relative w-fit" ref={dropdownRef}>
			<button
				onClick={toggleDropdown}
				type="button"
				className="flex items-center w-fit rounded-8 border border-gray-200 px-4 py-3 bg-white text-12 font-medium text-gray-500 hover:bg-gray-50 leading-133"
				aria-expanded={isOpen}
				aria-haspopup="true"
			>
				<div className="mr-2 w-6 h-6 rounded-full bg-gray-200" />
				<div className="mr-10">Boris Gevorgyan</div>
				<ArrowIcon
					className={`w-4 h-4 ${isOpen ? 'rotate-90' : 'rotate-270'}`}
				/>
			</button>

			{isOpen && (
				<div className="absolute right-0 mt-2 border border-gray-200 rounded-8 bg-white p-3">
					{dropdownItems.map((item, index) => (
						<div
							className="origin-top-right bg-white ring-1z-10 hover:bg-neutral-100"
							tabIndex={-1}
							key={index}
						>
							<button
								type="button"
								className="cursor-pointer flex items-center gap-2 w-full p-3 text-sm text-brand-primary text-12 border-b border-gray-200"
								role="menuitem"
								onClick={() => {
									alert('Send Remainder clicked');
									setIsOpen(false);
								}}
							>
								{<item.icon />}
								{item.label}
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
