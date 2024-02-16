function handleClick(){
	console.log("BUTTON CLICKED")
}

export default function Clicker(){
	return(
		<div>
			<p>Click the Button!</p>
			<button onClick={handleClick} >Click</button>
		</div>
	);
}