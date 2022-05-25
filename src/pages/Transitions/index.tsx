import React from 'react';
import ComponentWithTransitions from '../../components/ExampleComponents/AutoCompleteInput/ComponentWithTransitions';
import PageCode from '../../components/PageComponents/PageCode';
import PageContainer from '../../components/PageComponents/PageContainer';
import { PageHeaderProps } from '../../components/PageComponents/PageHeader';

const header: PageHeaderProps = {
	mainTitle: 'Múltiplas atualizaçōes em um único evento',
	subTitle: 'Usando transições',
};

const code = `const [isPending, startTransition] = useTransition();
const [searchTerm, setSearchTerm] = useState('');
const [listedItems, setListedItems] = useState<Item[]>([]);

const LIST_SIZE = 20000;

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setSearchTerm(e.target.value);

	startTransition(() => {
		const list: Item[] = [];

		for (let count = 0; count < LIST_SIZE; count++) {
			list.push({
				id: count.toString(),
				name: e.target.value,
			});
		}

		setListedItems(list);
	});
};

return (
	<div className="bg-white p-6 with-scroll">
		<Input onChange={handleChange} value={searchTerm} />
		{isPending && <Loading />}
		<ItemsList items={listedItems} />
	</div>
);`;

const Transitions: React.FC = () => {
	return (
		<PageContainer header={header}>
			<div className="flex">
				<div className="w-2/3">
					<PageCode code={code} />
				</div>
				<div className="sticky w-1/3 top-0 right-0 ml-10 h-fit">
					<ComponentWithTransitions />
				</div>
			</div>
		</PageContainer>
	);
};

export default Transitions;
