import { AddOn, Plan } from '@/types/types';
import { create } from 'zustand';

export interface FormStore {
	name: string;
	email: string;
	phone: string;
	typeOfPlan: Plan;
	durationOfPlan: string;
	addOns: AddOn[];
	setName: (newName: string) => void;
	setEmail: (newEmail: string) => void;
	setPhone: (newPhone: string) => void;
	setTypeOfPlan: (newTypeOfPlan: Plan) => void;
	setDurationOfPlan: (newDurationOfPlan: string) => void;
	setAddOns: (newAddOns: AddOn[]) => void;
	resetForm: () => void;
}

export const useFormStore = create<FormStore>(set => {
	return {
		name: '',
		email: '',
		phone: '',
		typeOfPlan: { label: '', pricePerMonth: 0, pricePerYear: 0, id: '', icon: '' },
		durationOfPlan: 'monthly',
		addOns: [],
		setName: (newName: string) => set({ name: newName }),
		setEmail: (newEmail: string) => set({ email: newEmail }),
		setPhone: (newPhone: string) => set({ phone: newPhone }),
		setTypeOfPlan: (newTypeOfPlan: Plan) => set({ typeOfPlan: newTypeOfPlan }),
		setDurationOfPlan: (newDurationOfPlan: string) => set({ durationOfPlan: newDurationOfPlan }),
		setAddOns: (newAddOns: AddOn[]) => set({ addOns: newAddOns }),
		resetForm: () =>
			set(state => ({
				name: '',
				email: '',
				phone: '',
				typeOfPlan: { label: '', pricePerMonth: 0, pricePerYear: 0, id: '', icon: '' },
				durationOfPlan: 'monthly',
				addOns: [],
			})),
	};
});

interface FormSteps {
	currentStep: number;
	setCurrentStep: (newStep: number) => void;
}

export const useFormSteps = create<FormSteps>(set => {
	return {
		currentStep: 0,
		setCurrentStep: newStep => set({ currentStep: newStep }),
	};
});

interface Successful {
	successful: boolean;
	setSuccessful: () => void;
}

export const useSuccessful = create<Successful>(set => {
	return {
		successful: false,
		setSuccessful: () => set({ successful: true }),
	};
});
