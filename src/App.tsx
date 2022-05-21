import React from 'react';
import PageList from './components/PageList';
import Introduction from './pages/Introduction';
import MainFeature from './pages/MainFeature';

function App() {
	const pages = [<Introduction />, <MainFeature />];
	return (
		<div className="bg-neutral-900 p-24 h-screen">
			<PageList pages={pages} finalPageNumber={pages.length} />
		</div>
	);
}

export default App;
