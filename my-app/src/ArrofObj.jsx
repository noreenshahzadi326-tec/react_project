function ArrofObj(){
const arr0fobj=[
    {firstName:"John",lastName:"Doe",age:30},
    {firstName:"Jane",lastName:"Smith",age:25},
    {firstName:"Bob",lastName:"Johnson",age:40},
    {firstName:"Alice",lastName:"Williams",age:28}
    ]

return(
    <>
<h2>Array of Objects:</h2>
<ul>
{arr0fobj.map((person, index) => (
    <li key={index}>
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p>Age: {person.age}</p>
        </div>
    </li>
))}
</ul>

    </>
)
}

export default ArrofObj;
