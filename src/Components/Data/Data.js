import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import { useState } from "react"

const Data = () => {

    const [data, setData] = useState(null)

    const validationSchema = yup.object().shape({
        limit : yup.string().required("Please Specify the Limit"),
        // email : yup.string().required("Please Enter your Email"),
        // username : yup.string().required("Please Enter your Username")
    })

    const handleSubmit = (values) => {
        try{

            console.log(values)

            axios.post("http://localhost:5000",values)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

        }catch(e){
            console.log(e)
        }
    }

    const initialValues = {
        limit : '',
        // email : '',
        // username : ''
    }

    function DisplayData(){
        return(
            <>
            {
                data.map((item) => {
                    return(
                        <div key={item.restaurant_id} className="card text-center p-2 shadow col-12 col-sm-5 col-lg-4">
                            <h5>{item.name}-{item.restaurant_id}</h5>
                            <h6>{item.cuisine}</h6>
                            <h4>{item.borough}</h4>
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
                    <Formik initialValues={initialValues}  validationSchema={validationSchema}
                        onSubmit = {handleSubmit}
                    > 
                        <Form>
                        <div className="m-2 row g-3 card p-3 shadow needs-validation" noValidate>
                            <div className="col-12 col-sm-4 col-md-5">
                                <Field className="form-control" type='text' name='limit' placeholder='Enter your Name'  />
                                <p className="text-danger">
                                    <ErrorMessage name='limit' />
                                </p>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </div>
                        </Form>
                    </Formik>
            </div>
            <div className="row">
                {
                    data !== null ? DisplayData() : <h1>Data is not Fetch Yet</h1>
                }
            </div>
        </div>
    )
}

export default Data



{/* <div className="col-12 col-sm-4 col-md-5">
<Field className="form-control" type='text' name='email' placeholder='Enter your Email'  />
<p className="text-danger">
<ErrorMessage name='email' />
</p>
</div>
<div className="col-12 col-sm-4 col-md-5">
<Field className="form-control" type='text' name='username' placeholder='Enter your Username'  />
<p className="text-danger">
<ErrorMessage name='username' />
</p>
</div> */}