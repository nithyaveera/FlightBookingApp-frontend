import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style/login.css'
import { myContext } from '../App';

const ForgotComp = () => {
    let {baseurl}=useContext(myContext)
    let navigate = useNavigate()
    let [email,setemail]=useState('')
    const validaionschema = Yup.object().shape({
        password: Yup.string().required('please enter new password')
    })
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: validaionschema,
        onSubmit: async (values, { resetForm }) => {
            await axios.put(`${baseurl}/api/updatepassword/${email}`, values)
                .then(res => {
                    toast.success(res.data.message);
                    setTimeout(() => {
                        navigate('/login')
                    }, 5000);
                })
                .catch(err => { toast.error(err.response.data.message); })
            resetForm();

        }
    })
    return (
        <div className='bg-dark'>
            <div className='container' >
                <div className='row bx'>
                    <div className='col-md-5 mx-auto mt-md-4'>
                        <div className='row main mt-md-5'>
                            <div className=' page'>
                                <form className='row p-5 ' onSubmit={formik.handleSubmit}>
                                    <h2 className='text-center' style={{ fontFamily: "Rakkas" }}>Reset Password</h2>
                                    <div className='col'>
                                        <div className='row'>
                                            <div className="col-12 pt-4">
                                                <label className="form-label">Email <i class="fa-solid fa-envelope"></i></label>
                                                <input type="email" className="form-control mt-3" name='email' value={email} id="inputEmail4" onChange={(e)=>{setemail(e.target.value)}} placeholder='example@gmail.com' />
                                            </div>
                                            <div className="col-12 pt-4 pb-1">
                                                <label className="form-label">New Password <i class="fas fa-lock"></i></label>
                                                <input type="password" className="form-control mt-3" name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='*****' />                               </div>
                                            <div className='text-danger'>{formik.errors.password}</div>                                        
                                        </div>
                                        <div className='row'>
                                            <div className="col-12 pt-4 sub">
                                                <button type="submit" className="btn bg-primary text-white">Reset Password</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotComp;