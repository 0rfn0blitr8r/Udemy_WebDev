import { useState } from "react";

export default function UsernameForm(){
	const[userName, setUsername] = useState("");
	const updateUsername = (event) => {
		console.log( "Username changed!" );
		setUsername(event.target.value)
	}

    return (
		<div>
			<label htmlFor="username">Username</label>
			<input 
				type="text" 
				placeholder="username" 
				value={username} 
				onChange={updateUsername} 
				id="username"
			/>

			<button>submit</button>
		</div>
	)
}