import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"
import axios from 'axios'

export const Cart = () => {

    
    let data = useContext(AppContext)   
    const [response, setResponse] = useState(null)  

    useEffect(() => {
        try{   
            axios.get('https://randomuser.me/api/?results=20')
            .then((res) => {
                setResponse(res.data.results)
                data.setState(res.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
        }catch(e){
        console.log(e)
        }
    },[])

    function Display(){
        return(
            <>
            {
                response.map((item) => {
                    return(
                        <div key={`${item.picture.large}`} className="col-12 col-sm-4 col-lg-3 p-2">
                            <div>
                                <img src={`${item.picture.large}`} alt={`${item.picture.large}`} className='w-100' />
                            </div>
                            <div>
                                <h3>{item.name.title} {item.name.first} {item.name.last}</h3>
                                <h6>{item.email}</h6>
                                <h4>{item.phone}</h4>
                                <h6>{item.gender}</h6>
                            </div>
                            <button className="btn btn-tranparent border border-1 rounded" 
                                    onClick={() => {
                                        console.log(item.cell)
                                        const filteredArray = response.filter((indiv) => {
                                            if(item.cell !== indiv.cell) return indiv
                                        })
                                        data.setState(filteredArray)
                                        setResponse(filteredArray)
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
            <div className="row">
            {
                response !== null ? Display() : <h1 key='1'>Data Not Fetched</h1>
            }
            </div>
        </div>
    )
}