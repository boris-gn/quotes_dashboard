export type QuoteAction = 'send' | 'edit' | 'view';

export interface Sidebar {
	id: number;
	label: string;
	className?: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	url: string;
}
