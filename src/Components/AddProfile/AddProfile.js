import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"
import {useNavigate} from "react-router-dom"

export const Profile = () => {

    const data = useContext(AppContext)
    const [state, setState] = useState({})
    const [image, setImage] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
    })

    function handleSubmit(e){
        e.preventDefault()
        data.setState([...data.state,state])
    }
    console.log(state)

    return(
        <div className="container">
            <div className="row justify-content-around mt-5">
                <div className="col-12 col-sm-9 col-lg-5 col-xl-4">
                    <img src={image} alt='image' className='w-100 p-2' />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Photo</span>
                        <input  type="file" className="form-control" placeholder="Image" accept="image/*" required 
                                onChange={(e) => {
                                    console.log(state)
                                    let newState = state
                                    setImage(URL.createObjectURL(e.target.files[0]))
                                    newState['image'] = e.target.files[0]
                                    setState(newState)
                                    console.log(state)
                                }}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Mr/Mrs/Master/Miss</span>
                        <input type="text" className="form-control" maxLength={12} placeholder="Full Name" onChange = {(e) => {
                            let newState = state
                            newState["FullName"] = e.target.value
                            setState(newState)
                        }} aria-label="Full Name" aria-describedby="basic-addon1" required />
                    </div>

                    <div className="input-group mb-3">
                        <input  type="text" className="form-control" maxLength={15} 
                                onChange = {(e)=> {
                                    let newState = state
                                    newState["Email"] = `${e.target.value}@example.com`
                                    setState(newState)
                                }}
                                placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>

                    <div className="input-group mb-3">
                        <input  type="tel" pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" 
                                onChange = {(e)=> {
                                    let newState = state
                                    newState["Phone"] = e.target.value
                                    setState(newState)
                                }}
                                maxLength={10}  className="form-control"  placeholder="Phone Number" aria-label="Username" required/>
                        <span className="input-group-text">@</span>
                        <input  type="text" className="form-control" 
                                onChange = {(e)=> {
                                    let newState = state
                                    newState["Gender"] = e.target.value
                                    setState(newState)
                                }}
                                maxLength={6} placeholder="Gender" aria-label="Server" required/>
                    </div>
                    <button className="btn btn-success" type="submit" >Submit</button>&emsp;
                    <button className="btn btn-success" onClick={() => {
                        navigate(-1)
                    }}>Back</button>
                </form>
            </div>
        </div>
    )
}