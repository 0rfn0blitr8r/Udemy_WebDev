import { useState } from "react";

export default function UsernameForm(){
	const[firstName, setFirstName] = useState("");
	const[lastName, setLastName] = useState("");
	const updateFirstName = (event) => {
		setFirstName(event.target.value)
	}
	const updateLastName = (event) => {
		setLastName(event.target.value)
	}
    const handleSubmit = () => {
 
    }

    return (
		<div>
			<label htmlFor="firstName">FirstName</label>
			<input 
				type="text" 
				placeholder="username" 
				value={ firstName } 
				onChange={updateFirstName} 
				id="firstName"
			/>
            <br />
			<label htmlFor="lastName">LastName</label>
			<input 
				type="text" 
				placeholder="username" 
				value={ lastName } 
				onChange={updateLastName} 
				id="lastName"
			/>
            <br />
			<button onClick={handleSubmit}  >submit</button>
		</div>
	)
}