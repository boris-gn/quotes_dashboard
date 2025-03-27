import IconButton from './IconButton';
import Dropdown from './Dropdown';
import BellIcon from '../assets/icons/bell.svg?react';

const Header = () => {
	return (
		<>
			<div className='hidden md:block'>
				<h1 className="text-48 text-brand-primary font-bold racking-minus-1 leading-117">
					Page name
				</h1>
				<p className="leading-115 text-gray-500 text-base font-normal tracking-normal">
					Breadcrumb
				</p>
			</div>
			<div className="w-full md:w-auto flex flex-row-reverse md:flex-row md:justify-end justify-between gap-3 ">
				<IconButton
					className="md:w-12 md:h-12 w-10 h-10 !rounded-full !md:rounded-lg"
					icon={<BellIcon className="w-6 h-6" />}
					onClick={() => {}}
				/>
				<Dropdown />
			</div>
			
		</>
	);
};

export default Header;
