import { useFormSteps, useSuccessful } from '@/store/useFormStore';
import React from 'react';
import ButtonBack from './ButtonBack';
import SummaryButton from './SummaryForm/SummaryButton';
import ButtonNext from './ButtonNext';

const NavigationMobile = () => {
	const { currentStep } = useFormSteps();
	const { successful, setSuccessful } = useSuccessful();
	return (
		<div className='absolute bottom-0 left-0 w-full p-4 bg-neutro-white flex items-center md:hidden'>
			{currentStep === 0 && (
				<div className='w-full flex items-center justify-end'>
					<ButtonNext step={0} />
				</div>
			)}
			{currentStep === 1 && (
				<div className='w-full flex items-center justify-between'>
					<ButtonBack step={1} />
					<ButtonNext step={1} />
				</div>
			)}
			{currentStep === 2 && (
				<div className='w-full flex items-center justify-between'>
					<ButtonBack step={2} />
					<ButtonNext step={2} />
				</div>
			)}
			{currentStep === 3 && (
				<div className='w-full flex items-center justify-between'>
					<ButtonBack step={3} />
					<SummaryButton successful={successful} setSuccessful={setSuccessful} />
				</div>
			)}
		</div>
	);
};

export default NavigationMobile;
