import React from 'react';
import StepItem from './StepItem';

const SidebarItems = () => {
	const stepLabels = ['your info', 'select a plan', 'add-ons', 'summary'];

	return (
		<ul className='relative flex md:flex-col gap-4 md:gap-8 md:p-8 z-10'>
			{stepLabels.map((label, index) => (
				<li key={index}>
					<StepItem label={label} step={index} />
				</li>
			))}
		</ul>
	);
};

export default SidebarItems;
