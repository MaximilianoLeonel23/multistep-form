import { useFormStore } from '@/store/useFormStore';
import Image from 'next/image';
import React from 'react';
import { Plan } from '@/types/types';

interface Props {
	plan: Plan;
	durationOfPlan: string;
}

const PlanCard: React.FC<Props> = ({ plan, durationOfPlan }) => {
	const { icon, label, pricePerMonth, pricePerYear, id } = plan;
	const { typeOfPlan, setTypeOfPlan } = useFormStore();

	const handlePlan = () => {
		setTypeOfPlan(plan);
	};
	return (
		<article
			onClick={handlePlan}
			className={`flex flex-col justify-between items-start p-3 ${
				typeOfPlan.id === id && 'bg-neutro-alabaster'
			} border border-neutro-light-gray rounded-lg cursor-pointer hover:border-primary-purplish-blue`}
		>
			<Image src={icon} alt='arcade plan icon' />
			<div className='flex flex-col gap-1'>
				<h4 className='text-primary-marine-blue font-medium text-sm'>{label}</h4>
				<span className='text-neutro-cool-gray text-xs'>
					{durationOfPlan === 'monthly' ? `$${pricePerMonth}/mo` : `$${pricePerYear}/yr`}
				</span>
				{durationOfPlan === 'yearly' && (
					<p className='text-primary-marine-blue text-xs'>2 months free</p>
				)}
			</div>
		</article>
	);
};

export default PlanCard;
