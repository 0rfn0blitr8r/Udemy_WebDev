import "./styles.css";

import Dog from "./Dog.js";
import Greet from "./Greet.js";
import Login from "./Login.js";
import Dice from "./Dice.js";

export default function App() {
  return (
    <div className="App">
      <Dog/>
      <Dice/>
      <Greet/>
      <Login/>
    </div>
  );
}
