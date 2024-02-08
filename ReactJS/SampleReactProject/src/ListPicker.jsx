import "./ListPicker.css"

export default function ListPicker({values}){
	let randNdx = Math.floor( Math.random() * values.length );
	let randEle = values[randNdx];

	return (
		<div className="ListPicker">
			<p>The list of values : {values}</p>
			<p>Random element: {randEle}</p>
		</div>
	)
}