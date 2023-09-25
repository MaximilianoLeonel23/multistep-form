import { useFormSteps } from '@/store/useFormStore';
import React from 'react';

interface Props {
	label: string;
	step: number;
}
const StepItem: React.FC<Props> = ({ label, step }) => {
	const { currentStep } = useFormSteps();
	return (
		<div className='flex items-center gap-4'>
			<div
				className={`grid place-content-center w-8 h-8 border  ${
					step === currentStep
						? 'text-primary-marine-blue bg-primary-light-blue border-primary-light-blue'
						: 'text-neutro-alabaster border-neutro-light-gray'
				} text-sm rounded-full`}
			>
				{step + 1}
			</div>
			<div className='hidden md:flex flex-col'>
				<span className='text-neutro-light-gray text-xs'>STEP {step + 1}</span>
				<p className='text-white font-medium text-sm'>{label.toUpperCase()}</p>
			</div>
		</div>
	);
};

export default StepItem;
