import React from 'react';
import PageCode from '../../components/PageCode';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Como utilizar as novas funcionalidades',
	subTitle: 'createRoot',
};

const code = `// Antes
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// Agora
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);`;

const Installation: React.FC = () => {
	return (
		<PageContainer header={header}>
			<div className="mt-8 text-2xl">
				<PageCode code={code} />
			</div>
		</PageContainer>
	);
};

export default Installation;
