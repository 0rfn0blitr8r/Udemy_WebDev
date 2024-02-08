export default function Dice(){
	let roll = Math.floor(math.random() * 6) + 1;
	return (
		<h1 className="Die" >Die Roll: {roll}</h1>
	)
}