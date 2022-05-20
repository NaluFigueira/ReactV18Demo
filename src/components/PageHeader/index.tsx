import React from 'react';

export interface PageHeaderProps {
	mainTitle: string;
	subTitle?: string;
}

function PageHeader({ mainTitle, subTitle }: PageHeaderProps) {
	return (
		<div>
			<h1 className="text-yellow-300 text-6xl">{mainTitle}</h1>
			{subTitle && (
				<h2 className="text-yellow-300 text-4xl my-6 underline">{subTitle}</h2>
			)}
		</div>
	);
}

export default PageHeader;
