import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"
import './Navbar.css'
import { FaHome } from 'react-icons/fa'
import { IconContext } from "react-icons"

export const Navbar = () => {

    const data = useContext(AppContext)
    const [state,setState] = useState(0)

    useEffect(() => {
          if(data.state !== undefined) setState(data.state.length)
    },[data])

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid p-3">
            <Link to='/' className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto w-75 justify-content-center mb-2 mb-lg-0">
                <li className="nav-item current">
                <Link to='/' className="nav-link active" aria-current="page">
                    <IconContext.Provider value={{size:'25px', color:'grey'}} >
                        <FaHome/>
                    </IconContext.Provider>
                </Link>
                </li>
                <li className="nav-item current">
                <Link to='/cart' className="nav-link active">Users <span style={{fontSize:'10px'}}>({state})</span></Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}