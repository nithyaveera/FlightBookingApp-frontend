import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style/register.css"
import { myContext } from '../App';


const RegiserComp = () => {
    let {baseurl}=useContext(myContext)
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate()
    let [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        phonenumber: '',
        dateofbirth: '',
        role:''
    })
    const validaionschema = Yup.object().shape({
        name: Yup.string().required('Please Enter Name'),
        email: Yup.string().required('Please Enter Email'),
        password: Yup.string().required('please Enter Password'),
        phonenumber: Yup.string().required('Please Enter Phone Number'),
        dateofbirth: Yup.string().required('please Enter Date of Birth'),
        role:Yup.string().required('Please click any One of this')
    })

    const formik = useFormik({
        initialValues: user,
        validationSchema: validaionschema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            await axios.post(`${baseurl}/api/register`, values)
                .then(res => { toast.success(res.data.message); })
                .catch(err => { toast.error(err.response.data.message); })
            setTimeout(() => {
                resetForm();
                navigate('/login')
            }, 5000);
            setLoading(false);
        }
    })

    return (
        <div className='register-container'>
            <div className='container ' >
                <div className='row pb-2 '>
                    <div className='col-md-10 mx-auto '>
                        <div className='row con mt-md-4'>
                            <div className='col-md-6 img' style={{ fontFamily: "Anton", fontSize: "bold" }}>
                                <h1>Every New Journey is a
                                    New Adventure</h1>
                                <h5>Let's Start!</h5>
                            </div>
                            <div className='col-md-6 page'>
                                <form className='row  p-5 form' onSubmit={formik.handleSubmit}>
                                    <h2 className='text-center'>Sign Up <i className="fa-solid fa-user-lock"></i></h2>
                                    <div className='col'>
                                        <div className='row'>
                                            <div className="col-12 ">
                                                <label className="form-label">Name <i class="fa-solid fa-user"></i> </label>
                                                <input type="text" className="form-control" name='name' value={formik.values.name} placeholder='Name' onChange={formik.handleChange} />
                                                <div className='text-danger'>{formik.errors.name}</div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-12 pt-1">
                                                <label className="form-label">Email <i class="fa-solid fa-envelope"></i></label>
                                                <input type="email" className="form-control" name='email' value={formik.values.email} id="inputEmail4" onChange={formik.handleChange} placeholder='example@gmail.com' />
                                                <div className='text-danger'>{formik.errors.email}</div>
                                            </div>
                                            <div className="col-12 pt-1">
                                                <label className="form-label">Password <i class="fas fa-lock"></i></label>
                                                <input type="password" className="form-control" name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='*****' />                               </div>
                                            <div className='text-danger'>{formik.errors.password}</div>
                                            <div className="col-12 pt-1">
                                                <label className="form-label">Phone Number <i className="fas fa-phone"></i></label>
                                                <input type="tel" className="form-control" name='phonenumber' value={formik.values.phonenumber} id="inputAddress" onChange={formik.handleChange} placeholder="78698-87654" />
                                                <div className='text-danger'>{formik.errors.phonenumber}</div>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-1">
                                            <label className="form-label">Date of Birth <i className="fas fa-calendar"></i></label>
                                            <input type="date" className="form-control" name='dateofbirth' value={formik.values.dateofbirth} onChange={formik.handleChange} />
                                            <div className='text-danger'>{formik.errors.dateofbirth}</div>
                                        </div>
                                        <div className="col-12 pt-1">
                                            <label className="form-label role">Role  :</label>

                                                <input
                                                type="radio"
                                                    name="role"
                                                    value="admin"
                                                    checked={formik.values.role === "admin"}
                                                    onChange={formik.handleChange}
                                                />
                                                <label htmlFor="admin" className='role'>Admin</label>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="user"
                                                    checked={formik.values.role === "user"}
                                                    onChange={formik.handleChange}
                                                />
                                                <label htmlFor="user">User</label>
                                            <div className='text-danger'>{formik.errors.role}</div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-12 pt-3 sub">
                                                {loading ? (
                                                    <div className="round-loader"></div>

                                                ) : (
                                                        <button type="submit" className="btn bg-primary text-white">Register</button>
                                                )}
                                         </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-12 pt-3">
                                                <span>Already Have an Account? </span>
                                                <Link to='/login'>Sign In</Link>
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

export default RegiserComp;