import React, { useEffect, useState } from 'react';
import Input from '../Input';
import ItemsList from '../ItemsList';
import { findItemsWithTerm, Item } from '../Model';

const SearchWithoutTransitions: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [listedItems, setListedItems] = useState<Item[]>([]);

	useEffect(() => {
		const foundItems = findItemsWithTerm(searchTerm);
		setListedItems(foundItems);
	}, [searchTerm]);

	return (
		<div className="bg-white p-6">
			<Input onChange={(e) => setSearchTerm(e.target.value)} />
			<ItemsList items={listedItems} />
		</div>
	);
};

export default SearchWithoutTransitions;
