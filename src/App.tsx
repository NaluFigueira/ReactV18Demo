import React from 'react';
import PageList from './components/PageList';
import Adoption from './pages/Adoption';
import AutomaticBatching from './pages/AutomaticBatching';
import WithoutTransitions from './pages/WithoutTransitions';
import FlushAsync from './pages/FlushAsync';
import Introduction from './pages/Introduction';
import MainFeature from './pages/MainFeature';
import ServerComponents from './pages/ServerComponents';
import Transitions from './pages/Transitions';
import Suspense from './pages/Suspense';
import NewOnSuspense from './pages/NewOnSuspense';
import DeferredValue from './pages/DeferredValue';
import StrictMode from './pages/StrictMode';

function App() {
	const pages = [
		<Introduction />,
		<MainFeature />,
		<Adoption />,
		<ServerComponents />,
		<AutomaticBatching />,
		<FlushAsync />,
		<WithoutTransitions />,
		<Transitions />,
		<Suspense />,
		<NewOnSuspense />,
		<DeferredValue />,
		<StrictMode />,
	];
	return (
		<div className="bg-neutral-900 p-16 h-screen overflow-y-scroll">
			<PageList pages={pages} finalPageNumber={pages.length} />
		</div>
	);
}

export default App;
