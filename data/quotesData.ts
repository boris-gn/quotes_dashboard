export interface ContactInformation {
	mobilePhone?: string;
	homePhone?: string;
	email?: string;
	address?: string;
}

export interface PolicyInformation {
	policyType?: string;
	policyDescription?: string;
	coverageAmount?: string;
	deductible?: string;
}

export interface CustomerHistory {
	policyId?: string;
	type?: string;
	status?: string;
}

export interface Discount {
	type: string;
	amount: string;
}

export interface Discount {
	type: string;
	amount: string;
}

export interface QuoteBreakdown {
	premiumAmount: string;
	annualPremium: string;
	discounts: Discount[];
	totalCharges: string;
	tax: string;
	finalPremium: string;
}

export interface ExpirationDates {
	effectiveDate: string;
	expirationDate: string;
}

export interface ActivityLog {
	date: string;
	description: string;
}

export interface SupportingDocuments {
	terms: string;
	proof: string;
	reg: string;
}

export interface PersonalDetails {
	customerId: string;
	fullName: string;
	photo?: string;
	gender: string;
	occupation: string;
	contactInformation: ContactInformation;
}

export interface IQuotesData {
	quoteId: string;
	personalDetails: {
		customerId: string;
		fullName: string;
		gender: string;
		occupation: string;
		contactInformation: ContactInformation;
	};
	policyInformation: PolicyInformation;
	customerHistory: CustomerHistory[];
	quoteStatus: string;
	quoteBreakdown: QuoteBreakdown;
	expirationDates: ExpirationDates;
	supportingDocuments: SupportingDocuments[];
	activityLog: ActivityLog[];
}

export interface IQuotesList {
	quotes: IQuotesData[];
}

export const quotesData: IQuotesList = {
	quotes: [
		{
			quoteId: '09876',
			personalDetails: {
				customerId: 'CUST-34256',
				fullName: 'Theresa Heidenreich',
				gender: 'Male',
				occupation: 'Marketing Manager',
				contactInformation: {
					mobilePhone: '+1 123 456 7890',
					homePhone: '+1 123 456 7890',
					email: 'Theresa@email.com',
					address: '6470 Koepp Street, South Hillary 72456-8817',
				},
			},
			policyInformation: {
				policyType: 'Comprehensive Auto Insurance',
				policyDescription: '+1 123 456 7890',
				coverageAmount: '$50,000',
				deductible: '$500',
			},
			customerHistory: [
				{
					policyId: 'P-20231011-002',
					type: 'Health Insurance',
					status: 'Active',
				},
				{
					policyId: 'P-20230905-001',
					type: 'Home Insurance',
					status: 'Expired',
				},
			],
			quoteStatus: 'Pending Approval',
			quoteBreakdown: {
				premiumAmount: '$120 per month',
				annualPremium: '$1,400',
				discounts: [
					{ type: 'Safe Driver Discount', amount: '-$50' },
					{ type: 'Multi-Policy Discount', amount: '-$30' },
				],
				totalCharges: '$1,320',
				tax: '$20',
				finalPremium: '$1,340',
			},
			expirationDates: {
				effectiveDate: '2024-10-15',
				expirationDate: '2025-10-14',
			},
			supportingDocuments: [
				{
					terms: 'Auto Insurance Terms & Conditions.pdf',
					proof: 'Customer ID Proof.pdf',
					reg: 'Vehicle Registration Document.pdf',
				},
			],
			activityLog: [
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
						"Broker updated the quote status to 'Pending Approval.'",
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
			],
		},
	],
};
