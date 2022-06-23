import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"
import './Navbar.css'

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
                <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to='/cart' className="nav-link active">Users ({state})</Link>
                </li>
                <li className="nav-item dropdown">
                <Link to='/' className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to='/' className="dropdown-item">Action</Link></li>
                    <li><Link to='/' className="dropdown-item">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to='/' className="dropdown-item">Something else here</Link></li>
                </ul>
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