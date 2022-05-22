import React from 'react';
import SearchWithTransitions from '../../components/FilterInput/SearchWithTransitions';
import PageCode from '../../components/PageCode';
import PageContainer from '../../components/PageContainer';
import { PageHeaderProps } from '../../components/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Input de filtro',
	subTitle: 'Usando Transitions',
};

const code = `function Search() {
	const [isPending, startTransition] = useTransition();
	const [searchTerm, setSearchTerm] = useState('');
	const [listedItems, setListedItems] = useState<Item[]>([]);

	useEffect(() => {
		if (searchTerm === '') {
			setListedItems([]);
		} else {
			const foundItems = findItemsWithTerm(searchTerm);
			startTransition(() => {
				setListedItems(foundItems);
			});
		}
	}, [searchTerm]);

	return (
		<div className="bg-white h-5/6 w-full p-6">
			<Input onChange={(e) => setSearchTerm(e.target.value)} />
			{isPending && <Loading />}
			<ItemsList items={listedItems} />
		</div>
	);
`;

const Transitions: React.FC = () => {
	return (
		<PageContainer header={header}>
			<div className="flex">
				<div className="w-2/3">
					<PageCode code={code} />
				</div>
				<div className="sticky w-1/3 top-0 right-0 ml-10 h-fit">
					<SearchWithTransitions />
				</div>
			</div>
		</PageContainer>
	);
};

export default Transitions;
