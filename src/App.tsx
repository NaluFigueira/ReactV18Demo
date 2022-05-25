import React from 'react';
import PageList from './components/PageComponents/PageList';
import Adoption from './pages/Content/Adoption';
import AutomaticBatching from './pages/Content/AutomaticBatching';
import DeferredValue from './pages/Content/DeferredValue';
import FlushAsync from './pages/Content/FlushAsync';
import Installation from './pages/Content/Installation';
import Introduction from './pages/Content/Introduction';
import MainFeature from './pages/Content/MainFeature';
import NewOnSuspense from './pages/Content/NewOnSuspense';
import ServerComponents from './pages/Content/ServerComponents';
import StrictMode from './pages/Content/StrictMode';
import Suspense from './pages/Content/Suspense';
import Transitions from './pages/Content/Transitions';
import WithoutTransitions from './pages/Content/WithoutTransitions';
import {
	AutomaticBatchingTitle,
	DeferredTitle,
	InstallationTitle,
	NewVersionSummary,
	PresentationTitle,
	StrictModeTitle,
	SuspenseTitle,
	ThankYou,
	TransitionsTitle,
} from './pages/Title';

function App() {
	const pages = [
		<PresentationTitle />,
		<Introduction />,
		<NewVersionSummary />,
		<MainFeature />,
		<Adoption />,
		<ServerComponents />,
		<AutomaticBatchingTitle />,
		<AutomaticBatching />,
		<FlushAsync />,
		<TransitionsTitle />,
		<WithoutTransitions />,
		<Transitions />,
		<SuspenseTitle />,
		<Suspense />,
		<NewOnSuspense />,
		<DeferredTitle />,
		<DeferredValue />,
		<StrictModeTitle />,
		<StrictMode />,
		<InstallationTitle />,
		<Installation />,
		<ThankYou />,
	];

	return (
		<div className="bg-neutral-900 p-16 h-screen overflow-y-scroll">
			<PageList pages={pages} finalPageNumber={pages.length} />
		</div>
	);
}

export default App;
