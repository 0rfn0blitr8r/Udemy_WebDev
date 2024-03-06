import { useState } from "react"

export default function BetterSignUpForm(){
    const [ formData, setFormData ] = useState({
        firstName : "",
        lastName : ""
    })

	const handleChange = ( evt ) => {
		// console.log(firstName, lastName);
        const changedField = evt.target.name;
        const newValue = evt.target.value;
		setFormData( (currData) => {
			// currData[changedField] = newValue;
			// return {...currData};
			return {
				...currData,
				// [changedField] : newValue
				[evt.target.name] : evt.target.value
			}
		} )
	}

    const handleSubmit = (evt) => {
		console.log(firstName, lastName)
    }
	
	return (
		<div>
			<label htmlFor="firstName">FirstName</label>
			<input 
				type="text" 
				placeholder="username" 
				value={ formData.firstName } 
				onChange={handleSubmit} 
				id="firstName"
			/>
            <br />
			<label htmlFor="lastName">LastName</label>
			<input 
				type="text" 
				placeholder="username" 
				value={ formData.lastName } 
				onChange={handleSubmit} 
				id="lastName"
			/>
            <br />
			<button onClick={handleSubmit}  >submit</button>
		</div>
	)
}