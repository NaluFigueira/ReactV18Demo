import React, { useEffect, useState } from 'react';
import { Item, items } from '../Model';

async function getData(searchTerm: string): Promise<Array<Item>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(items.filter((item) => item.name.startsWith(searchTerm)));
		}, 3000);
	});
}

const InputWithDebounce: React.FC = () => {
	const [isPending, setIsPending] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [listedItems, setListedItems] = useState<Item[]>([]);

	useEffect(() => {
		setIsPending(true);
		const delayDebounceFn = setTimeout(async () => {
			const foundItems = await getData(searchTerm);
			setIsPending(false);
			setListedItems(foundItems);
		}, 500);

		return () => {
			clearTimeout(delayDebounceFn);
			setIsPending(false);
		};
	}, [searchTerm]);

	return (
		<div className="bg-white h-5/6 w-full p-6">
			<input
				autoFocus
				type="text"
				autoComplete="off"
				className="p-2 w-2/3"
				placeholder="Search for Ambev beverages..."
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			{isPending && <span className="block mt-2">Loading...</span>}
			{!isPending && (
				<div>
					{listedItems.map((item) => (
						<span className="block mt-2" key={item.id}>
							{item.name}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default InputWithDebounce;
