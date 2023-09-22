import React from 'react';
import StepItem from './StepItem';
import bgSidebarDesktop from '@/assets/images/bg-sidebar-desktop.svg';
import Image from 'next/image';

const Sidebar: React.FC = () => {
	const stepLabels = ['your info', 'select a plan', 'add-ons', 'summary'];
	return (
		<div className='relative basis-1/3 bg-primary-purplish-blue rounded-lg'>
			<Image
				src={bgSidebarDesktop}
				alt='Background Image'
				className='absolute inset-0 w-full h-full object-cover object-center rounded-lg z-0'
			/>
			<ul className='relative flex flex-col gap-8 p-8 z-10'>
				{stepLabels.map((label, index) => (
					<li key={index}>
						<StepItem label={label} step={index} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
