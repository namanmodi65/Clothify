// import axios from 'axios'
import { useState } from 'react'
import React  from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const nevigate = useNavigate()
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })


    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const { username, email, password} = credentials
            const response = await fetch("http://localhost:3001/api/auth/resister", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password})
            });
            const json = await response.json()
            console.log(json)
            nevigate('/login')

          } catch (error) {
            console.log(error)
          }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input  className="form-control"  onChange={onChange} name="username" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange} name="password" />
                </div>

                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
        </div>
    )
}

export default Signup