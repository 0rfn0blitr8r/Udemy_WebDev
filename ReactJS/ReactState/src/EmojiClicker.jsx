import { useState } from "react"

export default function EmojiClicker(){
	let [emojis, setEmojis] = useState( [ "T_T" ] )
	
	let addEmoji = () => {
		setEmojis((oldEmojis) => [...oldEmojis, "T_T"])
	}

	return (
		<>
			<div>
				{ emojis.map( (e) => {
					<span > {e} </span>
				} ) }

				<br />
				<button onClick={addEmoji}> Add Emoji </button>
			</div>
		</>
	)
}