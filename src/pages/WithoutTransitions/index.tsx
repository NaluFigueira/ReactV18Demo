import React from 'react';
import ComponentWithoutTransitions from '../../components/ExampleComponents/AutoCompleteInput/ComponentWithoutTransitions';
import PageCode from '../../components/PageComponents/PageCode';
import PageContainer from '../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Múltiplas atualizaçōes em um único evento',
	subTitle: 'Como faríamos antes do React 18?',
};

const code = `const [isPending, setIsPending] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const [listedItems, setListedItems] = useState<Item[]>([]);

const LIST_SIZE = 20000;

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setSearchTerm(e.target.value);
	setIsPending(true);

	const list: Item[] = [];

	for (let count = 0; count < LIST_SIZE; count++) {
		list.push({
			id: count.toString(),
			name: e.target.value,
		});
	}

	setListedItems(list);
	setIsPending(false);
};

return (
	<div className="bg-white p-6 with-scroll">
		<Input onChange={handleChange} value={searchTerm} />
		{isPending && <Loading />}
		<ItemsList items={listedItems} />
	</div>
)`;

const WithoutTransitions: React.FC = () => {
	return (
		<PageContainer header={header}>
			<div className="flex">
				<div className="w-2/3">
					<PageCode code={code} />
				</div>
				<div className="sticky w-1/3 top-0 right-0 ml-10 h-fit">
					<ComponentWithoutTransitions />
				</div>
			</div>
		</PageContainer>
	);
};

export default WithoutTransitions;
