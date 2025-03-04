function Form(){

    function handleClick(){
        alert("Clicked!")

    }

    return(
        <div>
         {/* Form for the user to input data*/}
         <form>
            <label> Name </label>
            <input type="text"/>
            <label> URL </label>
            <input type="type"/>
         
        </form>
        <button onClick={handleClick}> Submit </button>

        </div>
    )
}

export default Form