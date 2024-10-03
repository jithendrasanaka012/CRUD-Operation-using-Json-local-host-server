import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Updateusers = () => {
    let [values,setvalues]=useState({name:"",username:"",email:"",id:""})
    let navigate = useNavigate();

    let change = (e)=>{
        setvalues({...values,[e.target.name]:e.target.value});
    }
    let {id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:1112/user/"+id)
        .then(x=>setvalues(x.data))
        .catch(err => {
          console.error("Error failed to set values:", err);
      })
    },[])

    function update (e){
        e.preventDefault();
        axios.put(`http://localhost:1112/user/${id}`,values)
       .then(x=>navigate("/"))
       .catch(err => {
        console.error("Error failed to navigate:", err);
    })
    }

  return (
    <div>
      <h1>Edit users</h1>
      <form action="">
        <input type='text' placeholder='enter id' onChange={change} name='id' value={values.id}></input> <br />
        <input type="text" placeholder='add name' onChange={change} name='name' value={values.name}/> <br />
        <input type="text" placeholder='user name' name='username' onChange={change} value={values.username}/> <br />
        <input type="email" placeholder='add email'name='email' onChange={change} value={values.email} /> <br />
        <button  onClick={update}>Edit user</button>
      </form>
    </div>
  )
}

export default Updateusers
