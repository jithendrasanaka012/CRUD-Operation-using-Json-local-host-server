import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Addusers = () => {
    let [values,setvalues]=useState({name:"",username:"",email:"",id:""})
    let navigate = useNavigate();

    let change = (e)=>{
        setvalues({...values,[e.target.name]:e.target.value});
    }
    function add(e){
        e.preventDefault();
        axios.post("http://localhost:1112/user",values)
        .then(()=>{
            navigate('/')
        })
        .catch(err => {
          console.error("Error failed to navigate:", err);
      })
    }

  return (
    <div>
      <h1>add users</h1>
      <form action="">
        <input type='text' placeholder='enter id' onChange={change} name='id' value={values.id}></input> <br />
        <input type="text" placeholder='add name' onChange={change} name='name' value={values.name}/> <br />
        <input type="text" placeholder='user name' name='username' onChange={change} value={values.username}/> <br />
        <input type="email" placeholder='add email'name='email' onChange={change} value={values.email} /> <br />
        <button onClick={add}>Add user</button>
      </form>
    </div>
  )
}

export default Addusers
