import React from 'react';
import PageList from './components/PageList';
import Adoption from './pages/Adoption';
import AutomaticBatching from './pages/AutomaticBatching';
import Debounce from './pages/Debounce';
import FlushAsync from './pages/FlushAsync';
import Introduction from './pages/Introduction';
import MainFeature from './pages/MainFeature';
import ServerComponents from './pages/ServerComponents';

function App() {
	const pages = [
		<Introduction />,
		<MainFeature />,
		<Adoption />,
		<ServerComponents />,
		<AutomaticBatching />,
		<FlushAsync />,
		<Debounce />,
	];
	return (
		<div className="bg-neutral-900 p-16 h-screen overflow-y-scroll">
			<PageList pages={pages} finalPageNumber={pages.length} />
		</div>
	);
}

export default App;
