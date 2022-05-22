import React from 'react';
import PageHeader, { PageHeaderProps } from '../PageHeader';

interface PageContainerProps {
	header: PageHeaderProps;
	children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ header, children }) => {
	const { mainTitle, subTitle } = header;

	return (
		<div>
			<PageHeader mainTitle={mainTitle} subTitle={subTitle} />
			{children}
		</div>
	);
};

export default PageContainer;
