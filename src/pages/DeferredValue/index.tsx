import React from 'react';
import PageCode from '../../components/PageComponents/PageCode';
import PageContainer from '../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Recurso externo',
	subTitle: 'useDeferredValue',
};

const code = `function Typeahead() {
	// A query atual é controlada por um estado que não temos acesso
	const query = useSearchQuery('');
  
	// Nós não precisamos que as sugestões carreguem imediatamente
	// Nós deveriamos manter os resultados anteriores até que os novos carreguem
	const deferredQuery = useDeferredValue(query);
  
	return (
	  <>
		{/*O input atualiza imediatamente */}
		<SearchInput query={query} />
		{/* As sugestões atualizam posteriormente */}
		<Suspense fallback="Carregando...">
			<SearchSuggestions query={deferredQuery} />
		</Suspense>
	  </>
	);
  }`;

const DeferredValue: React.FC = () => {
	return (
		<PageContainer header={header}>
			<PageCode code={code} />
		</PageContainer>
	);
};

export default DeferredValue;
