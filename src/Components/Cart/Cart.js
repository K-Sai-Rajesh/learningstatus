import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

    
    let data = useContext(AppContext)   
    const navigate = useNavigate()
    const [response, setResponse] = useState(null)
    const [displayData, setDisplaydata] = useState(null)

    useEffect(() => {
        if(data.state !== []){
            setResponse(data.state)
            setDisplaydata(data.state)
        }
    },[data.state])

    function Display(){
        return(
            <>
            {
                displayData.map((item) => {
                    return(
                        <div key={`${item.cell}`} className="col-10 col-sm-4 col-lg-3 col-xl-2 m-2 p-2 shadow text-center">
                            <div>
                                 <img src={URL.createObjectURL(item.image)} alt={URL.createObjectURL(item.image)} className='w-100' />
                             </div>
                             <div>
                                 <h3>{item.FullName}</h3>
                                 <h6 style={{fontSize:'12px'}}>{item.Email}</h6>
                                 <h4>{item.Phone}</h4>
                                 <h6>{item.Gender}</h6>
                             </div>
                             <button className="btn btn-tranparent border mt-3 border-1 rounded" 
                                     onClick={() => {
                                         data.archieve === undefined ? data.setArchieve(response.splice(response.indexOf(item),1)) : data.setArchieve([...data.archieve, ...response.splice(response.indexOf(item),1)])
                                     }}
                             >Delete</button>
                             <button className="btn btn-tranparent border mt-3 border-1 rounded" 
                                     onClick={() => {
                                        navigate(`/Profile/${item.Phone}`)
                                     }}
                             >Edit</button>
                        </div>
                    )
                })
            }
            </>
        )
    }

    return(
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12 p-5">     
                    <div className="input-group">
                        <input  className="form-control" type="search" placeholder="Search by First Name" aria-label="Search"
                                onChange={(e) => {
                                    const filteredArray = response.filter(item => {
                                        if(item.FullName.toLowerCase().includes(e.target.value.toLocaleLowerCase())) return item
                                        else return null
                                    })
                                    setDisplaydata(filteredArray)
                                }}
                            />
                            <span className="input-group-text" id="basic-addon1">
                                <FaSearch /> 
                            </span>
                    </div>           
                    
                </div>
            {
                displayData !== null ? Display() : <h1 key='1'>Data Not Fetched</h1>
            }
            </div>
        </div>
    )
}
