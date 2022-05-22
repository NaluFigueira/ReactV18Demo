import React from 'react';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';
import PageCode from '../../components/PageCode';

const header: PageHeaderProps = {
	mainTitle: 'Batching automático',
};

const code = `// Antes: apenas eventos React passavam por batching.
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Componente iria renderizar duas vezes, uma para cada atualização de estado (sem batching)
}, 1000);

// Depois: atualizações dentro de timeouts, promises,
// event handlers nativos ou quaisquer outros eventos passam por batching.
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Comoponente irá renderizar apenas uma única vez!
}, 1000);`;

function AutomaticBatching() {
	return (
		<PageContainer header={header}>
			<div className="mt-8 text-2xl">
				<PageCode code={code} />
			</div>
		</PageContainer>
	);
}

export default AutomaticBatching;
