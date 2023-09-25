import { useFormSteps } from '@/store/useFormStore';
import React from 'react';
import BasicForm from './BasicForm/BasicForm';
import SelectPlanForm from './SelectPlanForm/SelectPlanForm';
import AddOnsForm from './AddOnsForm/AddOnsForm';
import SummaryForm from './SummaryForm/SummaryForm';

const FormLayoutMobile = () => {
	const { currentStep } = useFormSteps();
	return (
		<section className='flex items-center justify-center bg-neutro-white rounded-lg z-20 p-8 mx-4 min-h-[50vh] drop-shadow-soft'>
			{currentStep === 0 && <BasicForm />}
			{currentStep === 1 && <SelectPlanForm />}
			{currentStep === 2 && <AddOnsForm />}
			{currentStep === 3 && <SummaryForm />}
		</section>
	);
};

export default FormLayoutMobile;
