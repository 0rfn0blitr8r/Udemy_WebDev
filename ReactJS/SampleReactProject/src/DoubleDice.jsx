import "./DoubleDice.css"

export default function DoubleDice(){
	let num1 = Math.floor(Math.random() * 3) + 1;
	let num2 = Math.floor(Math.random() * 3) + 1;

	//css has kebab casing and js has camel casing
	//setting value based on the value of num1 & num2, i.e., using js logic
	let styles = {color: num1 === num2 ? "#b8bb26" : "#fb4934"}

	return (
		<div className="DoubleDice" style={styles} >
			<h2>Double dice</h2>
			{ num1 === num2 && <h3>You Win!</h3> }
			<p>Num1 : {num1} | Num2 : {num2}</p>
		</div>
	);
}