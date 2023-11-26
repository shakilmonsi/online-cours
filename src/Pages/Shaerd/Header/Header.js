import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser, FaBars } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-blue-300 p-0">
                <div className="dropdown dropdown-hover lg:mr-[120px] flex-none">
                    <label tabIndex={0} className="btn m-1 lg:hidden"><FaBars></FaBars></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-right">
                        <li>
                            <NavLink to='/home' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/faq' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to='/courses' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>courses</NavLink>
                        </li>


                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text mr-2">Dark mode</span>
                                <input type="checkbox" className="toggle toggle-accent" checked />
                            </label>
                        </div>
                    </ul>
                </div>
                <div className="flex-1 website-name">
                    <Link className="btn btn-ghost normal-case lg:text-xl" to='/home'> <img src={"https://i.ibb.co/pXsw4x6/logo.png"} alt="" className='w-[40px] h-[40px] rounded-2xl' /> Creative Shaper</Link>
                </div>

                <div className="flex-none bar-item mr-[380px] largenav">
                    <ul className="menu menu-horizontal p-0 m-2">
                        <li>
                            <NavLink to='/home' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/faq' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to='/courses' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>courses</NavLink>
                        </li>


                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text mr-2">Dark mode</span>
                                <input type="checkbox" className="toggle toggle-accent" />
                            </label>
                        </div>

                    </ul>

                </div>
                <div className='mr-4'>
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <button className='p-1 mr-3 font-medium' onClick={handleLogOut}>Log Out</button>
                                </>
                                :
                                <>
                                    <ul>
                                        <li><NavLink to='/login' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white rounded-md' : 'p-1 mr-3 font-medium'}>Log-In</NavLink></li>
                                        <li><NavLink to='/register' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white rounded-md' : 'p-1 mr-3 font-medium'}>Register</NavLink></li>
                                    </ul>
                                </>
                        }
                    </div>
                    <p>{user?.photoURL ?
                        <img src={user?.photoURL} alt="" className='w-[45px] h-[45%] rounded-full' title={user?.displayName} />
                        : <FaUser title={user?.displayName}></FaUser>
                    }</p>

                </div>
            </div>
        </div>
    );
};

export default Header;