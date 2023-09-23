import { useFormSteps, useFormStore } from '@/store/useFormStore';
import React from 'react';
import { addons } from './addons';
import AddOnCard from './AddOnCard';
const AddOnsForm = () => {
	const { currentStep, setCurrentStep } = useFormSteps();
	const { durationOfPlan, addOns, setAddOns } = useFormStore();

	const handleAddOns = (id: string) => {
		const foundAddOn = addOns.includes(id);
		if (!foundAddOn) {
			setAddOns([...addOns, id]);
		} else {
			const updatedAddOns = addOns.filter(addOn => addOn !== id);
			setAddOns(updatedAddOns);
		}
	};
	return (
		<div className='h-full flex flex-col justify-between'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col'>
					<h1 className='text-primary-marine-blue text-2xl font-bold'>Pick add-ons</h1>
					<p className='text-neutro-cool-gray text-sm'>Add-ons help enhance your gaming experience</p>
				</div>
				<div className='flex flex-col gap-4'>
					{addons.map((addOn, idx) => {
						return (
							<AddOnCard
								key={idx}
								addOn={addOn}
								durationOfPlan={durationOfPlan}
								handleAddOns={handleAddOns}
							/>
						);
					})}
				</div>
			</div>

			<div className='flex justify-between items-center'>
				<button
					onClick={() => {
						if (currentStep === 2) {
							setCurrentStep(1);
						} else {
							return;
						}
					}}
					className='bg-none border-none text-neutro-cool-gray font-medium'
				>
					Go back
				</button>
				<button
					onClick={() => setCurrentStep(3)}
					className='bg-primary-marine-blue text-white py-3 px-6 rounded-lg w-fit font-medium'
				>
					Next Step
				</button>
			</div>
		</div>
	);
};

export default AddOnsForm;
