import { StatusType } from '../../components/StatusBadge';
import { InsuranceType } from '../../components/InsuranceTypeBadge';

export type QuoteAction = 'send' | 'edit' | 'view';

export interface Quote {
	id: string;
	clientName: string;
	type: InsuranceType;
	status: StatusType;
	premiumAmount: number;
	expireDate: string;
	lastUpdated: string;
}
