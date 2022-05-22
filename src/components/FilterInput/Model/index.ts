export interface Item {
	id: string;
	name: string;
}

export const Items = Array(5000)
	.fill({})
	.map((_, index) => ({
		id: index.toString(),
		name: `Produto ${index + 1}`,
	}));

export const findItemsWithTerm = (searchTerm: string) => {
	return Items.filter((item) =>
		item.name.toUpperCase().includes(searchTerm.toUpperCase())
	);
};
