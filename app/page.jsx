//Components are functions that return som JSX

// JSX is a javascript syntax in react to create our HTML
"use client";
import { useState } from "react" // we use this to react add state to out components
// state lets us keep track of changing data and show it in the component

function Homepage(){  
    // create some state keeping track of the changing count
    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{
                // write some javascript for this to call
                setCount(count + 1)
            }}>Add One</button>
        </div>
    )
}
export default Homepage