import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContext"
import './Navbar.css'
import { FaHome, FaClock } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { IconContext } from "react-icons"
import { TiUserDelete } from 'react-icons/ti'
import { SiDatabricks } from 'react-icons/si'

export const Navbar = () => {

    const data = useContext(AppContext)
    const [state,setState] = useState(0)
    const [arch,setArch] = useState(0)

    useEffect(() => {
          if(data.state !== undefined) setState(data.state.length)
          if(data.archieve !== undefined) setArch(data.archieve.length)
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
                    <IconContext.Provider value={{size:'25px', color:'grey' }} >
                        <FaHome/>
                    </IconContext.Provider>
                </Link>
                </li>
                <li className="nav-item current">
                <Link to='/cart' className="nav-link active">
                    <IconContext.Provider value={{ style:{ fontSize:'25px', color:'grey' } }} >
                        <HiUserGroup /> 
                    </IconContext.Provider>&nbsp;
                        <span style={{fontSize:'10px'}}>({state})</span></Link>
                </li>
                <li className="nav-item current">
                <Link to='/archieve' className="nav-link active">
                    <IconContext.Provider value={{ style:{ fontSize:'25px', color:'grey' } }} >
                        <TiUserDelete /> 
                    </IconContext.Provider>&nbsp;
                        <span style={{fontSize:'10px'}}>({arch})</span></Link>
                </li>
                <li className="nav-item current">
                <Link to='/timezones' className="nav-link active">
                    <IconContext.Provider value={{ style:{ fontSize:'25px', color:'grey' } }} >
                        <FaClock /> 
                    </IconContext.Provider>
                </Link>
                </li>
                <li className="nav-item current">
                <Link to='/data' className="nav-link active">
                    <IconContext.Provider value={{ style:{ fontSize:'25px', color:'grey' } }} >
                        <SiDatabricks /> 
                    </IconContext.Provider>
                </Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type = 'text' placeholder="Search" aria-label="Search"  />
                <button className="btn btn-outline-success" onClick={(e) => { e.preventDefault()}} >Search</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}