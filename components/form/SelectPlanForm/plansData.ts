import arcadeIcon from '@/assets/images/icon-arcade.svg';
import advancedIcon from '@/assets/images/icon-advanced.svg';
import proIcon from '@/assets/images/icon-pro.svg';
import { Plan } from '@/types/types';

export const plans: Plan[] = [
	{
		label: 'Arcade',
		pricePerMonth: '$9/mo',
		pricePerYear: '$90/yr',
		icon: arcadeIcon,
		id: 'arcade',
	},
	{
		label: 'Advanced',
		pricePerMonth: '$12/mo',
		pricePerYear: '$120/yr',
		icon: advancedIcon,
		id: 'advaced',
	},
	{
		label: 'Pro',
		pricePerMonth: '$15/mo',
		pricePerYear: '$150/yr',
		icon: proIcon,
		id: 'pro',
	},
];
