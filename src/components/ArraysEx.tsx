import { useState } from "react";

interface Pet {
    name:string;
    type:string;
    id:number;

}
function ArraysEx() {
    const [colors,setColor] = useState(["red","orange","yellow"]);
    function addColor(color:string) :void {
        setColor(prev => [...prev,color])
    }
    const [pets,setPets] =useState<Pet[]>([
       { name:"Cole", type:"cat",id:1},
       { name:"Denzel",type:"dog",id:2},
       { name:"Bernie",type:"cat",id:3}
    ])
        
    
    return (
    <div className = "ArraysEx">
        <ol>
            {colors.map((color,i) => <li key ={i}>{color}</li>)}
        </ol>
        <button onClick={()=> addColor("green")}>Green</button>
        <button onClick = {() => addColor("blue")}>Blue</button>
        <button onClick ={() => addColor("purple")}>Purple</button>
        <div>
         
        <table>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
            {pets.map((pet)=>
            <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
            </tr>)}
        </table>
        </div>
    </div>
    
    )
}

export default ArraysEx;