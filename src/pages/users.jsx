import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import "../index.css"

const Users = () => {
    let[api,setapi]=useState([])
    let[head,thead]=useState([])
    let navigate = useNavigate();

    let x=()=>{
        navigate("/Addusers");
    }

    useEffect(() =>{
        axios.get("http://localhost:1112/user")
        .then(x=>{
            setapi(x.data)
            let keys=x.data[0]
            thead(keys)
        
        })
        .catch(err => {
            console.error("Error fetching data:", err);
        })
    },[api])

    function deleted(id){
        axios.delete(`http://localhost:1112/user/${id}`)
        .then(()=>{navigate('/')})
        .catch(err => {
            console.error("Error failed to navigate:", err);
        })
    }
  return (
    <div id='maindiv'>
      <table border={1}>
        <caption>
            <strong id='heading'>Crud operations</strong> 
            <button id='mainbutton' onClick={x}>Add +</button>
        </caption>
        <thead>
            <tr>
                {Object.keys(head).slice(0,4).map((x,i)=>{
                    return(<th  key={i}>{x}</th>)
                })}
            </tr>
        </thead>
        <tbody>
            {
                api.map(x=>{
                    return(
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            <td>{x.email}</td>
                            <td><Link to={`/edit/${x.id}`}><button>EDIT</button></Link></td>
                            <td><button onClick={()=>deleted(x.id)}>DELETE</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Users
