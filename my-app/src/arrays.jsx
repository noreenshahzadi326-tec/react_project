function Arrays() {
    const arr=["Apple","Banana","Cherry","Date","Elderberry"];
return(
<>

<h2>Fruits Array:</h2>
<ul>
    {arr.map((fruit,index)=>(
        <li key={index}>{index} - {fruit}</li>
    ))}
</ul>
</>

)
}
export default Arrays;