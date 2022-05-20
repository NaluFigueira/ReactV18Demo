import React from 'react';
import PageHeader, { PageHeaderProps } from '../PageHeader';

interface PageContainerProps {
	header: PageHeaderProps;
	children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ header, children }) => {
	const { mainTitle, subTitle } = header;

	return (
		<>
			<PageHeader mainTitle={mainTitle} subTitle={subTitle} />
			{children}
		</>
	);
};

export default PageContainer;
