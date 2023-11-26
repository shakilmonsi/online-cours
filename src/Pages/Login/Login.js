import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const { signIn, loginwithGoogle, loginwithGithub } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const handleWithGoogle = () => {
        loginwithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(e => console.error(e))
    }

    const handleWithGithub = () => {
        loginwithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <div className='lg:w-[45%] lg:h-[500px] md:h-full md:w-full m-auto mt-1 bg-white rounded-lg p-5 border border-lime-400'>
                <h1 className='text-lg mb-3'>Log in</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Email" className='mr-2 block'>Email:</label>
                    <input className='border border-spacing-10 lg:w-[320px] lg:h-[40px] px-9 text-left border-lime-400 rounded-lg mb-3 shadow-lg' type="email" name='email' placeholder='Enter you email' required /> <br />
                    <label htmlFor="password" className='mr-2 block'>Password:</label>
                    <input className='border border-spacing-10 w-[320px] h-[40px] px-9 text-left border-lime-400 rounded-lg mb-3 shadow-lg' placeholder='Enter your password' type="password" name="password" id="" required /><br />
                    <p>{error}</p>
                    {success && <p className='text-teal-300 mb-3'>Login successfully</p>}
                    <p>Don't have an account?  <u><Link to='/register' className='text-teal-500'>Sign up</Link></u></p>
                    <button className='bg-teal-300 from-lime-500 w-[320px] h-[40px] px-9 rounded-lg text-lg' type="submit">Log in</button>
                </form>
                <p className=' text-lg mb-3 mt-3'>or use one of these options</p>
                <button className='bg-teal-300 w-[320px] mt-2 h-[45px] text-center px-9 rounded-lg text-lg' type="submit" onClick={handleWithGoogle}>
                    <div className='flex items-center justify-between'>
                        <div><FaGoogle></FaGoogle></div>
                        <div><p>Register with google</p></div>
                    </div>
                </button><br />
                <button className='bg-teal-300 w-[320px] mt-3 h-[45px] text-center px-9 rounded-lg text-lg' type="submit" onClick={handleWithGithub}>
                    <div className='flex items-center justify-between'>
                        <div><FaGithub></FaGithub></div>
                        <div><p>Register with github</p></div>
                    </div>
                </button>

            </div>
        </div>
    );
};

export default Login;