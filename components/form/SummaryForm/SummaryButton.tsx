import { useFormSteps, useFormStore } from '@/store/useFormStore';
import React from 'react';

interface Props {
	successful: boolean;
	setSuccessful: (state: boolean) => void;
}
const SummaryButton: React.FC<Props> = ({ successful, setSuccessful }) => {
	const { name, email, phone, durationOfPlan, addOns, typeOfPlan, resetForm } = useFormStore();
	const { currentStep, setCurrentStep } = useFormSteps();

	const handleSubmit = () => {
		if (name && email && phone && durationOfPlan && addOns && typeOfPlan) {
			setSuccessful(true);
			setTimeout(() => {
				setSuccessful(false);
				resetForm();
				setCurrentStep(0);
			}, 5000);
		}
	};

	return (
		<button
			onClick={handleSubmit}
			className='bg-primary-purplish-blue hover:bg-primary-pastel-blue transition-colors duration-300 text-white py-2 px-6 rounded-lg w-fit font-medium'
		>
			Confirm
		</button>
	);
};

export default SummaryButton;
