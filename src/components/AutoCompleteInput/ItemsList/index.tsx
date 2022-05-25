import React from 'react';
import { Item } from '../Model';

interface ItemsListProps {
	items: Array<Item>;
}

const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<span className="block mt-2" key={item.id}>
					{item.name}
				</span>
			))}
		</div>
	);
};

export default ItemsList;
