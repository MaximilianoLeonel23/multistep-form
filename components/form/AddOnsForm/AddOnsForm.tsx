import { useFormSteps, useFormStore } from '@/store/useFormStore';
import React from 'react';
import { addons } from './addons';
import AddOnCard from './AddOnCard';
import { AddOn } from '@/types/types';
import ButtonBack from '../ButtonBack';
import ButtonNext from '../ButtonNext';
const AddOnsForm = () => {
	const { durationOfPlan, addOns, setAddOns } = useFormStore();

	const handleAddOns = (addOn: AddOn) => {
		const foundAddOn = addOns.some(existingAddOn => existingAddOn.id === addOn.id);
		console.log(foundAddOn);
		if (!foundAddOn) {
			setAddOns([...addOns, addOn]);
		} else {
			const updatedAddOns = addOns.filter(existingAddOn => existingAddOn.id !== addOn.id);
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

			<div className='hidden md:flex justify-between items-center'>
				<ButtonBack step={2} />
				<ButtonNext step={2} />
			</div>
		</div>
	);
};

export default AddOnsForm;
