'use client';
import { useFormSteps, useFormStore } from '@/store/useFormStore';
import React, { useState } from 'react';
import Successful from './Successful';

const SummaryForm = () => {
	const { currentStep, setCurrentStep } = useFormSteps();
	const [successful, setSuccessful] = useState(false);
	const { name, email, phone, durationOfPlan, addOns, typeOfPlan } = useFormStore();

	const handleSubmit = () => {
		if (name && email && phone && durationOfPlan && addOns && typeOfPlan) {
			setSuccessful(true);
		}
		return;
	};

	const totalBilling =
		durationOfPlan === 'monthly'
			? typeOfPlan.pricePerMonth + addOns.reduce((acc, addOn) => acc + addOn.pricePerMonth, 0)
			: typeOfPlan.pricePerYear + addOns.reduce((acc, addOn) => acc + addOn.pricePerYear, 0);

	if (successful) return <Successful />;

	return (
		<div className='h-full flex flex-col justify-between'>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-primary-marine-blue text-2xl font-bold'>Finishing up</h1>
					<p className='text-neutro-cool-gray text-sm'>
						Double-check everything looks OK before confirming
					</p>
				</div>
				<div className='flex flex-col gap-4 bg-neutro-magnolia rounded-lg p-6'>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-1'>
							<h4 className='text-primary-marine-blue font-semibold'>
								{typeOfPlan.label.charAt(0).toUpperCase() + typeOfPlan.label.slice(1)} (
								{durationOfPlan.charAt(0).toUpperCase() + durationOfPlan.slice(1)})
							</h4>
							<button
								onClick={() => setCurrentStep(1)}
								className='w-fit text-neutro-cool-gray hover:text-primary-purplish-blue text-sm underline'
							>
								Change
							</button>
						</div>
						<span className='text-primary-marine-blue font-semibold'>
							$
							{durationOfPlan === 'monthly'
								? `${typeOfPlan.pricePerMonth}/mo`
								: `${typeOfPlan.pricePerYear}/yr`}
						</span>
					</div>
					{addOns.length > 0 && (
						<>
							<div className='h-px w-full bg-neutro-light-gray'></div>
							{addOns.map((addOn, idx) => {
								return (
									<div key={idx} className='flex items-center justify-between'>
										<p className='text-neutro-cool-gray text-sm'>{addOn.label}</p>
										<span className='text-primary-marine-blue text-sm'>
											+$
											{durationOfPlan === 'monthly' ? `${addOn.pricePerMonth}/mo` : `${addOn.pricePerYear}/yr`}
										</span>
									</div>
								);
							})}
						</>
					)}
				</div>
				<div className='flex items-center justify-between px-6'>
					<p className='text-neutro-cool-gray text-sm'>
						Total ({durationOfPlan === 'monthly' ? 'per month' : 'per year'})
					</p>
					<span className='text-primary-purplish-blue font-bold'>+${totalBilling}/mo</span>
				</div>
			</div>

			<div className='flex justify-between items-center'>
				<button
					onClick={() => {
						if (currentStep === 3) {
							setCurrentStep(2);
						} else {
							return;
						}
					}}
					className='bg-none border-none text-neutro-cool-gray hover:text-primary-marine-blue font-medium'
				>
					Go back
				</button>
				<button
					onClick={handleSubmit}
					className='bg-primary-purplish-blue hover:bg-primary-pastel-blue transition-colors duration-300 text-white py-2 px-6 rounded-lg w-fit font-medium'
				>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default SummaryForm;
