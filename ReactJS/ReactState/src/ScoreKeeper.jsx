import { useState } from "react";

export default function ScoerKeeper(){
	let [ scores, setScores ] = useState( { p1Score : 0, p2Score : 0 } ) ;
	
	let incP1Score = () => {
		/*
		//this will do nothing
		scores.p1Scores += 1;
		setScores(scores)
		*/

		//we need to make a copy of the object and 
		//set it as the new value
		let newScore = {...scores, p1Score : scores.p1Score += 1}
		setScores(newScore)
	}

	let incP2Score = () => {
		let newScore = {...scores, p2Score : scores.p2Score += 1}
		setScores(newScore)
	}

	return(
		<>
			<div>
				<p>Player1 : {scores.p1Score} </p>
				<button onClick={incP1Score} > +1 Player1</button>
				<br />
				<p>Player2 : {scores.p2Score} </p>
				<button onClick={incP2Score} > +1 Player2</button>
			</div> 
		</>
	);
}