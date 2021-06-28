import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import registration from '../images/signup.jpg';

const Signup = () => {
    const [user, setUser] = useState({
        name : "",
        email : "",
        phone : "",
        work : "",
        password : "",
        cpassword : ""
    });

    let name, value;
    const handleInputs = (e) =>{
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    return (
        <>
            <section className='signup'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Sign up</h2>
                            <form className='register-form' id='register-form'>
                                <div className='form-group'>
                                    <label htmlFor='name'>
                                        <i class="zmdi zmdi-account"></i>
                                    </label>
                                    <input type='text' name='name' id='name' placeholder='Full Name' autoComplete='off'
                                    value={user.name} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type='email' name='email' id='email' placeholder='Email' autoComplete='off'
                                    value={user.email} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='phone'>
                                        <i class="zmdi zmdi-phone-in-talk"></i>
                                    </label>
                                    <input type='number' name='phone' id='phone' placeholder='Phone' autoComplete='off'
                                    value={user.phone} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='work'>
                                        <i class="zmdi zmdi-slideshow"></i>
                                    </label>
                                    <input type='text' name='work' id='work' placeholder='Profession' autoComplete='off'
                                    value={user.work} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type='password' name='password' id='password' placeholder='Password' autoComplete='off'
                                    value={user.password} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='cpassword'>
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type='password' name='cpassword' id='cpassword' placeholder='Confirm Password' autoComplete='off'
                                    value={user.cpassword} onChange={handleInputs} />
                                </div>
                                <div className='form-group form-button'>
                                    <input type='submit' name='register' id='signup' className=' btn btn-success form-submit' value='Register' />

                                </div>
                                <NavLink to='/login' className=' image link'>I am already register</NavLink>
                            </form>
                        </div>
                            
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
