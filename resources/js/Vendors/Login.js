import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { ToastContainer,toast } from 'react-toastify';

import { RegisterUser } from '../Controllers/RegisterController';
import { validator, redirectApp } from '../utils';
export default function Login() {

    const [register, setRegister] = useState(true);
    const [Remail, setRemail] = useState('');
    const [Rname, setRname] = useState('');
    const [Rpassword, setRpassword] = useState('');
    const history = useHistory();

    const formData = {
        "name": Rname,
        "email": Remail,
        "password": Rpassword,
    }
    const showLoginform = (e) => {
        e.preventDefault();
        setRegister(!register);
    }

    const validation = async (data) => {
        const rules = {
            "name": "required",
            "email": "required",
            "password": "required",
        }
        return await validator(data, rules);
    }



    const sendRegisterRequest = (e) => {
        e.preventDefault()
        if (validation(formData)) {
            axios.post('/api/vendor_register', formData).then((response) => {
                console.log(response);
                if (response.status == 200) {
                    if (RegisterUser(response)) {
                        redirectApp('/vendor/dashboard');
                    }
                }

            })
                .catch((error) => {
                    console.log(error.response);
                    if (error.response.status == 422) {
                        const errors = error.response.data.errors;
                        for (const key in errors) {
                            if (Object.hasOwnProperty.call(errors, key)) {
                                const element = errors[key][0];
                                console.log(element);
                                toast.error('🦄'+element, {
                                    position: "top-left",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    });
                            }
                        }
                    }
                })
                .finally((res) => {
                    console.log(res);
                })
        }
    }
    return (
        <section id="auth" className="about">
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-12 mt-5 pt-5 pt-lg-0">
                        <div className="row">
                            {register ? (
                                <div className="col-md-8 m-auto mt-lg-5" data-aos="fade-up" data-aos-delay="50">
                                    <i className="bx bx-receipt"></i>
                                    <h4>Register to add your product/Services</h4><br />
                                    <form role="form" className="php-email-form">
                                        <div className="row">
                                            <div className="form-group col-md-8">
                                                <label htmlFor="name">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={(e) => setRname(e.target.value)} required />
                                            </div>
                                            <div className="form-group col-md-8 mt-3 mt-md-0">
                                                <label for="name">Your Email</label>
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={(e) => setRemail(e.target.value)} required />
                                            </div>

                                            <div className="form-group col-md-8 mt-3">
                                                <label for="name">Password</label>
                                                <input type="password" className="form-control" name="password" id="password" placeholder="********" onChange={(e) => setRpassword(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="mt-3 col-md-8">
                                            <span className="d-inline">
                                                <button type="submit" className="btn btn-brand-border" onClick={(e) => sendRegisterRequest(e)}>Register</button>
                                                <button className="btn ml-3" onClick={(e) => showLoginform(e)}>Already have an account? Login</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>) : (
                                <div className="col-md-8 m-auto mt-lg-5" data-aos="fade-up" data-aos-delay="50">
                                    <i className="bx bx-receipt"></i>
                                    <h4>Login to add your product/Services</h4><br />
                                    <form action="" method="post" role="form" className="php-email-form">
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="name">Your Email</label>
                                                <input type="email" name="email" className="form-control" id="name" placeholder="Email" required />
                                            </div>
                                            <div className="form-group col-md-12 mt-3">
                                                <label for="name">Your Password</label>
                                                <input type="password" className="form-control" name="password" id="password" placeholder="************" required />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <span className="d-inline">
                                                <button type="submit" className="btn btn-brand-border">Login</button>
                                                <button className="btn ml-3 btn-info" onClick={(e) => showLoginform(e)}>Don't have an account? Signup</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
