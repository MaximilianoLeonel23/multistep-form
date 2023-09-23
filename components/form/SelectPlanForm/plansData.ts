import arcadeIcon from '@/assets/images/icon-arcade.svg';
import advancedIcon from '@/assets/images/icon-advanced.svg';
import proIcon from '@/assets/images/icon-pro.svg';
import { Plan } from '@/types/types';

export const plans: Plan[] = [
	{
		label: 'Arcade',
		pricePerMonth: 9,
		pricePerYear: 90,
		icon: arcadeIcon,
		id: 'arcade',
	},
	{
		label: 'Advanced',
		pricePerMonth: 12,
		pricePerYear: 120,
		icon: advancedIcon,
		id: 'advaced',
	},
	{
		label: 'Pro',
		pricePerMonth: 15,
		pricePerYear: 150,
		icon: proIcon,
		id: 'pro',
	},
];
