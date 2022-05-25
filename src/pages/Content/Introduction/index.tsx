import React from 'react';
import PageContainer from '../../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Tech Talk - React v18',
	subTitle: 'Tópicos de hoje',
};
function Introduction() {
	return (
		<PageContainer header={header}>
			<ol type="1" className="list-decimal list-inside text-3xl leading-loose">
				<li>Resumo da nova versão</li>
				<li>Batching automático</li>
				<li>Transições</li>
				<li>Suspense</li>
				<li>useDeferredValue</li>
				<li>Novo comportamento do Strict Mode</li>
				<li>Como utilizar as novas funcionalidades</li>
			</ol>
		</PageContainer>
	);
}

export default Introduction;
