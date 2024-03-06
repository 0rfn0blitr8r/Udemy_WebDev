import {v4 as uuid} from "uuid"
import { useState } from "react"

function RandomEmoji(){
	const emojis = [ ":)" , ":(", "T_T", "0_0" ];
	return emojis[ Math.random(Math.random() * emojis.length) ]
}

export default function EmojiClicker(){
	let [emojis, setEmojis] = useState( [ {id: uuid(), emoji: RandomEmoji() } ] )
	
	let addEmoji = () => {
		setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: RandomEmoji() }])
	}

	const deleteEmoji = (id) => {
		setEmojis( prevEmojis => {
			return prevEmojis.filter(e => e.id != id)
		} )
	}

	return (
		<>
			<div>
				{ emojis.map( (e) => (
					<span  
						key={e.id} 
						onClick={ () => deleteEmoji(e.id) } 
					> 
						{e.emoji} 
					</span>
				) ) }

				<br />
				<button onClick={addEmoji}> Add Emoji </button>
			</div>
		</>
	)
}