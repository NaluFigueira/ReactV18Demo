import React, { Suspense } from 'react';
import Loading from '../../AutoCompleteInput/Loading';

const ComponentWithSuspense: React.FC = () => {
	const AmbevLogo = React.lazy(() => {
		return new Promise((resolve) => setTimeout(resolve, 2000)).then(
			() => import(`..`)
		);
	});
	return (
		<div className="bg-white p-6">
			<Suspense fallback={<Loading />}>
				<AmbevLogo />
			</Suspense>
		</div>
	);
};

export default ComponentWithSuspense;
