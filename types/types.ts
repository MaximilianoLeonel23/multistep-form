export interface Plan {
	label: string;
	pricePerMonth: number;
	pricePerYear: number;
	icon: string;
	id: string;
}

export interface AddOn {
	label: string;
	description: string;
	pricePerMonth: number;
	pricePerYear: number;
	id: string;
}
