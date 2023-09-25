import React from 'react';
import { plans } from './plansData';
import { useFormSteps, useFormStore } from '@/store/useFormStore';
import PlanCard from './PlanCard';
import ButtonBack from '../ButtonBack';
import ButtonNext from '../ButtonNext';

const SelectPlanForm: React.FC = () => {
	const { durationOfPlan, setDurationOfPlan } = useFormStore();
	const handleDurationOfPlan = () => {
		if (durationOfPlan === 'monthly') {
			setDurationOfPlan('yearly');
		} else {
			setDurationOfPlan('monthly');
		}
	};

	return (
		<div className='h-full flex flex-col justify-between'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col'>
					<h1 className='text-primary-marine-blue text-2xl font-bold'>Select a plan</h1>
					<p className='text-neutro-cool-gray text-sm'>
						You have the option of monthly or yearly billing.
					</p>
				</div>
				<div className='min-h-[9rem] flex flex-col md:grid grid-cols-3 gap-2'>
					{plans.map((plan, idx) => {
						return <PlanCard key={idx} plan={plan} durationOfPlan={durationOfPlan} />;
					})}
				</div>
				<div className='bg-neutro-magnolia flex items-center justify-center gap-4 py-3 rounded-lg text-sm font-medium'>
					<span
						className={`${
							durationOfPlan === 'monthly' ? 'text-primary-marine-blue' : 'text-neutro-cool-gray'
						} `}
					>
						Monthly
					</span>
					<button
						onClick={handleDurationOfPlan}
						className={`relative h-6 w-12 rounded-full cursor-pointer bg-primary-marine-blue`}
					>
						<div
							className={`h-6 w-6 bg-neutro-magnolia rounded-full scale-[0.7] ${
								durationOfPlan === 'monthly' ? 'translate-x-0' : 'translate-x-full'
							} ease-in-out transition-transform duration-300`}
						></div>
					</button>
					<span
						className={`${
							durationOfPlan === 'yearly' ? 'text-primary-marine-blue' : 'text-neutro-cool-gray'
						} `}
					>
						Yearly
					</span>
				</div>
			</div>

			<div className='hidden md:flex justify-between items-center'>
				<ButtonBack step={1} />
				<ButtonNext step={1} />
			</div>
		</div>
	);
};

export default SelectPlanForm;
