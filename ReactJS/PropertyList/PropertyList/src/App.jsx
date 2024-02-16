import './App.css'
import PropertyList from "./PropertyList";

let properties = [
	{ id:1, name: "Desert Yurt", rating: 4.9, price: 150 },
	{ id:2, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
	{ id:3, name: "Cactus Retreat", rating: 4.75, price: 120 },
	{ id:4, name: "Oceanview Condo", rating: 4.7, price: 140 }
]

function App() {
	return (
		<>
			<PropertyList properties={properties} />
		</>
	)
}

export default App
