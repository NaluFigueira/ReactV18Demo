import React from 'react';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';

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
				<li>Client and Server Rendering APIs</li>
				<li>Novos comportamentos do Strict Mode</li>
				<li>Novo hook: useDeferredValue</li>
			</ol>
		</PageContainer>
	);
}

export default Introduction;
