import { useState } from "react"

export default function Clicker(){
	let [num , setNum] =  useState(0);
	let changeNum = () => {
		setNum(num+=1);
	}
	return (
		<>
			<div>
				<button onClick={changeNum} > Count: {num} </button>
			</div>
		</>
	)
}