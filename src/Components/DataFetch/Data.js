import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext/AppContext"

const Data = () => {

    const [state, setState] = useState(null)
    const data = useContext(AppContext)
    const [seconds, setSeconds] = useState(true)

    function Data(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('Image',state)

        axios.post('http://localhost:5000/data',formData)
        .then((result) => {
            console.log(result.status)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
    },[seconds])

    setInterval(() =>{
        if(seconds) setSeconds(false)
        else setSeconds(true)
    },1000)

    function TimeZones(){
        return(
            <>
            {
                Object.keys(data.TimeZones).map(entry => {
                    let hr = 0
                    let min = 0

                    let flag = 'AM'

                    if(data.TimeZones[`${entry}`].flag === '+'){
                        if((new Date()).getUTCHours() + data.TimeZones[`${entry}`].gap.hr > 12){
                            flag = 'PM'
                            if((new Date()).getUTCMinutes() + data.TimeZones[`${entry}`].gap.min > 59){
                                hr = ((new Date()).getUTCHours() + data.TimeZones[`${entry}`].gap.hr) -12 + 1
                                min = ((new Date()).getUTCMinutes() + data.TimeZones[`${entry}`].gap.min) - 60
                            }else{
                                hr = ((new Date()).getUTCHours() + data.TimeZones[`${entry}`].gap.hr) -12
                                min = (new Date()).getUTCMinutes() + data.TimeZones[`${entry}`].gap.min
                            }
                        }
                        else{
                            if((new Date()).getUTCMinutes() + data.TimeZones[`${entry}`].gap.min > 59){
                                hr = ((new Date()).getUTCHours() + data.TimeZones[`${entry}`].gap.hr)+ 1
                                min = ((new Date()).getUTCMinutes() + data.TimeZones[`${entry}`].gap.min) - 60
                            }else{
                                hr = ((new Date()).getUTCHours() + data.TimeZones[`${entry}`].gap.hr)
                                min = (new Date()).getUTCMinutes() + data.TimeZones[`${entry}`].gap.min
                            }
                        }
                    }
                    else if(data.TimeZones[`${entry}`].flag === '-'){

                        if((new Date()).getUTCHours() - data.TimeZones[`${entry}`].gap.hr > 12){
                            flag = 'PM'
                            if( (new Date()).getUTCMinutes() - data.TimeZones[`${entry}`].gap.min < 0){
                                if((new Date()).getUTCHours() - data.TimeZones[`${entry}`].gap.hr - 1 < 0){
                                    hr = ((new Date()).getUTCHours() - data.TimeZones[`${entry}`].gap.hr - 1) + 12
                                    min = data.TimeZones[`${entry}`].gap.min
                                }
                                else{
                                    hr = (new Date()).getUTCHours() - data.TimeZones[`${entry}`].gap.hr - 1
                                    min = data.TimeZones[`${entry}`].gap.min
                                }
                            }else{
                                hr = (new Date()).getUTCHours() - data.TimeZones[`${entry}`].gap.hr
                                min = (new Date()).getUTCMinutes() - data.TimeZones[`${entry}`].gap.min
                            }
                        }
                        else{
                            if( (new Date()).getUTCMinutes() - data.TimeZones[`${entry}`].gap.min < 0){
                                hr = (new Date()).getUTCHours() - data.TimeZones[`${entry}`].gap.hr - 1
                                min = data.TimeZones[`${entry}`].gap.min
                            }else{
                                hr = (new Date()).getUTCHours() - data.TimeZones[`${entry}`].gap.hr
                                min = (new Date()).getUTCMinutes() - data.TimeZones[`${entry}`].gap.min
                            }
                        }

                       
                    }
                    return(
                        <div key={entry} className="col-10 mt-5 p-3 col-sm-4 col-lg-4 shadow flex-column flex-sm-row justify-content-around">
                            <div>
                                <h1>{entry}</h1>
                                <h6><span style={{color:'blue'}}>{data.TimeZones[`${entry}`].flag}ve</span> by {data.TimeZones[`${entry}`].gap.hr} Hours and {data.TimeZones[`${entry}`].gap.min} Minutes</h6>
                            </div>
                            <div>
                                <h4 style={{color:'royalblue'}}>{hr}:{min}:{(new Date()).getSeconds()} {flag}</h4>
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
                <div className="col-10 col-sm-5">
                    <form onSubmit={Data} name="Image">
                        <h3>Upload your Data</h3>
                        <input type='file' name="Image" accept="image/*" onChange={(e) => {
                                setState(e.target.files[0])
                        }} />
                        <input type='submit' className='btn btn-success' />
                    </form>
                </div>
            </div>
            <div className="row justify-content-around text-center">
            {
                TimeZones()
            }
            </div>

        </div>
    )
}

export default Data