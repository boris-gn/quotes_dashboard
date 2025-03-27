import IconButton from './IconButton';
import Dropdown from './Dropdown';
import BellIcon from '../assets/icons/bell.svg?react';

const Header = () => {
	return (
		<header className="flex justify-between items-top mb-4">
			<div>
				<h1 className="text-48 text-brand-primary font-bold racking-minus-1 leading-117">
					Page name
				</h1>
				<p className="leading-115 text-gray-500 text-base font-normal tracking-normal">
					Breadcrumb
				</p>
			</div>
			<div className="flex justify-between gap-3">
				<IconButton
					className="w-[50px] h-[50px]"
					icon={<BellIcon className="w-6 h-6" />}
					onClick={() => {}}
				/>
				<Dropdown />
			</div>
		</header>
	);
};

export default Header;
