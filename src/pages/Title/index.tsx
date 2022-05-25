import React from 'react';
import PageTitle from '../../components/PageComponents/PageTitle';

export const PresentationTitle: React.FC = () => {
	return <PageTitle title="Tech Talk - React v18" />;
};

export const NewVersionSummary: React.FC = () => {
	return <PageTitle title="Resumo da nova versão" />;
};

export const AutomaticBatchingTitle: React.FC = () => {
	return <PageTitle title="Batching automático" />;
};

export const TransitionsTitle: React.FC = () => {
	return <PageTitle title="Transições" />;
};

export const SuspenseTitle: React.FC = () => {
	return <PageTitle title="Suspense" />;
};

export const DeferredTitle: React.FC = () => {
	return <PageTitle title="useDeferredValue" />;
};

export const StrictModeTitle: React.FC = () => {
	return <PageTitle title="Novo comportamento do Strict Mode" />;
};

export const InstallationTitle: React.FC = () => {
	return <PageTitle title="Como utilizar as novas funcionalidades" />;
};

export const ThankYou: React.FC = () => {
	return <PageTitle title="Obrigada!" />;
};
