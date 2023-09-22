'use client';
import FormLayout from '@/components/form/FormLayout';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
	return (
		<main className='grid bg-primary-light-blue place-items-center min-h-screen'>
			<section className='flex flex-row bg-neutro-white min-h-[80vh] w-3/5 rounded-lg drop-shadow-lg p-4'>
				<Sidebar />
				<FormLayout />
			</section>
		</main>
	);
}
