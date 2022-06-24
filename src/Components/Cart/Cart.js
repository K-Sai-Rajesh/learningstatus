import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"

export const Cart = () => {

    
    let data = useContext(AppContext)   
    const [response, setResponse] = useState(null)
    const [displayData, setDisplaydata] = useState(null)

    useEffect(() => {
        if(data.state !== undefined){
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
                        <div key={`${item.cell}`} className="col-12 col-sm-4 col-lg-4 col-xl-3 m-2 p-2 shadow text-center">
                            <div>
                                <img src={`${item.picture.large}`} alt={`${item.picture.large}`} className='w-100' />
                            </div>
                            <div>
                                <h3>{item.name.title} {item.name.first} {item.name.last}</h3>
                                <h6 style={{fontSize:'12px'}}>{item.email}</h6>
                                <h4>{item.phone}</h4>
                                <h6>{item.gender}</h6>
                            </div>
                            <button className="btn btn-tranparent border mt-3 border-1 rounded" 
                                    onClick={() => {
                                        const filteredArray = response.filter((indiv) => {
                                            if(item.cell !== indiv.cell) return indiv
                                            else return null
                                        })
                                        data.setState(filteredArray)
                                    }}
                            >Delete</button>
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
                    <input  className="form-control me-2" type="search" placeholder="Search by First Name" aria-label="Search"
                            onChange={(e) => {
                                const filteredArray = response.filter(item => {
                                    if(item.name.first.toLowerCase().includes(e.target.value.toLocaleLowerCase())) return item
                                    else return null
                                })
                                setDisplaydata(filteredArray)
                            }}
                        />
                </div>
            {
                displayData !== null ? Display() : <h1 key='1'>Data Not Fetched</h1>
            }
            </div>
        </div>
    )
}