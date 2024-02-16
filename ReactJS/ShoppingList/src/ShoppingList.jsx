import ShoppingListItem from "./ShoppingListItem";
export default function ShoppingList({ items }) {
	return (
		<ul>
			{items.map((i) => (
				<ShoppingListItem key={i.id} {...i}/>
        		// <ShoppingListItem key={i.id} {...i} />
			))}
		</ul>
	);
}