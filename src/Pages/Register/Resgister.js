import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Resgister = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const { createUser, loginwithGoogle, loginwithGithub, updateProfileUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                form.reset();
                setError('');
                handleProfileUser(name, photoURL)
                navigate(from, { replace: true })

            })
            .catch(e => {
                console.error(e)
                setError(e.message)

            });
    };
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
    const handleProfileUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileUser(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <div className='w-[85%] m-auto mt-8 md:h-full bg-emerald-100 rounded-lg p-8 text-black'>
                <h1 className='text-lg mb-3'>Create your account</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text" className='mr-2 '>Name:</label>
                    <input className='border border-spacing-10 w-[320px] h-[40px] px-9 text-left border-lime-400 rounded-lg mb-8 shadow-lg' type="text" name="name" placeholder='Enter you name' required /> <br />
                    <label htmlFor="Picture" className='mr-2'>Picture:</label>
                    <input className='border border-spacing-10 w-[320px] h-[40px] px-9 text-left border-lime-400 rounded-lg mb-8' type="text" name="photoURL" placeholder='Enter you photoURL' /> <br />
                    <label htmlFor="Email" className='mr-2'>Email:</label>
                    <input className='border border-spacing-10 w-[320px] h-[40px] px-9 text-left border-lime-400 rounded-lg mb-8' type="email" name="email" placeholder='Enter you email' required /> <br />
                    <label htmlFor="password" className='mr-2'>Password:</label>
                    <input className='border border-spacing-10 w-[320px] h-[40px] px-9 text-left border-lime-400 rounded-lg mb-8' placeholder='Enter your password' type="password" name="password" id="" required /><br />
                    <p>{error}</p>
                    {
                        success
                        &&
                        <p className='text-teal-300 mb-3'>
                            Register successfully

                        </p>
                    }
                    <button className='bg-teal-300 w-[320px] h-[40px] px-9 rounded-lg text-lg' type="submit">Register</button>
                </form>
                <p className=' text-lg mb-3 mt-3'>or use one of these options</p>
                <button className='bg-teal-300 w-[320px] h-[45px] text-center px-9 rounded-lg text-lg' type="submit" onClick={handleWithGoogle}>
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

                <h1 className=' text-lg mb-3 mt-3'> Have already an account? <u><Link to='/login'>Login here</Link></u></h1>
            </div>
        </div>
    );
};

export default Resgister;