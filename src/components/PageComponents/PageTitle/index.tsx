import React from 'react';

interface PageTitleProps {
	title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
	return (
		<div className="flex h-full items-center">
			<span className="text-yellow-300 text-8xl">{title}</span>
		</div>
	);
};

export default PageTitle;
