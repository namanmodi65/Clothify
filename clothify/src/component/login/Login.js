import axios from 'axios'
import React,{useRef} from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'

function Login() {
  const { dispatch, user } = useContext(Context)
  const nevigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      {res.data =='Wrong credentials' && alert("Wrong credentials")}
      console.log(user)
      {user && nevigate('/')}
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" })
      console.log(error)
    }
  }

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login