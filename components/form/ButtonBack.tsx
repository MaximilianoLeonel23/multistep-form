import { useFormSteps } from '@/store/useFormStore';
import React from 'react';

interface Props {
	step: number;
}
const ButtonBack: React.FC<Props> = ({ step }) => {
	const { currentStep, setCurrentStep } = useFormSteps();
	return (
		<button
			onClick={() => {
				if (currentStep === step) {
					setCurrentStep(step - 1);
				} else {
					return;
				}
			}}
			className='bg-none border-none text-neutro-cool-gray hover:text-primary-marine-blue font-medium'
		>
			Go back
		</button>
	);
};

export default ButtonBack;
