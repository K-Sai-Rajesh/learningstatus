import axios from "axios"
import { useEffect, useState } from "react"
import { AppContext } from "./AppContext"

export const AppState = (props) => {

    const TimeZones = {
        Kolkata : {
            flag : '+',
            gap  : {
                hr : 5,
                min : 30
            }
            },
        Beijing : {
            flag : '+',
            gap  : {
                hr : 8,
                min : 0
            }
        },
        Banglore : {
            flag : '+',
            gap  : {
                hr : 5,
                min : 30
            }
        },
        Barcelona : {
            flag : '+',
            gap  : {
                hr : 2,
                min : 0
            }
        },
        Cairo   :  {
            flag : '+',
            gap  : {
                hr : 2,
                min : 0
            }
        },
        Cape_Town :  {
            flag : '+',
            gap  : {
                hr : 2,
                min : 0
            }
        },
        Berlin  :  {
            flag : '+',
            gap  : {
                hr : 2,
                min : 0
            }
        },
        Boston  :  {
            flag : '-',
            gap  : {
                hr : 4,
                min : 0
            }
        },
        Istanbul  :  {
            flag : '+',
            gap  : {
                hr : 3,
                min : 0
            }
        }, 
        Las_Vegas  :  {
            flag : '-',
            gap  : {
                hr : 7,
                min : 0
            }
        }, 
        Paris  :  {
            flag : '+',
            gap  : {
                hr : 2,
                min : 0
            }
        }, 
        New_York  :  {
            flag : '-',
            gap  : {
                hr : 4,
                min : 0
            }
        }, 
        New_Orleans  :  {
            flag : '-',
            gap  : {
                hr : 5,
                min : 0
            }
        }, 
        Mexico  :  {
            flag : '-',
            gap  : {
                hr : 5,
                min : 0
            }
        }, 
    }

    const [state, setState] = useState([])
    const [archieve, setArchieve] = useState() 
    
    // useEffect(() => {
    //      try{ 
            
            
    //           axios.get('https://randomuser.me/api/?results=20')
    //           .then((res) => {
    //               setState(res.data.results)
    //           })
    //           .catch((error) => {
    //               console.log(error)
    //           })

    //      }catch(e){
    //      console.log(e)
    //      }
    //  },[])

    return(
        <AppContext.Provider value={{ state, archieve, TimeZones, setArchieve,setState }}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}