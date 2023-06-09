import React, { useContext,useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiShoppingCart} from 'react-icons/hi'
import {FiLogIn} from 'react-icons/fi'
import {BiNotepad,BiLogOut} from 'react-icons/bi'
import {AiFillFileAdd} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import logo from '../Clothify.png';
import './Navbar.css'
import { Context } from '../../context/Context'

function Navbar() {
    const {user,dispatch,userType} = useContext(Context)
    const [Admin, setAdmin] = useState(userType||false);
    
    
    useEffect(() => {
        if (userType === 'Admin') {
          setAdmin(true);
        }
      }, [userType]);

    
    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
        localStorage.removeItem('userEmail')
      }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='Container' >
                    <Link className="navbar-brand" to="#">
                        <img src={logo} alt="" width="30" height="24" />
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Clothify</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <AiFillHome/> Home</Link>
                            </li>
                        
                            {user && <li className="nav-item">
                                <Link className="nav-link active" to="/card" tabIndex="-1" aria-disabled="true">
                                <HiShoppingCart /> My_card
                                    </Link>
                            </li>}

                            {user && <li className="nav-item">
                                <Link className="nav-link active" to="/myorder" tabIndex="-1" aria-disabled="true">
                                <BsFillBagCheckFill /> My_order
                                    </Link>
                            </li>}


                            {user && Admin && <li className="nav-item">
                                <Link className="nav-link active" to="/addItem" tabIndex="-1" aria-disabled="true">
                                <AiFillFileAdd /> Add_items
                                    </Link>
                            </li>}


                            <li className="nav-item">
                                {!user ?<Link className="nav-link active" to="/login" tabIndex="-1" aria-disabled="true">
                                <FiLogIn /> Login
                                    </Link>
                                    :<Link className="nav-link active" onClick={handleLogout} > <BiLogOut/> Logout</Link>
                                    }
                            </li>
                            <li className="nav-item">
                                {!user && <Link className="nav-link active" to="/signup" tabIndex="-1" aria-disabled="true">
                                <BiNotepad /> Signup
                                    </Link>}
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>    

        </div>
    )
}

export default Navbar










            