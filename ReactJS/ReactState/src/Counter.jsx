// import { useState } from "react"

// export default function Counter(){
// 	let [cnt, setCnt] = useState(0);
// 	const cntInc = () => {
// 		setCnt(cnt += 1);
// 	}

// 	return (
// 		<>
// 			<div>
// 				<button onClick={cntInc} > Count : {cnt} </button>
// 			</div>
// 		</>

// 	);
// }

import { useState } from "react"

export default function Counter(){
	let [cnt, setCnt] = useState(0);
	const cntIncOne = () => {
		setCnt(cnt += 1);
	}

	const cntIncThree = () =>{
		setCnt(cnt => cnt += 1);
		console.log(cnt)			//it doesn't update immediately, the component re-renders, then change is seen
		setCnt(cnt => cnt += 1);
		setCnt(cnt => cnt += 1);
		// setCnt(cnt += 1);
		// setCnt(cnt += 1);
	}

	return (
		<>
			<div>
				<h3> {cnt} </h3>
				<button onClick={cntIncOne} > Count Inc by 1 </button>
				<br />
				<button onClick={cntIncThree} > Count Inc by 3 </button>
			</div>
		</>

	);
}