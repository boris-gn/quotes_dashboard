import { useState, useRef, useEffect } from 'react';
import EditIcon from '../assets/icons/edit.svg?react';
import MailIcon from '../assets/icons/mail.svg?react';
import AddIcon from '../assets/icons/node-add.svg?react';
import ReminderIcon from '../assets/icons/reminder.svg?react';
import DownloadIcon from '../assets/icons/download.svg?react';

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
		<div className="relative inline-block text-left" ref={dropdownRef}>
			{/* Dropdown Trigger */}
			<button
				onClick={toggleDropdown}
				type="button"
				className="inline-flex justify-center items-center w-36 rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
				aria-expanded={isOpen}
				aria-haspopup="true"
			>
				Actions
				<svg
					className="-mr-1 ml-2 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute right-0">
					{dropdownItems.map((item, index) => (
						<div
							className="origin-top-right   mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="menu-button"
							tabIndex={-1}
							key={index}
						>
							{/* Send Remainder */}
							<button
								type="button"
								className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
