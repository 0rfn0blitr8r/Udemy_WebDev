import "./Greeter.css"

export default function Greeter({name}){
	// console.log(props.name);
	return <h1 className="Greeter">Hi there, {name}!</h1>
}
// export default function Greeter(props){
// 	console.log(props.name);
// 	return <h1>Hi there, {props.name}!</h1>
// }