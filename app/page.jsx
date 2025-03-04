//Components are functions that return som JSX

// JSX is a javascript syntax in react to create our HTML
"use client";
import { useState } from "react" // we use this to react add state to out components
// state lets us keep track of changing data and show it in the component

import Form from "./components/Form"
import Table from "./components/Table"


function Homepage(){   
    return (
        <div>
           <h1> FavLinks </h1>

           {/* Form for the user to input data*/}
                <Form />
           {/* A table the user acn use to see their submissions*/ }

                <Table />
           

        </div>
    )
}
export default Homepage