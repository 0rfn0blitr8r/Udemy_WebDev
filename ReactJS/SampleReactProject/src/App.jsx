import './App.css'
import Heading from './Heading';
import Chicken from './Chicken';
import Greeter from './Greeter';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import ColorList from './ColorList';

function App(){
  return(
		<div>
			{/* <Heading text="React + Vite!"/> */}
			{/* <Chicken/>
			<Chicken/>
			<Chicken/> */}
			<Greeter name="Aru"/>
			<ColorList colors={['Pink', 'Cyan', 'Yellow', 'Orangered', 'Pearl']}/>
			{/* <DoubleDice/> */}
			{/* <ListPicker values={[1, 2, 3, 4]}/> */}
			{/*to pass an object*/}
			{/* <ListPicker values={{a : 1, b : 2}}/> */} 
			{/*to pass an array of characters*/}
			{/* <ListPicker values={["a", "b", "c", "d"]}/> */} 
    	</div>
	)
}

export default App