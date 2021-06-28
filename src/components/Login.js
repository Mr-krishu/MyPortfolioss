import React from 'react';
import { NavLink } from 'react-router-dom';
import login from '../images/login.png';

const Login = () => {
    return (
        <>
            <section className='sign-in'>
                <div className='container mt-5'>
                    <div className='signin-content'>
                        <div className='signin-form'>
                            <h2 className='form-title'>Login</h2>
                            <form className='login-form' id='login-form'>

                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type='email' name='email' id='email' placeholder='Email' autoComplete='off' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type='password' name='password' id='password' placeholder='Password' autoComplete='off' />
                                </div>

                                <div className='form-group form-button'>
                                    <input type='submit' name='login' id='login' className='btn btn-success form-submit' value='Login' />
                                </div>
                            </form>
                        </div>
                        <div className='signin-image'>
                            <NavLink to='/signup' className='image link'>Create an Account</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
