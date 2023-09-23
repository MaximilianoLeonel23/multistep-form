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
							<h4 className='text-primary-marine-blue font-semibold'>Arcade (Monthly)</h4>
							<button
								onClick={() => setCurrentStep(1)}
								className='w-fit text-neutro-cool-gray hover:text-primary-purplish-blue text-sm underline'
							>
								Change
							</button>
						</div>
						<span className='text-primary-marine-blue font-semibold'>$9/mo</span>
					</div>
					<div className='h-px w-full bg-neutro-light-gray'></div>
					<div className='flex items-center justify-between'>
						<p className='text-neutro-cool-gray text-sm'>Online service</p>
						<span className='text-primary-marine-blue text-sm'>+$1/mo</span>
					</div>
					<div className='flex items-center justify-between'>
						<p className='text-neutro-cool-gray text-sm'>Larger storage</p>
						<span className='text-primary-marine-blue text-sm'>+$2/mo</span>
					</div>
				</div>
				<div className='flex items-center justify-between px-6'>
					<p className='text-neutro-cool-gray text-sm'>Total (per month)</p>
					<span className='text-primary-purplish-blue font-bold'>+$12/mo</span>
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
					className='bg-none border-none text-neutro-cool-gray font-medium'
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
