import React, { useState } from 'react';
import Input from '../Input';
import ItemsList from '../ItemsList';
import Loading from '../Loading';
import { Item } from '../Model';

const WithoutTransitions: React.FC = () => {
	const [isPending, setIsPending] = useState(false);
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
	);
};

export default WithoutTransitions;
