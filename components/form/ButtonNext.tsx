import { useFormSteps, useFormStore } from '@/store/useFormStore';
import React from 'react';

interface Props {
	step: number;
}
const ButtonNext: React.FC<Props> = ({ step }) => {
	const { name, phone, email, durationOfPlan, typeOfPlan, addOns } = useFormStore();
	const { setCurrentStep } = useFormSteps();
	const handleNextStep = () => {
		if (step === 0 && name && phone && email) {
			setCurrentStep(1);
		}
		if (step === 1 && durationOfPlan && typeOfPlan) {
			setCurrentStep(2);
		}
		if (step === 2 && addOns.length >= 0) {
			setCurrentStep(3);
		}
	};
	return (
		<button
			onClick={handleNextStep}
			className=' bg-primary-marine-blue text-white py-2 px-6 rounded-lg w-fit font-medium'
		>
			Next Step
		</button>
	);
};

export default ButtonNext;
