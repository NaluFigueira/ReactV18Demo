import React from 'react';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';
import PageCode from '../../components/PageCode';

const header: PageHeaderProps = {
	mainTitle: 'E se eu não quiser usar o batching automático?',
};

const code = `import { flushSync } from 'react-dom'; // Nota: react-dom, não react
function handleClick() {
  flushSync(() => {
    setCounter(c => c + 1);
  });
  // React já deve ter atualizado o DOM neste ponto
  flushSync(() => {
    setFlag(f => !f);
  });
  // React já deve ter atualizado o DOM neste ponto
}`;

function FlushAsync() {
	return (
		<PageContainer header={header}>
			<div className="mt-8 text-2xl">
				<PageCode code={code} />
			</div>
		</PageContainer>
	);
}

export default FlushAsync;
