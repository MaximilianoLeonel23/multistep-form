import { useFormStore } from '@/store/useFormStore';
import { AddOn } from '@/types/types';
import React from 'react';

interface Props {
	addOn: AddOn;
	durationOfPlan: string;
	handleAddOns: (addOn: AddOn) => void;
}
const AddOnCard: React.FC<Props> = ({ addOn, durationOfPlan, handleAddOns }) => {
	const { label, description, pricePerMonth, pricePerYear, id } = addOn;
	const { addOns } = useFormStore();

	const isChecked = addOns.some(addOn => addOn.id === id);

	return (
		<article
			onClick={() => handleAddOns(addOn)}
			className={`flex items-center justify-between px-4 py-4 border  ${
				isChecked
					? 'bg-neutro-alabaster border-primary-purplish-blue'
					: 'bg-none border-neutro-light-gray'
			}  hover:border-primary-purplish-blue rounded-lg cursor-pointer`}
		>
			<div className='flex items-center gap-4'>
				<input
					checked={isChecked}
					type='checkbox'
					value={id}
					className='w-4 h-4 rounded-sm border border-neutro-light-gray checked:text-primary-purplish-blue focus:ring-0'
				/>
				<div className='flex flex-col '>
					<h4 className='text-primary-marine-blue font-medium text-sm'>{label}</h4>
					<p className='text-neutro-cool-gray text-xs'>{description}</p>
				</div>
			</div>
			<span className='text-primary-purplish-blue text-xs'>
				{durationOfPlan === 'monthly' ? `+$${pricePerMonth}/mo` : `+$${pricePerYear}/yr`}
			</span>
		</article>
	);
};

export default AddOnCard;
