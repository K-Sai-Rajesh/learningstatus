import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"

export const Archive = () => {

    let data = useContext(AppContext)   
    const [response, setResponse] = useState(null)
    
    useEffect(() => {
            if(data.archieve !== undefined) setResponse(data.archieve)
    },[data])

    function Display(){
        return(
            <>
            {
                response.map((item) => {
                    return(
                        <div key={URL.createObjectURL(item.image)} className="col-10 col-sm-4 col-lg-3 col-xl-2 m-2 p-2 shadow text-center">
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
                                        response.splice(response.indexOf(item),1)
                                        data.setArchieve(response)
                                        data.setState([...data.state,item])
                                    }}
                            >Restore</button>
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
            {
                response !== null ? Display() : <h1 key='1'>Data Not Fetched</h1>
            }
            </div>
        </div>
    )
}