//Components are functions that return som JSX

// JSX is a javascript syntax in react to create our HTML
"use client";
import { useState } from "react" // we use this to react add state to out components
// state lets us keep track of changing data and show it in the component

import Form from "./components/Form"
import Table from "./components/Table"


function Homepage(){   

    const [newFavLink, setNewFavLink] = useState({})

    function handleNewFaveLink(favLink){
        // favelink is an object containing a {name, URL}

        console.log(favLink, "in Homepage")

        setNewFavLink(favLink)
    }

    return (
        <div>
           <h1> FavLinks </h1>
                {/*the form is responsible for gathering the data
                and alerting the HomePage when it needs to pass it to the table*/ }

               <Form submitFavLink={handleNewFaveLink} />
           

               <Table data={newFavLink}/>
           

        </div>
    )
}
export default Homepage