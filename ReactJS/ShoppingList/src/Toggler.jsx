import {useState} from "react";
import "./Toggler.css"
export default function Toggler(){
	let [isHappy, setEmotion] = useState(true)
	
	let changeEmotion = () => {
		setEmotion(!isHappy)
	}
	
	return (
		<>
			<div>
				<p className="Toggler">  {isHappy ? "😄" : "😞"}  </p>
				<button onClick={changeEmotion} > Change Emotion </button>
			</div>
		</>
	)
}