'use client';
import React from 'react';
import { useFormSteps } from '@/store/useFormStore';
import BasicForm from './BasicForm';
import SelectPlanForm from './SelectPlanForm/SelectPlanForm';

const FormLayout = () => {
	const { currentStep } = useFormSteps();

	return (
		<section className='basis-2/3 px-16 pt-8 pb-4'>
			{currentStep === 0 && <BasicForm />}
			{currentStep === 1 && <SelectPlanForm />}
		</section>
	);
};

export default FormLayout;
