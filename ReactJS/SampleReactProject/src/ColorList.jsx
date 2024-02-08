import "./ColorList.css"

export default function ColorList({colors}){
	//making a map is required
	// let colorMap = colors.map(color => <li>{color}</li> )
	
	return (
		<div>
			<p>ColorList</p>
			<ul>
				{colors.map((color)=>
					<li style={{color : color}}>{color}</li>
				)}
			</ul>
		</div>
	)
}