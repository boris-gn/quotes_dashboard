import withContainer from './Container';
import IconButton from './IconButton';
import InsuranceTypeBadge from './InsuranceTypeBadge';
import MailIcon from '../assets/icons/mail.svg?react';
import EditIcon from '../assets/icons/edit.svg?react';
import EyeIcon from '../assets/icons/view.svg?react';

const TableSingleItem: React.FC = () => {

	return (
		<div className='flex flex-col gap-2'>
			<div className='flex gap-x-8 gap-y-2 flex-wrap'>
				<div className='flex gap-1'>
					<span className='font-bold leading-6'>Quote ID:</span>
					<span className='font-normal leading-6'>#09876</span>
				</div>
				<div className='flex gap-1'>
					<span className='font-bold leading-6'>Status</span>
					<span className='font-normal leading-6'>#09876</span>
				</div>
			</div>
			<div className='flex gap-1'>
				<span className='font-bold leading-6'>Client Name:</span>
				<span className='font-normal leading-6'>Theresa Heidenreich</span>
			</div>
			<div className='flex gap-1'>
				<span className='font-bold leading-6'>Type:</span>
				<span className='font-normal leading-6'><InsuranceTypeBadge type='Life'/></span>
			</div>
			<div className='flex gap-1'>
				<span className='font-bold leading-6'>Premium Amount:</span>
				<span className='font-normal leading-6'>$ 489.00</span>
			</div>
			<div className='flex gap-1'>
				<span className='font-bold leading-6'>Expiry Date:</span>
				<span className='font-normal leading-6'>28.12.2030</span>
			</div>
			<div className='flex gap-1'>
				<span className='font-bold leading-6'>Last Updated:</span>
				<span className='font-normal leading-6'>23.10.2024</span>
			</div>
			<div className='flex gap-2'>
				<IconButton className='w-1/2' icon={<MailIcon />} label='Email' onClick={() => {}} />
				<IconButton className='w-1/2' icon={<EditIcon />} label='Edit' onClick={() => {}} />
			</div>
			<IconButton className='w-full mt-2' icon={<EyeIcon />} label='View' onClick={() => {}} />
		</div>
	);
};

const TableSingleItemContainer = withContainer(TableSingleItem);
export default TableSingleItemContainer;
