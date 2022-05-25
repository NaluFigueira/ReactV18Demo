import React from 'react';
import ComponentWithSuspense from '../../components/ExampleComponents/AmbevLogo/ComponentWithSuspense';
import PageCode from '../../components/PageComponents/PageCode';
import PageContainer from '../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Suspense',
	subTitle: 'Lazy loading',
};

const code = `const AmbevLogo = React.lazy(() => {
	return new Promise((resolve) => setTimeout(resolve, 2000)).then(
		() => import('..')
	);
});

const ComponentWithSuspense: React.FC = () => {
	return (
		<div className="bg-white p-6 with-scroll">
			<Suspense fallback={<Loading />}>
				<AmbevLogo />
			</Suspense>
		</div>
	);
};
`;

const WithoutTransitions: React.FC = () => {
	return (
		<PageContainer header={header}>
			<div className="flex">
				<div className="w-2/3">
					<PageCode code={code} />
				</div>
				<div className="sticky w-1/3 top-0 right-0 ml-10 h-fit">
					<ComponentWithSuspense />
				</div>
			</div>
		</PageContainer>
	);
};

export default WithoutTransitions;
