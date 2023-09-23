import { AddOn } from '@/types/types';

export const addons: AddOn[] = [
	{
		label: 'Online service',
		description: 'Access to multiplayer games',
		pricePerMonth: 1,
		pricePerYear: 10,
		id: 'online service',
	},
	{
		label: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		pricePerMonth: 2,
		pricePerYear: 20,
		id: 'larger storage',
	},
	{
		label: 'Customizable profile',
		description: 'Custom theme on your profile',
		pricePerMonth: 2,
		pricePerYear: 20,
		id: 'customizable profile',
	},
];
