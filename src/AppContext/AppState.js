import { useState } from "react"
import { AppContext } from "./AppContext"

export const AppState = (props) => {
    const [state, setState] = useState(null)

    return(
        <AppContext.Provider value={{state, setState}}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}