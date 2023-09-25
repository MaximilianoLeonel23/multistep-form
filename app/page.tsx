'use client';
import FormLayout from '@/components/form/FormLayout';

import Sidebar from '@/components/sidebar/Sidebar';
import Image from 'next/image';
import bgSidebarMobile from '@/assets/images/bg-sidebar-mobile.svg';
import { useFormSteps } from '@/store/useFormStore';
import SidebarMobile from '@/components/sidebar/SidebarMobile';
import FormLayoutMobile from '@/components/form/FormLayoutMobile';
import NavigationMobile from '@/components/form/NavigationMobile';

export default function Home() {
	return (
		<main className='relative flex flex-col justify-center items-center bg-neutro-magnolia  min-h-screen'>
			<Image
				src={bgSidebarMobile}
				alt='background aside mobile'
				className='absolute top-0 left-0 w-full md:hidden'
			/>
			<section className='hidden md:flex bg-neutro-white min-h-[80vh] lg:w-3/5 rounded-lg drop-shadow-soft p-4'>
				<Sidebar />
				<FormLayout />
			</section>
			<section className='flex flex-col items-center gap-y-8 md:hidden min-h-[80vh] rounded-lg'>
				<SidebarMobile />
				<FormLayoutMobile />
			</section>
			<NavigationMobile />
		</main>
	);
}
