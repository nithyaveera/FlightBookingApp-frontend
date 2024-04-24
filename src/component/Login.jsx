import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style/login.css'
import { myContext } from '../App';

const Login = () => {
    let { setoken, baseurl, setuseremail } = useContext(myContext)
    const [loading, setLoading] = useState(false)
    let [user, setuser] = useState({
        email: '',
        password: ''
    })
    let navigate = useNavigate()
    const validaionschema = Yup.object().shape({
        email: Yup.string().required('Please Enter Email'),
        password: Yup.string().required('please Enter Password')
    })

    const formik = useFormik({
        initialValues: user,
        validationSchema: validaionschema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            await axios.post(`${baseurl}/api/login`, values)
                .then(res => {
                    toast.success(res.data.message);
                    setoken(res.data.token)
                    setTimeout(() => {
                    navigate('/home')
                    }, 5000);
})
                .catch(err => { toast.error(err.response.data.message); })

            setuseremail(values.email);
            resetForm();
            setLoading(false);
        }
    })
    return (
        <div className='bg-dark'>
        <div className='container' >
            <div className='row bx'>
                <div className='col-md-9 mx-auto mt-md-4'>
            <div className='row main mt-md-5'>
                        <div className='col-md-6 imgg' >
                    <h1>Every New Journey is a
                    New Adventure</h1>
                    <h5>Let's Start!</h5>
                </div>
                <div className='col-md-6 page'>
                    <form className='row p-5 ' onSubmit={formik.handleSubmit}>
                                <h2 className='text-center' style={{ fontFamily: "Rakkas"}}>Sign In</h2>
                        <div className='col'>
                            <div className='row'>
                                <div className="col-12 pt-4">
                                    <label className="form-label">Email <i class="fa-solid fa-envelope"></i></label>
                                    <input type="email" className="form-control mt-3" name='email' value={formik.values.email} id="inputEmail4" onChange={formik.handleChange} placeholder='example@gmail.com' />
                                    <div className='text-danger'>{formik.errors.email}</div>
                                </div>
                                <div className="col-12 pt-4 pb-1">
                                    <label className="form-label">Password <i class="fas fa-lock"></i></label>
                                    <input type="password" className="form-control mt-3" name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='*****' />                               </div>
                                <div className='text-danger'>{formik.errors.password}</div>
                            <div>
                                                <Link to='/forgot'>Forgot Password</Link>               
                            </div>
                                
                            </div>

                            <div className='row'>
                                <div className="col-12 pt-4 sub">
                                                {loading ? (
                                                    <div className="round-loader"></div>
                                                        
                                                ) : (
                                                    <button type="submit" className="btn bg-primary text-white">Login</button>
                                                )}
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 pt-3">
                                    <span>Don't have an account ? </span>
                                    <Link to='/register'>Sign Up</Link>
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

export default Login;