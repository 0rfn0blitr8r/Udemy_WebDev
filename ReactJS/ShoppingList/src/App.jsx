import Heading from './Heading.jsx'
import ShoppingList from './ShoppingList.jsx'
import Clicker from './Clicker.jsx';
import Counter from './Counter.jsx';
import Form from './Form.jsx';
import Toggler from './Toggler.jsx';
import './App.css'

let data = [
	{ id:1, item:'Bananas',          qty:12, completed:false },
	{ id:2, item:'Bread',            qty:2,  completed:true  },
	{ id:3, item:'Apple',            qty:10, completed:false },
	{ id:4, item:'Cake: eggless',    qty:1,  completed:true  }
];

export default function App(){
	return (
		<>
			<div>
				<Heading/>
				<ShoppingList items={data} />
				<Clicker/>
				<Form/>
				<Counter/>
				<Toggler/>
			</div>
		</>
	)
}