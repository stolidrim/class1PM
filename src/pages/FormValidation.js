import { Formik, ErrorMessage, Form, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'

const FormValidation = () => {
    return (
        <>
            <Nav />
            <Formik
             initialValues={{firstName:'', lastName:'', email:'', password:'',cPassword:''}}
             validationSchema={Yup.object({
                 firstName:Yup.string()
                 .max(20, "firstname must be greater than 20.")
                 .min(3, "First name valid only longer 3 characters.")
                 .required(),

                 lastName:Yup.string()
                 .max(20, "Last Name must be greater than 20.")
                 .min(3, "Last name valid only longer 3 characters.")
                 .required(),

                 email:Yup.string()
                 .email("invalid email please enter valid email ")
                 .required("Email must be entry"),

                password:Yup.string()
                .required("Password must be required")
                .min(8, "minimum 8 length required")
                .matches(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*^&])[a-zA-Z0-9\!@#$%*^&]*$/, "Must be contain one Capital letter, one digit and one special character" ),

                cPassword:Yup.string()
                .oneOf([Yup.ref('password'), null], "Password and confrim password must be match")
             })}
             >
               

                <div className='col-md-6 offset-md-3 shadow-lg p-4 mt-4'>
                   <Form>
                   <center><h3>Register Form</h3></center>
                    <div className='mb-3'>
                        <label htmlFor='firstName'>First Name</label>
                        <Field type="text" name="firstName" className="form-control" />
                        <ErrorMessage name="firstName">
                            {msg => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastName'>Last Name</label>
                        <Field type="text" name="lastName" className="form-control" />
                        <ErrorMessage name="lastName">
                            {msg => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <Field type="email" name="email" className="form-control" />
                        <ErrorMessage name="email">
                            {msg => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password">
                            {msg => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cPassword'>Confirm-Password</label>
                        <Field type="cPassword" name="cPassword" className="form-control" />
                        <ErrorMessage name="cPassword">
                            {msg => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    
                    <div className='mb-3'>
                        <button type="submit" className='btn btn-success col-md-3'>Register</button>
                        <button className='btn btn-success col-md-3 ms-4' type='clear'>Cancel</button>
                    </div>



                   </Form>

                </div>
            </Formik>
            <Footer />
        </>
    )
}

export default FormValidation