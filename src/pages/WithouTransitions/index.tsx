import React from 'react';
import SearchWithoutTransitions from '../../components/FilterInput/SearchWithoutTransitions';
import PageCode from '../../components/PageCode';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Input de filtro',
	subTitle: 'Como faríamos antes do React 18?',
};

const code = `
function Search() {
	const [searchTerm, setSearchTerm] = useState('');
	const [listedItems, setListedItems] = useState<Item[]>([]);

	useEffect(() => {
		const foundItems = findItemsWithTerm(searchTerm);
		setListedItems(foundItems);
	}, [searchTerm]);

	return (
		<div className="bg-white h-5/6 w-full p-6">
			<Input onChange={(e) => setSearchTerm(e.target.value)} />
			<ItemsList items={listedItems} />
		</div>
	);
}
`;

const Debounce: React.FC = () => {
	return (
		<PageContainer header={header}>
			<div className="flex">
				<div className="w-2/3">
					<PageCode code={code} />
				</div>
				<div className="sticky w-1/3 ml-10 top-0 right-0">
					<SearchWithoutTransitions />
				</div>
			</div>
		</PageContainer>
	);
};

export default Debounce;
