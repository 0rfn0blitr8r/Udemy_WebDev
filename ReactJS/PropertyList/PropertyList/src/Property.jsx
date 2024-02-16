export default function Property({name, price, rating, id}){
	return (
		<>
			<div>
				<h2>{name}</h2>
				<h2>${price}/night</h2>
				<h2>⭐{rating}</h2>
			</div>
		
		</>
	)
}