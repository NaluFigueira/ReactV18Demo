import React, { useEffect, useState, useTransition } from 'react';
import Input from '../Input';
import ItemsList from '../ItemsList';
import Loading from '../Loading';
import { findItemsWithTerm, Item } from '../Model';

const SearchWithTransitions: React.FC = () => {
	const [isPending, startTransition] = useTransition();
	const [searchTerm, setSearchTerm] = useState('');
	const [listedItems, setListedItems] = useState<Item[]>([]);

	useEffect(() => {
		const foundItems = findItemsWithTerm(searchTerm);
		startTransition(() => {
			setListedItems(foundItems);
		});
	}, [searchTerm]);

	return (
		<div className="bg-white p-6">
			<Input onChange={(e) => setSearchTerm(e.target.value)} />
			{isPending && <Loading />}
			<ItemsList items={listedItems} />
		</div>
	);
};

export default SearchWithTransitions;
