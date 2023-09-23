'use client';
import React, { useEffect } from 'react';
import { useFormSteps, useFormStore } from '@/store/useFormStore';
import BasicForm from './BasicForm';
import SelectPlanForm from './SelectPlanForm/SelectPlanForm';
import AddOnsForm from './AddOnsForm/AddOnsForm';
import SummaryForm from './SummaryForm';

const FormLayout = () => {
	const { currentStep } = useFormSteps();
	const { name, email, phone, durationOfPlan, addOns, typeOfPlan } = useFormStore();

	useEffect(() => {
		const formData = localStorage.getItem('formData');
		if (formData) {
			const { name, email, phone, durationOfPlan, addOns, typeOfPlan } = JSON.parse(formData);
			useFormStore.setState(prevState => ({
				...prevState,
				name,
				email,
				phone,
				durationOfPlan,
				addOns,
				typeOfPlan,
			}));
		}
	}, []);

	useEffect(() => {
		// local storage
		localStorage.setItem(
			'formData',
			JSON.stringify({ name, email, phone, durationOfPlan, addOns, typeOfPlan }),
		);
	}, [name, email, phone, durationOfPlan, addOns, typeOfPlan]);

	return (
		<section className='basis-2/3 px-16 pt-8 pb-4'>
			{currentStep === 0 && <BasicForm />}
			{currentStep === 1 && <SelectPlanForm />}
			{currentStep === 2 && <AddOnsForm />}
			{currentStep === 3 && <SummaryForm />}
		</section>
	);
};

export default FormLayout;
