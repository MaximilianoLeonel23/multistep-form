import { create } from 'zustand';

interface FormStore {
	name: string;
	email: string;
	phone: string;
	typeOfPlan: string;
	durationOfPlan: string;
	addOns: string[];
	setName: (newName: string) => void;
	setEmail: (newEmail: string) => void;
	setPhone: (newPhone: string) => void;
	setTypeOfPlan: (newTypeOfPlan: string) => void;
	setDurationOfPlan: (newDurationOfPlan: string) => void;
	setAddOns: (newAddOns: string[]) => void;
}

export const useFormStore = create<FormStore>(set => {
	return {
		name: '',
		email: '',
		phone: '',
		typeOfPlan: '',
		durationOfPlan: 'monthly',
		addOns: [],
		setName: (newName: string) => set({ name: newName }),
		setEmail: (newEmail: string) => set({ email: newEmail }),
		setPhone: (newPhone: string) => set({ phone: newPhone }),
		setTypeOfPlan: (newTypeOfPlan: string) => set({ typeOfPlan: newTypeOfPlan }),
		setDurationOfPlan: (newDurationOfPlan: string) => set({ durationOfPlan: newDurationOfPlan }),
		setAddOns: (newAddOns: string[]) => set({ addOns: newAddOns }),
	};
});

interface FormSteps {
	currentStep: number;
	setCurrentStep: (newStep: number) => void;
}

export const useFormSteps = create<FormSteps>(set => {
	return {
		currentStep: 1,
		setCurrentStep: newStep => set({ currentStep: newStep }),
	};
});
