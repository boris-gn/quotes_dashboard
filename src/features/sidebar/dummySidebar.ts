import ChartIcon from '../../assets/icons/chart.svg?react';
import HomeIcon from '../../assets/icons/home.svg?react';
import DocumentIcon from '../../assets/icons/document.svg?react';
import PolicyIcon from '../../assets/icons/policy.svg?react';
import SettingsIcon from '../../assets/icons/setting.svg?react';
import UserGroupIcon from '../../assets/icons/user-group.svg?react';

import { Sidebar } from './sidebarItemTypes';

export const sidebar: Sidebar[] = [
	{
		id: 0,
		label: 'Home',
		icon: HomeIcon,
		className: '[&>path]:stroke-white',
		url: '/',
	},
	{
		id: 1,
		label: 'Quotes',
		icon: DocumentIcon,
		className: '[&>path]:stroke-white',
		url: '/quotes',
	},
	{
		id: 2,
		label: 'Policies',
		icon: PolicyIcon,
		className: '[&>path]:stroke-white',
		url: '/policies',
	},
	{
		id: 3,
		label: 'Analytics',
		icon: ChartIcon,
		className: '[&>*]:stroke-white',
		url: '/analytics',
	},
	{
		id: 4,
		label: 'Users',
		icon: UserGroupIcon,
		className: '[&>*]:stroke-white',
		url: '/users',
	},
	{
		id: 5,
		label: 'Settings',
		icon: SettingsIcon,
		className: '[&>*]:stroke-white',
		url: '/settings',
	},
];
