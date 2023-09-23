'use client';
import { useFormSteps, useFormStore } from '@/store/useFormStore';
import React from 'react';

const BasicForm = () => {
	const { name, email, phone, setName, setEmail, setPhone } = useFormStore();
	const { currentStep, setCurrentStep } = useFormSteps();
	const handleBasicData = () => {
		if (name && email && phone) {
			setCurrentStep(currentStep + 1);
		}
	};
	return (
		<div className='h-full flex flex-col justify-between'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col'>
					<h1 className='text-primary-marine-blue text-2xl font-bold'>Personal info</h1>
					<p className='text-neutro-cool-gray text-sm'>
						Please provide your name, email adress, and phone number
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-1'>
						<label htmlFor='name' className='text-primary-marine-blue font-medium text-sm'>
							Name
						</label>
						<input
							type='text'
							placeholder='e.g. Stephen King'
							id='name'
							name='name'
							defaultValue={name}
							onChange={e => setName(e.target.value)}
							className='text-sm text-neutro-cool-gray border border-neutro-light-gray rounded-lg px-3 py-2.5 outline-none focus:border-primary-purplish-blue'
							required
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='email' className='text-primary-marine-blue font-medium text-sm'>
							Email Adress
						</label>
						<input
							type='email'
							placeholder='e.g. stephenking@lorem.com'
							id='email'
							name='email'
							defaultValue={email}
							onChange={e => setEmail(e.target.value)}
							className='text-sm text-neutro-cool-gray border border-neutro-light-gray rounded-lg px-3 py-2.5 outline-none focus:border-primary-purplish-blue'
							required
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='phone' className='text-primary-marine-blue font-medium text-sm'>
							Phone Number
						</label>
						<input
							type='phone'
							placeholder='e.g. +1 234 56 789'
							id='phone'
							name='phone'
							defaultValue={phone}
							onChange={e => setPhone(e.target.value)}
							className='text-sm text-neutro-cool-gray border border-neutro-light-gray rounded-lg px-3 py-2.5 outline-none focus:border-primary-purplish-blue'
							required
						/>
					</div>
				</div>
			</div>
			<div className='flex justify-end'>
				<button
					onClick={handleBasicData}
					className=' bg-primary-marine-blue text-white py-2 px-6 rounded-lg w-fit'
				>
					Next Step
				</button>
			</div>
		</div>
	);
};

export default BasicForm;
