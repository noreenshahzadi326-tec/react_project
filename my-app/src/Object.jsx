function Object(){
    const person={
        name:"John",
        age:30,
        city:"New York"
    }
    return(
        <>
        <h2>Person Object:</h2>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>City: {person.city}</p>
        </>
    )

}
export default Object;