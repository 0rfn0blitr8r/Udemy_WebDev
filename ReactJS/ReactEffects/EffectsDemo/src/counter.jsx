import { useState, useEffect } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(function myEffect(){
        console.log("MyEffect was called");
    }, [count])
    const increment = () => {
        setCount( (c) => (c+1) );
    }
    const reset = () => {
        setCount( (c) => 0 )
    }
    const handleChange = (e) => {
        setName( e.target.value )
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} >add</button>
            <br/>
            <button onClick={reset} > reset </button>
            <br />
            <p>Nmae: {name}</p>
            <input 
                type="text"
                value={name}
                onChange={handleChange}
            />
        </div>
    )
}