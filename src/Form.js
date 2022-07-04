import React, { useState } from 'react'
// import './App.css'

const Form = () => {
    // const [stusent,setStudent]=useState=([])
    const [name,setName]=useState=('')
    const [email,setEmail]=useState=('')
    const [password,setPassword]=useState=('')

  return (
    <div >
        <h1><u>Student Registration Form</u></h1>
        <form>
            <lable for='name'>Name</lable>
            <input id='name' placeholder='Enter Name*' value={name} onChange={(e)=>setName(e.target.value)}/>
            <lable for='email'>Email</lable>
            <input id='email' placeholder='Enter Email*' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <lable for='pass'>Password</lable>
            <input id='pass' placeholder='Enter Password*' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </form>
        <button>Add Student</button>
        <table>
          <td>Nama</td>
          <td>Email</td>
          <td>Password</td>
        </table>
        {

        }
    </div>
  )
}

export default Form