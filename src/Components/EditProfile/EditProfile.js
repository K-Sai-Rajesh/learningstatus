import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContext'

export const NewProfile = () => {

    const params = useParams()
    const data = useContext(AppContext)
    const [state,setState] = useState(null)
    const [image,setImage] = useState(null)
    const navigate = useNavigate()
    
    const [name,setName] = useState(null)
    const [edit,setEdit] = useState(null)
    const [index, setIndex] = useState(null)
    
    useEffect(() => {
        if(data.state !==undefined){
            console.log(data.state)
            console.log(params.id)
            data.state.map(item => {
                 if(item.Phone === params.id ){
                     setState(item)
                     setImage(URL.createObjectURL(item.image))
                     setIndex(data.state.indexOf(item))
                 }
             })
        }
    },[data.state])

    function Edit(){
        switch(edit){
            case 'email' : 
                return(
                    <>
                        <input type="text" className="form-control" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        <button className="btn btn-success" onClick={()=> {
                            state.Email = name
                            setEdit(null)
                        }}>update</button>
                    </>
                )
                break;
            case 'cell' :
                return(
                    <>
                        <input type="text" className="form-control" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        <button className="btn btn-success" onClick={()=> {
                            state.Phone = name
                            setEdit(null)
                        }}>update</button>
                    </>
                )
                break;
        }
    }

    function Display(){
        
        return(
            <div className="text-start">
                <img src={image} alt={image} className='w-100 p-5 mb-3' />
                <div className="input-group mb-3">
                    <input type="file" className="form-control" onChange={(e) => {
                            setImage(URL.createObjectURL(e.target.files[0]))
                            state.picture.large = e.target.files[0]
                            console.log(state)
                        }} />
                </div>
            <div>
                <div className="input-group mb-3">
                    {
                        edit === 'email' ? Edit(state.email) : 
                        <>
                            <input type="text" className="form-control" value={state.Email} onChange={() => {}} />
                            <button className="btn btn-success" onClick={() => {
                                setEdit('email')
                                setName(state.Email)
                            } }>edit</button>
                        </>
                    }
                </div>
                <div className="input-group mb-3">
                    {
                        edit === 'cell' ? Edit(state.cell) : 
                        <>
                            <input type="text" className="form-control" value={state.Phone} onChange={() => {}} />
                            <span className="btn btn-success" onClick={() =>{
                                setEdit('cell')
                                setName(state.Phone)
                            } }>edit</span>
                        </>
                    }
                </div>
            </div>
                    <button className="btn btn-success" onClick={() => {
                        let Store = data.state
                        Store.splice(index,1,state)
                        data.setState(Store)
                        navigate('/cart')
                    }}>Update</button>&emsp;
                    <button className="btn btn-success" onClick={() => {
                        navigate(-1)
                    }}>Back</button>
            </div>
        )
    }

    return(
        <div className='container'>      
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-6 col-lg-6 col-xl-4'>
                {
                    state !== null ? Display() : <h1>Data is not Available to Edit</h1>
                }
                </div>
            </div>
        </div>
    )
}