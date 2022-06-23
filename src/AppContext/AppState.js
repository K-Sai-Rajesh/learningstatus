import axios from "axios"
import { useEffect, useState } from "react"
import { AppContext } from "./AppContext"

export const AppState = (props) => {
    const [state, setState] = useState()
    
    useEffect(() => {
        try{   
            axios.get('https://randomuser.me/api/?results=20')
            .then((res) => {
                setState(res.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
        }catch(e){
        console.log(e)
        }
    },[])

    return(
        <AppContext.Provider value={{ state, setState }}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}