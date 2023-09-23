import React from 'react';
import { plans } from './plansData';
import { useFormSteps, useFormStore } from '@/store/useFormStore';
import PlanCard from './PlanCard';

const SelectPlanForm: React.FC = () => {
	const { typeOfPlan, durationOfPlan, setDurationOfPlan } = useFormStore();
	const { currentStep, setCurrentStep } = useFormSteps();
	const handleDurationOfPlan = () => {
		if (durationOfPlan === 'monthly') {
			setDurationOfPlan('yearly');
		} else {
			setDurationOfPlan('monthly');
		}
		console.log(durationOfPlan);
	};

	const handlePlansForm = () => {
		console.log(durationOfPlan, typeOfPlan);
		if (durationOfPlan && typeOfPlan) {
			setCurrentStep(2);
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
				<div className='min-h-[9rem] grid grid-cols-3 gap-2'>
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

			<div className='flex justify-between items-center'>
				<button
					onClick={() => {
						if (currentStep === 1) {
							setCurrentStep(0);
						} else {
							return;
						}
					}}
					className='bg-none border-none text-neutro-cool-gray font-medium'
				>
					Go back
				</button>
				<button
					onClick={handlePlansForm}
					className=' bg-primary-marine-blue text-white py-3 px-6 rounded-lg w-fit font-medium'
				>
					Next Step
				</button>
			</div>
		</div>
	);
};

export default SelectPlanForm;
