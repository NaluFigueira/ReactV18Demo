import React from 'react';
import PageContainer from '../../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Suspense',
	subTitle: 'O que há de novo?',
};

function NewOnSuspense() {
	return (
		<PageContainer header={header}>
			<ul className="list-disc list-inside leading-loose text-3xl">
				<li>
					Agora é possível usar o Suspense para data fetching (FetchAPI, axios,
					React Query, swr, Relay, etc) e server side rendering (SSR).
				</li>
				<li>
					<a
						className="underline text-yellow-200"
						href="https://codesandbox.io/s/u9qq7"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						Exemplo do Philip Fabianek{' '}
					</a>
				</li>
			</ul>
		</PageContainer>
	);
}

export default NewOnSuspense;
