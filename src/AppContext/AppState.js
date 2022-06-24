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

    const array = {fname:"John", lname:"Doe", age:25};
    //const newArray = array.entries()
    // for (let x of newArray) {
    //     console.log(x)
    //   }
   // delete array[0]

   for (let x in array){
    console.log(x)
   }

   const Obj = new Map([
    ["Key-1","Value-1"]
   ])

   console.log(Obj.size)

   Obj.set('Key-2','Value-2')
   console.log(Obj.size)
  
   Obj.forEach(item => console.log(item))
   //let array = 
   console.log(Obj.keys())

    
    return(
        <AppContext.Provider value={{ state, setState }}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}