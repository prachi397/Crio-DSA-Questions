import react, { useState } from "react"
import axios from "axios";

const Home=()=>{
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [img, setImg] = useState("");

    async function handleButton(id){
        try{
            if(id === 100){
                alert("Failed to fetch data.");
                return;
            }
            let resp = await axios.get(`https://reqres.in/api/users/${id}`)
            setEmail(resp.data.data.email);
            setName(resp.data.data.first_name+" " +resp.data.data.last_name);
            setImg(resp.data.data.avatar);
        } catch(err){
            console.log("Error in fetch data.");
            setEmail("");
            setName("");
            setImg("");
        }
    }
    return(
        <div>
            <button onClick={()=>handleButton(1)}>1</button>
            <button onClick={()=>handleButton(2)}>2</button>
            <button onClick={()=>handleButton(3)}>3</button>
            <button onClick={()=>handleButton(100)}>100</button>
            <ul>
                <li>Name : {name||''}</li>
                <li>Email : {email||''}</li>
            </ul>
            <img src={img || "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"} alt="user"/>
        </div>
    )
}
export default Home;