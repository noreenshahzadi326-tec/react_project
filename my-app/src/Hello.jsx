import  './App.css'


function Hello() {
    function getName(n) {
        return n
    }

    const name = "From React JSX"
     const name1 = "From JSX"
     //Event handler

     function handleClick() {
alert("Button Clicked!")
     }
    //Event handler with parameter
     function handleInputChange(event) {
        console.clear()
        console.log("Value: " ,event.target.value)
     }
     //Event handler with mouse over
function handleMouseOver(){
    console.log("Mouse over detected!")
}
//Event handler with double click
function handleDoubleClick(){
    console.log("Double click detected!")
}  

return (
        <>
        <h1>Hello, {getName(name)}!</h1>
        <h2>Hello, {getName(name1)}!</h2>
        <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ratione?</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>alert("Button Clicked with Arrow Function!")}>Click me</button>
        <br />
        <input type="text" onChange={handleInputChange} placeholder="Enter your name"/>
    
        </>
    )
}
export default Hello;