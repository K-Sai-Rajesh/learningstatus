import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"

export const Home = () => {

    let data = useContext(AppContext)   
    const [response, setResponse] = useState(null)
    
    useEffect(() => {
        if(data.state !== null) setResponse(data.state)
    },[])

    function Display(){
        return(
            <>
            {
                response.map((item) => {
                    return(
                        <div key={`${item.picture.large}`} className="col-12 col-sm-4 col-lg-3">
                            <div>
                                <img src={`${item.picture.large}`} alt={`${item.picture.large}`} className='w-100' />
                            </div>
                            <div>
                                <h3>{item.name.title} {item.name.first} {item.name.last}</h3>
                                <h6>{item.email}</h6>
                                <h4>{item.phone}</h4>
                                <h6>{item.gender}</h6>
                            </div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    return(
        <div className="container">
            <div className="row">
            {
                response !== null ? Display() : <h1 key='1'>Data Not Fetched</h1>
            }
            </div>
        </div>
    )
}