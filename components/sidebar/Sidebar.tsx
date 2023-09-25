import React from 'react';
import StepItem from './StepItem';
import bgSidebarDesktop from '@/assets/images/bg-sidebar-desktop.svg';
import Image from 'next/image';
import SidebarItems from './SidebarItems';

const Sidebar: React.FC = () => {
	return (
		<div className='hidden md:block relative basis-1/3 bg-primary-purplish-blue rounded-lg'>
			<Image
				src={bgSidebarDesktop}
				alt='Background Image'
				className='absolute inset-0 w-full h-full object-cover object-center rounded-lg z-0'
			/>
			<SidebarItems />
		</div>
	);
};

export default Sidebar;
