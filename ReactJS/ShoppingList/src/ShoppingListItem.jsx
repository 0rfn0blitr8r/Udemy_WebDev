export default function ShoppingListItem({key, item, qty, completed}){
	return (
		<>
			<div style={ {textDecoration: completed ? 'line-through' : 'none' } }>
				<p>{item} - {qty}</p>
			</div>
		</>
	)
}