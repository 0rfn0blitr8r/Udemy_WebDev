function handleFormSubmit(e){
	e.preventDefault();
	alert("Submitted The Form")
}

export default function Form(){
	return(
		<form onSubmit={handleFormSubmit} >
			<button>Submit</button>
		</form>
	)
}