import Image from 'next/image';
import React from 'react';

interface Props {
	plan: {
		icon: string;
		label: string;
		pricePerMonth: string;
		pricePerYear: string;
	};
	durationOfPlan: string;
}
const PlanCard: React.FC<Props> = ({ plan, durationOfPlan }) => {
	const { icon, label, pricePerMonth, pricePerYear } = plan;
	return (
		<article className='flex flex-col justify-between items-start p-3 border border-neutro-light-gray rounded-lg'>
			<Image src={icon} alt='arcade plan icon' />
			<div className='flex flex-col gap-1'>
				<h4 className='text-primary-marine-blue font-medium text-sm'>{label}</h4>
				<span className='text-neutro-cool-gray text-xs'>
					{durationOfPlan === 'monthly' ? pricePerMonth : pricePerYear}
				</span>
				{durationOfPlan === 'yearly' && (
					<p className='text-primary-marine-blue text-xs'>2 months free</p>
				)}
			</div>
		</article>
	);
};

export default PlanCard;
